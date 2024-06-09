import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import CnPage from '@/views/2023/CnPage/index.vue'
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
    path: '/2023-Paper-CN',
    name: 'Paper2023CN',
    component: () => import('@/views/2024/CnPage/paper-2023.vue'),
  },
  {
    path: '/2023-Paper-EN',
    name: 'Paper2023EN',
    component: () => import('@/views/2024/EnPage/paper-2023.vue'),
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
    component: () => import('@/views/2023/EnPage/index.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/2023/Registration/index.vue'),
  },
]

const router = new VueRouter({ mode: 'hash', routes })

export default router
