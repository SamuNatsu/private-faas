/* Main entrance */
import { createApp } from 'vue'

// Import plugins
import i18n from './i18n'
import pinia from './stores'
import router from './router'

// Import global stylesheet
import 'normalize.css'
import './style.css'

// Get main component
import App from './App.vue'

// Create application
createApp(App)
  .use(i18n)
  .use(pinia)
  .use(router)
  .mount('#app')
