import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import InputDisplay from './components/InputDisplay.vue';

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/input-display',
    component: InputDisplay,
    props: true // Mengizinkan props untuk diteruskan
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;