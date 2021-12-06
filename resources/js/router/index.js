import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import UiElements from '../views/UiElements.vue'
import Tables from '../views/Tables.vue'
import Forms from '../views/Forms.vue'
import PageTemplate from '../views/PageTemplate.vue'

import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

import jwtDecode from 'jwt-decode'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      transitionName: 'zoom'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      transitionName: 'zoom',
      requiresAuth: true
    }
  },
  {
    path: '/ui-elements',
    name: 'UiElements',
    component: UiElements,
    meta: {
      title: 'Ui Elements',
      transitionName: 'zoom',
      requiresAuth: true
    }
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
    meta: {
      title: 'Ui Elements',
      transitionName: 'zoom',
      requiresAuth: true
    }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
    meta: {
      title: 'Forms',
      transitionName: 'zoom',
      requiresAuth: true
    }
  },
  {
    path: '/page-template',
    name: 'PageTemplate',
    component: PageTemplate,
    meta: {
      title: 'Page Template',
      transitionName: 'zoom',
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    meta: {
      title: 'Signin',
      transitionName: 'zoom',
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Sign Up',
      transitionName: 'zoom',
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

setTimeout(() => {
  const token = sessionStorage.getItem('apollo-token')
  if (!token) return

  const decoded = jwtDecode(token)

  if (decoded.exp * 1000 < Date.now()) {
    console.log('token expired')
    sessionStorage.removeItem('apollo-token')
    router.replace({ name: 'Signin' })
  }
}, 10)

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !sessionStorage.getItem('apollo-token')) {
    next({ name: 'Signin' })
  } else {
    next()
  }

  window.scrollTo(0, 0)
})

router.afterEach(to => {
  document.title = to.meta.title || document.title
})

export default router
