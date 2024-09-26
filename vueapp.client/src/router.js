import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LoginPage from './components/pages/LoginPage.vue';
import HomePage from './components/pages/HomePage.vue';

const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/Home',
        name: 'Home',
        component: HomePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;