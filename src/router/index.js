import { createRouter, createWebHistory } from 'vue-router'
import SiteList from '../views/SiteList.vue'
import SiteDetails from '../views/SiteDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Site List',
    component: SiteList
  },
  {
    path: '/site-details',
    name: 'Site Details',
    component: SiteDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
