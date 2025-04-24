import React from 'react';
// İkon kullanmak isterseniz: import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Sosyal medya linkleri (Iletisim.js'deki ile aynı olmalı veya merkezi bir yerden alınmalı)
const socialLinks = {
  github: 'https://github.com/YavuzMuratt',
  linkedin: 'https://www.linkedin.com/in/yavuzmuraty%C4%B1ld%C4%B1r%C4%B1m/',
  instagram: '#',
};

const Footer = () => {
  const yourName = "Yavuz Murat Yıldırım";

  return (
    <footer className="bg-gray-800 text-gray-400 p-6 text-center">
      <div className="container mx-auto">
        {/* Sosyal Medya Linkleri/İkonları */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-400 transition duration-300">
            {/* <FaGithub size={24} /> */} {/* İkon kullanmak isterseniz */}
             GitHub {/* Şimdilik metin */}
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-400 transition duration-300">
            {/* <FaLinkedin size={24} /> */} {/* İkon kullanmak isterseniz */}
             LinkedIn {/* Şimdilik metin */}
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-purple-400 transition duration-300">
            {/* <FaInstagram size={24} /> */} {/* İkon kullanmak isterseniz */}
             Instagram {/* Şimdilik metin */}
          </a>
        </div>
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} {yourName}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 