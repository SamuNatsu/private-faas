/* Router definitions */
import { createRouter, createWebHistory } from "vue-router"

// Routes
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: "",
        redirect: "/dashboard/overview"
      },
      {
        path: 'overview',
        name: 'overview'
      },
      {
        path: 'instances',
        name: 'instances'
      },
      {
        path: 'traffic',
        name: 'traffic'
      },
      {
        path: 'settings',
        name: 'settings'
      }
    ]
  }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Export
export default router
