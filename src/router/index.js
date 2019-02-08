import Vue from 'vue'
import Router from 'vue-router'

// IMPORT COMPONENTS
// ===== ===== =====
import Dashboard from '@/components/Dashboard'
import Product from '@/components/Products/Index'
import Schedule from '@/components/Calendar/Index'
import User from '@/components/Users/Index'
// SET ROUTING
// ===== ===== =====
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      // beforeEnter: AuthGuard
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
      // beforeEnter: AuthGuard
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      // beforeEnter: AuthGuard
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule,
      // beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = firebase.auth().currentUser

//   if (requiresAuth && !currentUser) {
//     next('/login')
//   } else if (requiresAuth && currentUser) {
//     next()
//   } else {
//     next()
//   }
// })

export default router
