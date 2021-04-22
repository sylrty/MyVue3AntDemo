import { createRouter, createWebHashHistory } from 'vue-router'

import notFoundPage from '@/components/notFound/NotFoundPage.vue'
import Login from '@/components/home/Login.vue'
import MainPage from '@/components/home/MainPage.vue'
import HomePage from '@/components/homePage/HomePage.vue'
import DocReview from '@/components/homePage/DocReview.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    component: notFoundPage,
    name: 'notFoundPage',
    meta: {
      title: '404'
    }
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage,
    children:[
      {
        path: 'HomePage',
        name: 'HomePage',
        component: HomePage,
      },
      {
        path: 'DocReview',
        name: 'DocReview',
        component: DocReview,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
