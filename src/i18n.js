import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/translations/en.json';

const DEFAULT_LANG = 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
  },
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
