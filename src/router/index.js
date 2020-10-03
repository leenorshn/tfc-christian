import Vue from 'vue'
import VueRouter from 'vue-router'
import AccueilPage from '../views/AccueilPage.vue'
import ActivityPage from '../views/ActivityPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: AccueilPage
  },
  {
    path: '/activite',
    name: 'Activity',
    component: ActivityPage
  },
  {
    path: '/agent',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AgentPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
