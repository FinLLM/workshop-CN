import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import CnPage from '@/views/CnPage/index.vue'
import Cn2024 from '@/views/2024/CnPage/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/2024-CN',
  },
  {
    path: '/2024-CN',
    name: 'CnPage',
    component: Cn2024,
  },
  {
    path: '/2024-EN',
    name: 'CnPage',
    component: () => import('@/views/2024/EnPage/index.vue'),
  },
  {
    path: '/2023-CN',
    name: 'CnPage',
    component: CnPage,
  },
  {
    path: '/2023-en',
    name: 'EnPage',
    component: () => import('@/views/EnPage/index.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/Registration/index.vue'),
  },
]

const router = new VueRouter({ mode: 'hash', routes })

export default router
