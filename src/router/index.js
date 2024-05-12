import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Rootlayot.vue'),
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/chat/:title',
          name: 'chat',
          component: () => import('../views/ChatView.vue'),
          props: true
        },
        {
          path: '/detalis',
          name: 'detalis',
          component: () => import('../views/DetailsView.vue')
        },
       
        {
          path: '/notification',
          name: 'notification',
          component: () => import('../views/NotificationView.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: '/password',
          name: 'password',
          component: () => import('../views/UserPassword.vue')
        },
        {
          path: '/transactionsView',
          name: 'transactionsView',
          component: () => import('../views/transactionsView.vue')
        },
        {
          path: '/consultant',
          name: 'ConsultantView',
          component: () => import('../views/ConsultantView.vue')
        },
        {
          path: '/ApplicantsView',
          name: 'ApplicantsView',
          component: () => import('../views/ApplicantsView.vue')
        },
        {
          path: '/filing',
          name: 'filing',
          component: () => import('../views/FilingView.vue')
        },
        {
          path: '/BuySubscriptionView',
          name: 'BuySubscriptionView',
          component: () => import('../views/BuySubscriptionView.vue')
        },
        {
          path: '/SupportView',
          name: 'SupportView',
          component: () => import('../views/SupportView.vue')
        },
        {
          path: '/AdvisersView',
          name: 'AdvisersView',
          component: () => import('../views/AdvisersView.vue')
        },
        {
          path: '/AccountView',
          name: 'AccountView',
          component: () => import('../views/AccountView.vue')
        },
        {
          path: '/InviteView',
          name: 'InviteView',
          component: () => import('../views/InviteView.vue')
        },
        {
          path: '/VideoView',
          name: 'VideoView',
          component: () => import('../views/VideoView.vue')
        },
        {
          path: '/VideoView/:id',
          name: 'VideoView2',
          component: () => import('../views/VideoFileView.vue')
        },
        {
          path: '/FilesPageView',
          name: 'FilesPageView',
          component: () => import('../views/FilesPageView.vue')
        },
        {
          path: '/DueDatesView',
          name: 'DueDatesView',
          component: () => import('../views/DueDatesView.vue')
        },
        {
          path: '/FavoritesView',
          name: 'FavoritesView',
          component: () => import('../views/FavoritesView.vue')
        },
        {
          path: '/CustomersView',
          name: 'CustomersView',
          component: () => import('../views/CustomersView.vue')
        },
        {
          path: '/ParticipationView',
          name: 'ParticipationView',
          component: () => import('../views/ParticipationView.vue')
        },
        {
          path: '/ParticipationFormView',
          name: 'ParticipationFormView',
          component: () => import('../views/ParticipationFormView.vue')
        },
      ]
    },
    {
      path: '/auth',
      component: () => import('../layouts/Authlayot.vue'),
      children: [{
        path:'login',
        component: () => import('../views/LoginView.vue')
      }
      ,{
        path:'register',
        component: () => import('../views/RegisterView.vue')
      },{
        path:'',
        component: () => import('../views/CodeView.vue')
      },
      
    ]
    },
   
    
   
   
  ]
})

export default router;
