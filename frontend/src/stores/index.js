/* Pinia definitions */
import { createPinia } from 'pinia'

// Import plugin
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Create pinia instance
const pinia = createPinia()

// Apply plugins
pinia.use(piniaPluginPersistedstate)

// Export
export default pinia
