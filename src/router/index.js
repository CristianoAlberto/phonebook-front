import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import createUser from '@/components/createUser.vue'
import contacts from '@/components/contacts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createUser',
    name: 'createUser',
    component: createUser
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contacts
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
