import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import ComputedAndWatch from '../views/ComputedAndWatch.vue'
import DataBindingMock from '../views/DataBindingMock.vue'
import NestedComponent from '../views/NestedComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/computedandwatch',
    name: 'ComputedAndWatch',
    component: ComputedAndWatch

  },
  {
    path: '/databindingmock',
    name: DataBindingMock,
    component: DataBindingMock
  },
  {
    path: '/nestedcomponent',
    name: NestedComponent,
    component: NestedComponent
  }

 // {
 //   path: '/about',
 //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
//    component: () => import( webpackChunkName: "about"  '../views/AboutView.vue')
 // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
