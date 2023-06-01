import Vue from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router