import { createRouter, createWebHistory } from 'vue-router'
import SiteList from '../views/SiteList.vue'
import SiteDetail from '../views/SiteDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Site List',
    component: SiteList
  },
  {
    path: '/site-detail',
    name: 'Site Detail',
    component: SiteDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
