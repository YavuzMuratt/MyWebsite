from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
import traceback
from dotenv import load_dotenv

# .env dosyasını yükle (eğer varsa)
load_dotenv()

app = Flask(__name__)
CORS(app)

# Mail konfigürasyonu
app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', 'True').lower() in ['true', '1', 't', 'yes']
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your-email@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'your-app-password')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER', 'your-email@gmail.com')
app.config['MAIL_TO_ADDRESS'] = os.environ.get('MAIL_TO_ADDRESS', 'yyavuzmurat@gmail.com')

mail = Mail(app)

@app.route('/')
def home():
    return "Flask Backend is Running!"

# Mevcut mail ayarlarını görüntüleme için endpoint (GÜVENLİK İÇİN PAROLA HARİÇ)
@app.route('/api/mail-config')
def mail_config():
    config = {
        'MAIL_SERVER': app.config['MAIL_SERVER'],
        'MAIL_PORT': app.config['MAIL_PORT'],
        'MAIL_USE_TLS': app.config['MAIL_USE_TLS'],
        'MAIL_USERNAME': app.config['MAIL_USERNAME'],
        'MAIL_DEFAULT_SENDER': app.config['MAIL_DEFAULT_SENDER'],
        'MAIL_TO_ADDRESS': app.config['MAIL_TO_ADDRESS'],
    }
    return jsonify(config)

# Email gönderme işlemini test etmek için endpoint
@app.route('/api/test-email')
def test_email():
    try:
        msg = Message(
            subject="Test Email",
            recipients=[app.config['MAIL_TO_ADDRESS']],
            body="Bu bir test emailidir. İletişim formu çalışıyor mu diye kontrol ediyoruz.",
            sender=app.config['MAIL_DEFAULT_SENDER']
        )
        mail.send(msg)
        return jsonify({"success": True, "message": "Test emaili başarıyla gönderildi!"})
    except Exception as e:
        error_traceback = traceback.format_exc()
        print(f"Test email hatası: {str(e)}")
        print(error_traceback)
        return jsonify({
            "success": False, 
            "message": f"Test email gönderimi başarısız: {str(e)}",
            "traceback": error_traceback
        }), 500

def send_contact_email(name, email, subject, message, phone=None):
    """İletişim formu gönderimlerini email olarak ilet"""
    recipient = app.config['MAIL_TO_ADDRESS']
    
    # Email içeriğini oluştur
    email_subject = f"İletişim Formu: {subject}"
    
    # Telefon numarası varsa içeriğe ekle
    phone_info = f"Telefon: {phone}\n" if phone else ""
    
    email_body = f"""
Yeni bir iletişim formu gönderimi:

İsim: {name}
E-posta: {email}
{phone_info}
Konu: {subject}
Mesaj:

{message}
"""

    msg = Message(
        subject=email_subject,
        recipients=[recipient],
        body=email_body,
        reply_to=email,  # Gönderen kişiye doğrudan yanıt verebilmek için
        sender=app.config['MAIL_DEFAULT_SENDER']
    )
    
    mail.send(msg)

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    # Verileri al
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    phone = data.get('phone', '')  # İsteğe bağlı telefon numarası

    # Gerekli alanların kontrolü
    if not all([name, email, subject, message]):
         return jsonify({"error": "Missing required fields"}), 400

    try:
        print(f"Form verisi alındı: {name}, {email}, {subject}, telefon: {phone}")
        # Email gönder
        send_contact_email(name, email, subject, message, phone)
        
        # Başarılı yanıt
        return jsonify({
            "success": True,
            "message": "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız."
        }), 200
    
    except Exception as e:
        error_traceback = traceback.format_exc()
        print(f"Email gönderme hatası: {str(e)}")
        print(error_traceback)
        return jsonify({
            "success": False,
            "message": f"Mesajınız gönderilirken bir hata oluştu: {str(e)}",
            "traceback": error_traceback
        }), 500

# Alternatif olarak, form verisini kaydetmek için (mail gönderimi olmadan)
@app.route('/api/contact-save', methods=['POST'])
def save_contact():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    # Verileri al
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    phone = data.get('phone', '')

    # Gerekli alanların kontrolü
    if not all([name, email, subject, message]):
         return jsonify({"error": "Missing required fields"}), 400

    try:
        # Bu kısımda verileri bir dosyaya kaydediyoruz (email gönderme olmadan)
        with open('contact_submissions.txt', 'a', encoding='utf-8') as f:
            f.write(f"\n\n--- YENİ MESAJ ---\n")
            f.write(f"İsim: {name}\n")
            f.write(f"E-posta: {email}\n")
            if phone:
                f.write(f"Telefon: {phone}\n")
            f.write(f"Konu: {subject}\n")
            f.write(f"Mesaj:\n{message}\n")
            f.write(f"-------------------\n")
        
        return jsonify({
            "success": True,
            "message": "Mesajınız başarıyla kaydedildi. En kısa sürede size dönüş yapacağız."
        }), 200
    
    except Exception as e:
        print(f"Mesaj kaydetme hatası: {str(e)}")
        return jsonify({
            "success": False,
            "message": "Mesajınız kaydedilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) 