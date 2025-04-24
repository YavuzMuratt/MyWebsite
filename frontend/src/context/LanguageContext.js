import React, { createContext, useState, useContext } from 'react';

// Dil context'i oluşturma
const LanguageContext = createContext();

// Özel hook oluşturalım
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage hook must be used within a LanguageProvider');
  }
  return context;
};

// Provider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 