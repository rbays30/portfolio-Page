import Home from '@/views/Home.vue';
import Portfolio from '@/views/Portfolio.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';
import Success from '@/views/Success.vue'


import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/portfolio', name: 'Portfolio', component: Portfolio},
  {path: '/about', name: 'About', component: About},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/success', name: 'Success', component: Success},
  { path: '/:pathMatch(.*)*', name: 'Home', component: Home},


  
]

const router = createRouter ( {
    history: createWebHistory(),
    routes,
    linkActiveClass: "active emphasize"
})

export default router