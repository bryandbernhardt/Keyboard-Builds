import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildsView from '../views/BuildsView.vue'
import DiyView from '../views/builds/DiyView.vue'
import KeycapsView from '../views/builds/KeycapsView.vue'
import SwitchesView from '../views/builds/SwitchesView.vue'
import CablesView from '../views/builds/CablesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/builds',
      name: 'builds',
      component: BuildsView,
      children: [
        {
          path: '',
          component: DiyView
        },
        {
          path: '/diy',
          component: DiyView
        },
        {
          path: '/keycaps',
          component: KeycapsView
        },
        {
          path: '/switches',
          component: SwitchesView
        },
        {
          path: '/cables',
          component: CablesView
        },
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
