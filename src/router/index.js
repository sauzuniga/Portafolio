import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/introduccion',
      name: 'introduccion',
      component: () => import('../views/IntroduccionView.vue')
    },
    {
      path: '/contenidos',
      name: 'contenidos',
      component: () => import('../views/ContenidosView.vue')
    },
    {
      path: '/javascriptintro',
      name: 'javascriptintro',
      component: () => import('../views/JavascriptIntroView.vue')
    },
    {
      path: '/bootstrapvue',
      name: 'bootstrapvue',
      component: () => import('../views/BootstrapAndVueView.vue')
    },
    {
      path: '/clases',
      name: 'clases',
      component: () => import('../views/ClasesView.vue')
    },
    {
      path: '/eventosYclases',
      name: 'eventosYclases',
      component: () => import('../views/Eventos_y_ClasesView.vue')
    },
    {
      path: '/componentes',
      name: 'componentes',
      component: () => import('../views/ComponentesView.vue')
    },
    
  ]

})

export default router
