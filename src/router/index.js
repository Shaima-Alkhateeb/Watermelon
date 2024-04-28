import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Martyrs from '../components/Martyrs.vue'
import TheHero from '../components/layout/TheHero.vue'
import History from '../components/History.vue'
import Food from '../components/Food.vue'
import Clothe from '../components/Clothe.vue'
import Movie from '../components/Movie.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'The Hero',
      component: TheHero
    },
    {
      path: '/martyrs',
      name: 'Martyrs',
      component: Martyrs
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/clothe',
      name: 'Clothe',
      component: Clothe
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
  ]
})

export default router
