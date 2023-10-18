import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './components/locales/en/translationEN.json';
import translationUA from './components/locales/ua/translationUA.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: translationEN,
    },
    ua: {
      translation: translationUA,
    },
  },
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
