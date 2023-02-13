import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Home from '../views/Home.vue'

const routes = [{
        path: '/:any',
        redirect: {
            name: 'About' //重定向、命名路由，找到name为Home的组件
        }
    },
    {
        path: '/',
        name: 'Home', //
        component: Home,
        children: [{
            path: '/home/home',
            component: () =>
                import ('@/views/Home')
        }, ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // history/hash 模式 createWebHashHistory
    routes
})

export default router