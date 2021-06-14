import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'about', path: '/about', component: defineAsyncComponent(() => import('../views/About.vue')) },
  ],
});
