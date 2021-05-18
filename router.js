import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Demo from '~/pages/demo'
import Session from '~/pages/session'
import Classement from '~/pages/classement'
import Inscription from '~/pages/inscription'
import Connexion from '~/pages/connexion'
import Profile from '~/pages/profile'
import Modifyprofile from '~/pages/modifyprofile'
import Creationsession from '~/pages/creationsession'
import Modifsession from '~/pages/modifsession'
import Defi from '~/pages/defi'
import Defiadmin from '~/pages/defiadmin'
import Creationdefi from '~/pages/creationdefi'
import Modifdefi from '~/pages/modifdefi'
import Error404 from '~/pages/error404'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: Index
      },
      {
        name: 'demo',
        path: '/demo',
        component: Demo
      },
      {
        name: 'session',
        path: '/session',
        component: Session
      },
      {
        name: 'classement',
        path: '/classement',
        component: Classement
      },
      {
        name: 'inscription',
        path: '/inscription',
        component: Inscription
      },
      {
        name: 'connexion',
        path: '/connexion',
        component: Connexion
      },
      {
        name: 'profile',
        path: '/profile',
        component: Profile
      },
      {
        name: 'modifyprofile',
        path: '/modifyprofile',
        component: Modifyprofile
      },
      {
        name: 'creationsession',
        path: '/creationsession',
        component: Creationsession
      },
      {
        name: 'modifsession',
        path: '/modifsession',
        component: Modifsession
      },
      {
        name: 'defi',
        path: '/defi',
        component: Defi
      },
      {
        name: 'defiadmin',
        path: '/defiadmin',
        component: Defiadmin
      },
      {
        name: 'creationdefi',
        path: '/creationdefi',
        component: Creationdefi
      },
      {
      name: 'modifdefi',
      path: '/modifdefi',
      component: Modifdefi
      },
      {
        name: 'error404',
        path: '*',
        component: Error404
      }
    ]
  })
}