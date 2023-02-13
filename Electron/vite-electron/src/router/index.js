/*
 * @Author: Topskys
 * @Date: 2022-12-03 16:49:59
 * @LastEditTime: 2022-12-03 17:03:27
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const ImageGallery = () => import('@/views/ImageGallery.vue');


const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/imageGallery',
        name: 'ImageGallery',
        component: ImageGallery,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router