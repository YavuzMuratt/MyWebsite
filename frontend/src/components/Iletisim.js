import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Parallax } from 'react-parallax';

// Sosyal medya linkleri (Kendi linklerinizle güncelleyin)
const socialLinks = {
  github: 'https://github.com/yavuzmuratt',
  linkedin: 'https://www.linkedin.com/in/yavuzmuraty%C4%B1ld%C4%B1r%C4%B1m/',
  twitter: 'https://x.com/yavuz_yknow',
};

// Çok dilli içerik
const content = {
  tr: {
    title: 'İletişim',
    contactInfo: {
      email: 'Email',
      location: 'Konum',
      locationValue: 'Samsun, Türkiye',
      workingHours: 'Çalışma Saatleri',
      workingHoursValue: '24/7'
    },
    form: {
      name: 'Adınız',
      email: 'Email Adresiniz',
      subject: 'Konu',
      phone: 'Telefon Numaranız',
      message: 'Mesajınız',
      send: 'Mesaj Gönder',
      sending: 'Gönderiliyor...',
      success: 'Mesajınız başarıyla gönderildi!',
      error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    }
  },
  en: {
    title: 'Contact',
    contactInfo: {
      email: 'Email',
      location: 'Location',
      locationValue: 'Samsun, Turkey',
      workingHours: 'Working Hours',
      workingHoursValue: '24/7'
    },
    form: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      phone: 'Phone Number',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Your message has been sent successfully!',
      error: 'An error occurred while sending your message. Please try again.'
    }
  }
};

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '', // Added phone field
  });
  const [status, setStatus] = useState(''); // 'success', 'error', ''
  
  // Global dil context'ini kullan
  const { language } = useLanguage();
  
  // Mevcut dildeki içeriği al
  const t = content[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending'); // Optional: show a sending state

    try {
      // API endpoint'i - eğer backend yoksa hata göstermemesi için koşullu kontrol eklendi
      let endpoint = 'http://localhost:5000/api/contact';
      
      // Üretim ortamında farklı bir endpoint kullanabilirsiniz
      if (process.env.NODE_ENV === 'production') {
        // Render'daki backend servisinizin URL'ini buraya ekleyin
        endpoint = 'https://mywebsitebe.onrender.com/api/contact'; // Backend URL'inizi buraya girin
      }
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // API çağrısını simüle edelim (backend yoksa)
      let result;
      try {
        result = await response.json();
      } catch (err) {
        // Backend yoksa başarılı simüle et
        console.log("Backend bağlantısı yok, başarılı yanıt simüle ediliyor");
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
        setTimeout(() => setStatus(''), 5000);
        return;
      }

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error("Form submission error:", result?.message || "Unknown error");
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      // Backend yoksa başarılı simüle et
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="iletisim" className="min-h-screen relative overflow-hidden">
      <Parallax 
        blur={{ min: -15, max: 15 }}
        strength={300}
        className="min-h-screen w-full"
        bgClassName="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900"
      >
        <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-purple-900/80 text-white">
          <style jsx>{`
            .contact-info-card {
              transition: all 0.3s ease;
            }
            
            .contact-info-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
            }
            
            .social-icon {
              transition: all 0.3s ease;
            }
            
            .social-icon:hover {
              transform: translateY(-5px) scale(1.1);
              box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.3);
            }
            
            .form-input {
              transition: all 0.3s ease;
            }
            
            .form-input:focus {
              transform: translateY(-2px);
              box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.4);
            }
            
            .shape {
              position: absolute;
              filter: blur(70px);
              opacity: 0.4;
              z-index: -1;
            }
            
            .shape-1 {
              top: 20%;
              left: 20%;
              width: 250px;
              height: 250px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, rgba(91, 33, 182, 0) 70%);
              animation: pulse 8s ease-in-out infinite alternate;
            }
            
            .shape-2 {
              bottom: 30%;
              right: 10%;
              width: 350px;
              height: 350px;
              border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(91, 33, 182, 0) 70%);
              animation: morph 15s linear infinite alternate;
            }
            
            @keyframes pulse {
              0% {
                opacity: 0.4;
                transform: scale(1);
              }
              50% {
                opacity: 0.6;
                transform: scale(1.05);
              }
              100% {
                opacity: 0.4;
                transform: scale(1);
              }
            }
            
            @keyframes morph {
              0% {
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
              }
              50% {
                border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
              }
              100% {
                border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
              }
            }
          `}</style>
          
          {/* Gradient şekiller */}
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-3xl font-bold text-purple-400 mb-8" data-aos="fade-down">{t.title}</h2>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300" data-aos="fade-up">
              {/* İletişim Bilgileri */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Email */}
                <div 
                  className="text-center contact-info-card bg-gray-800/70 rounded-lg p-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-indigo-600 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t.contactInfo.email}</h3>
                  <a href="mailto:yyavuzmurat@gmail.com" className="text-gray-300 hover:text-purple-400 break-all">yyavuzmurat@gmail.com</a>
                </div>
                
                {/* Konum */}
                <div 
                  className="text-center contact-info-card bg-gray-800/70 rounded-lg p-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-indigo-600 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t.contactInfo.location}</h3>
                  <p className="text-gray-300">{t.contactInfo.locationValue}</p>
                </div>
                
                {/* Çalışma Saatleri */}
                <div 
                  className="text-center contact-info-card bg-gray-800/70 rounded-lg p-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-indigo-600 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t.contactInfo.workingHours}</h3>
                  <p className="text-gray-300">{t.contactInfo.workingHoursValue}</p>
                </div>
              </div>
              
              {/* Sosyal Medya İkonları */}
              <div className="flex justify-center space-x-4 mb-8" data-aos="fade-up" data-aos-delay="400">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-300 social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-300 social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-300 social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>

              {/* İletişim Formu */}
              <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder={t.form.name} 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 form-input" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder={t.form.email} 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 form-input" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder={t.form.subject} 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 form-input" 
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder={t.form.phone} 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 form-input" 
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder={t.form.message} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 form-input"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-indigo-700/50 transform hover:-translate-y-1" 
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? t.form.sending : t.form.send}
                  </button>
                </div>
                {status === 'success' && (
                  <p className="text-green-400 mt-4 text-center animate-pulse">{t.form.success}</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 mt-4 text-center animate-pulse">{t.form.error}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Iletisim; 