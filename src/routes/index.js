import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import CnPage from '@/views/CnPage/index.vue'
import EnPage from '@/views/EnPage/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/cn',
  },
  {
    path: '/cn',
    name: 'CnPage',
    component: CnPage,
  },
  {
    path: '/en',
    name: 'EnPage',
    component: EnPage,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/Registration/index.vue'),
  },
]

const router = new VueRouter({ mode: 'hash', routes })

export default router
