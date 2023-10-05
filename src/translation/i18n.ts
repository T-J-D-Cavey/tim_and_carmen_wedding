import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_translations from './locals/en.json';
import zhCN_translations from './locals/zh-CN.json';


i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'en': {
        translation: en_translations,
      },
      'zh-CN': {
        translation: zhCN_translations,
      },
    }
  });

export default i18n;