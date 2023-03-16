/* Router definitions */
import { createRouter, createWebHistory } from "vue-router"

// Routes
const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Export
export default router
