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
    {
      path: '/introduccionphp',
      name: 'introduccionphp',
      component: () => import('../views/IntroduccionPHPView.vue')
    },
    {
      path: '/loopsarraysfunctions',
      name: 'loopsarraysfunctions',
      component: () => import('../views/Loops_Arrays_FunctionsView.vue')
    },
    {
      path: '/intropoo',
      name: 'intropoo',
      component: () => import('../views/IntroPooview.vue')
    },
    {
      path: '/clasesabstractas',
      name: 'clasesabstractas',
      component: () => import('../views/ClasesAbstractasView.vue')
    },
    {
      path: '/introlaravel',
      name: 'introlaravel',
      component: () => import('../views/IntroLaravelView.vue')
    },
    {
      path: '/introdepoo',
      name: 'introdepoo',
      component: () => import('../views/IntroDePOOView.vue')
    },
    {
      path: '/vistasycontroladores',
      name: 'vistasycontroladores',
      component: () => import('../views/VistasyControladoresView.vue')
    },
    {
      path: '/validaciondatos',
      name: 'validaciondatos',
      component: () => import('../views/ValidacionDatosView.vue')
    },
    {
      path: '/apirest',
      name: 'apirest',
      component: () => import('../views/APIRestView.vue')
    },
    {
      path: '/apirestautentication',
      name: 'apirestautentication',
      component: () => import('../views/APIRESTAutenticationView.vue')
    },
    {
      path: '/consumoapirest',
      name: 'consumoapirest',
      component: () => import('../views/APIRESTVueView.vue')
    },
  ]

})

export default router
