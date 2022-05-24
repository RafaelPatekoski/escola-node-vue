import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/criarusuario',
    name: 'criarusuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "criarusuario" */ '../views/CriarUsuarioView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LoginUsuarioView" */ '../views/LoginUsuarioView.vue')
  },
  {
    path: '/turmas',
    name: 'turmas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TurmasView" */ '../views/TurmasView.vue')
  },
  {
    path: '/alunos',
    name: 'alunos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AlunosView" */ '../views/AlunosView.vue')
  },
  {
    path: '/professores',
    name: 'professores',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProfessoresView" */ '../views/ProfessoresView.vue')
  },
  {
    path: '/criarprofessor',
    name: 'criarprofessor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "criarprofessor" */ '../views/CriarProfessorView.vue')
  },
  {
    path: '/criarturma',
    name: 'criarturma',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "criarturma" */ '../views/CriarTurmaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
/* eslint-disable */ 
export default router
