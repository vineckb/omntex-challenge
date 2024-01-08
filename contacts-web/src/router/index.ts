import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditContactModal from '@/views/EditContactModal.vue'
import CreateContactModal from '@/views/CreateContactModal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'contact/:id',
          component: EditContactModal
        },
        {
          path: '/new',
          component: CreateContactModal
        }
      ]
    }
  ]
})

export default router
