import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Machining from '../views/Machining.vue'
import Catalog from '../views/Catalog.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/machining',
    name: 'Machining',
    component: Machining
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  routes,
   mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
