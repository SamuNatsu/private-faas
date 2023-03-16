/* Internationalization definitions */
import { createI18n } from 'vue-i18n'

// Import languages
import en from './en.js'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  messages: {
    en
  },
  fallbackLocale: 'en'
})

// Export 
export default i18n
