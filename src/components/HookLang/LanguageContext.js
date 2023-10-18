import i18n from 'i18n';
import { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const selectedLanguage = JSON.parse(
      localStorage.getItem('selectedLanguage')
    );
    if (selectedLanguage) {
      return selectedLanguage;
    } else {
      return i18n.resolvedLanguage;
    }
  });

  const changeLanguage = lang => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('selectedLanguage', JSON.stringify(lang));
  };

  useEffect(() => {
    const selectedLanguage = JSON.parse(
      localStorage.getItem('selectedLanguage')
    );
    if (selectedLanguage) {
      changeLanguage(selectedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
