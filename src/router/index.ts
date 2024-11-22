import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/StartScreen.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../components/HelloWorld.vue'),
      props: {test: true}
    }
  ]
})

export default router
