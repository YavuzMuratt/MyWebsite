import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpg';
import { useLanguage } from '../context/LanguageContext';

// Çok dilli içerik
const content = {
  tr: {
    menu: {
      about: 'Hakkımda',
      projects: 'Projelerim',
      contact: 'İletişim'
    }
  },
  en: {
    menu: {
      about: 'About Me',
      projects: 'Projects',
      contact: 'Contact'
    }
  }
};

const Header = () => {
  // Global dil context'ini kullan
  const { language } = useLanguage();
  
  // Mevcut dildeki içeriği al
  const t = content[language];

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-md backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="hakkimda" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className="flex items-center cursor-pointer"
        >
          <img src={logo} alt="Site Logosu" className="h-8 mr-2" />
          <span className="font-bold text-xl ml-2">
            YavuzMurat<span className="text-purple-400" style={{ textShadow: '0 0 16px rgba(192, 132, 252, 0.8)' }}>.Dev</span>
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link 
            to="hakkimda" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="px-3 py-2 hover:text-purple-400 cursor-pointer transition-colors relative group"
            activeClass="text-purple-400"
          >
            {t.menu.about}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="projelerim" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="px-3 py-2 hover:text-purple-400 cursor-pointer transition-colors relative group"
            activeClass="text-purple-400"
          >
            {t.menu.projects}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="iletisim" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="px-3 py-2 hover:text-purple-400 cursor-pointer transition-colors relative group"
            activeClass="text-purple-400"
          >
            {t.menu.contact}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 