import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import LegalLimits from '../views/LegalLimits.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', redirect: '/' },
    { path: '/products', component: Products },
    { path: '/contact', component: Contact },
    { path: '/limites-legales', component: LegalLimits },
  ],
})

export default router
