import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'about', path: '/about', component: About },
  ],
});
