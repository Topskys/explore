import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Films from '@/views/Films'
import Center from '@/views/Center.vue'
import Cinemas from '@/views/Cinemas.vue'
import Navbar from '@/components/Navbar.vue'
import Nowplaying from '@/components/films/Nowplaying'
import Comingsoon from '@/components/films/Comingsoon'
// import Search from '@/views/Search.vue' // 实现懒加载
import Detail from '@/views/Detail.vue'
import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter) // 注册路由插件，两个全局 router-view router-link

// 路由配置表，在router-view标签中显示(App.vue)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/films',
        component: Films,
        children: [{ // 二级路由，嵌套路由,保留Films.vue写法1
                path: '/films/nowplaying',
                component: Nowplaying,
                meta: { // 路由全局拦--路由授权
                    isTopskyRequired: true
                },
            },
            { // 二级路由，嵌套路由
                path: '/films/comingsoon',
                component: Comingsoon,
                meta: { // 路由全局拦--路由授权
                    isTopskyRequired: true
                },
            },
            { // 重定向3
                path: '/films',
                redirect: '/films/nowplaying',
                meta: { // 路由全局拦--路由授权
                    isTopskyRequired: true
                },
            },
            {
                path: '/films/filmswiper',
                component: () =>
                    import ("@/components/films/FilmSwiper.vue"),
                meta: { // 路由全局拦--路由授权
                    isTopskyRequired: true
                },
            },
        ]
    },
    // { // 二级路由，嵌套路由,不保留Films.vue写法2
    //     path: '/films/nowplayig',
    //     component: Nowplayig
    // },
    // { // 重定向1
    //     path: '/',
    //     redirect: '/films'
    // },
    { // 重定向2
        path: '*', //http://localhost:8080/#/films 不论把films换成啥都会回到films页面
        redirect: '/films',
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        path: '/center',
        component: Center,
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        path: '/order',
        component: Order,
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        path: '/cinemas',
        component: Cinemas,
        // meta: { // 路由全局拦--路由授权
        //     isTopskyRequired: true
        // },
        // beforeEach: (to, from, next) => {
        //     //局部路由拦截（局部守卫）
        //     if (localStorage.getItem("token")) { //"授权通过"
        //         next()
        //     } else {
        //         // next('/login') 1
        //         next({ // 2
        //             path: '/login',
        //             query: { redirect: to.fullPath } // 第二种，获取上一个地址back this.$router.push(this.$router.query.redirect)
        //         })

        //     }
        // }
    },
    {
        path: '/city',
        component: () =>
            import ("@/views/City.vue"),
        meta: {
            isTopskyRequired: true
        },

    },
    { // search 覆盖cinemas
        path: '/cinemas/search',
        component: () =>
            import ("@/views/Search.vue"), // use 箭头函数导入，实现（局部 ）懒加载，当加载该组件时才导入
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        path: '/navbar',
        component: Navbar,
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        name: 'TopskyDetail', // 命名路由,也可以找到
        path: '/detail/:id', // 动态多级路由, 接受id<-filmId
        component: Detail,
        meta: { // 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },
    {
        path: '/login', // 动态多级路由, 传filmId
        component: Login,
        meta: { //元信息 路由全局拦--路由授权
            isTopskyRequired: true
        },
    },

]

const router = new VueRouter({
    // 路由模式
    mode: 'history', // hash模式 使地址有#--http: //localhost:8080/#/
    // base: process.env.BASE_URL,

    routes

})

// 路由全局拦截（守卫）

// router.beforeEach((to, from, next) => { //to, from从哪里来，要去哪里， next是函数
//     //console.log('to.fullPath:', to.fullPath) //to to.fullPath
//     //next() //不需要X放行 or if....
//     if (!to.meta.isTopskyRequired) { //"某几个需要授权的路由"、fullPath === '/center'、to.meta.isTopskyRequired
//         //判断本地存储中是否有token
//         //console.log("token:", localStorage.getItem("token"))
//         if (localStorage.getItem("token")) { //"授权通过"
//             next()
//         } else {
//             // next('/login') 1
//             next({ // 2
//                 path: '/login',
//                 query: { redirect: to.fullPath } // 第二种，获取上一个地址back this.$router.push(this.$router.query.redirect)
//             })

//         }

//         //进?
//         //        next()
//     } else {
//         next()
//     }
//})

export default router