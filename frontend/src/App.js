import React, { useEffect } from 'react';
import Header from './components/Header';
import Hakkimda from './components/Hakkimda';
import Projelerim from './components/Projelerim';
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { HiTranslate } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Dil değiştirme butonu
const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button 
      onClick={toggleLanguage} 
      className="fixed top-4 right-4 z-50 flex items-center bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      style={{ top: '80px' }}
    >
      <HiTranslate className="mr-1" />
      <span>{language === 'tr' ? 'EN' : 'TR'}</span>
    </button>
  );
};

function App() {
  // AOS kütüphanesini başlat
  useEffect(() => {
    // AOS kütüphanesini bir miktar gecikmeli başlat
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,      // Animasyon süresi
        once: false,         // Animasyon her scroll'da tekrarlansın
        mirror: false,       // Scroll up sırasında animasyonlar tekrar edilsin mi
        delay: 100,          // Animasyon gecikmesi
        offset: 120,         // Animasyonların tetikleneceği offset
        easing: 'ease-out',  // Animasyon tipi
        anchorPlacement: 'top-bottom', // Elemanın üst kısmı görünür olduğunda
        disable: 'mobile',   // Mobil cihazlarda devre dışı bırak (isteğe bağlı)
      });
    }, 200);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-gray-900 text-white">
        <Header />
        <LanguageToggle />
        <main>
          <Hakkimda />
          <Projelerim />
          <Iletisim />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

// Smooth scroll için CSS ekliyoruz
// Tüm HTML için smooth scroll davranışı
document.documentElement.style.scrollBehavior = 'smooth';

export default App; 