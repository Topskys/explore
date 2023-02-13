/*
 * @Author: Topskys
 * @Date: 2022-12-25 14:59:16
 * @LastEditTime: 2022-12-29 20:06:08
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'Web',
    component: () => import("@/views/Web")
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import("@/views/Home"),
    children: [
      {
        path: '/admin/users/personal',
        name: 'UserPersonal',
        component: () => import("@/views/User/personal.vue"),
        meta: {
          title: '个人资料'
        }
      },
      {
        path: '/admin/users/password',
        name: 'UserPassword',
        component: () => import("@/views/User/password.vue"),
        meta: {
          title: '修改密码'
        }
      },
      {
        path: '/admin/article',
        name: 'Article',
        component: () => import("@/views/Article"),
        meta: {
          title: '文章列表'
        }
      },
      {
        path: '/admin/article/add',
        name: 'ArticleAdd',
        component: () => import("@/views/Article/add.vue"),
        meta: {
          title: '添加文章'
        }
      },
      {
        path: '/admin/article/update',
        name: 'ArticleUpdate',
        component: () => import("@/views/Article/update.vue"),
        meta: {
          title: '更新文章'
        }
      },
      {
        path: '/admin/comment',
        name: 'Comment',
        component: () => import("@/views/Comment"),
        meta: {
          title: '评论管理'
        }
      },
      {
        path: '/admin/fans',
        name: 'Fans',
        component: () => import("@/views/Fans"),
        meta: {
          title: '粉丝管理'
        }
      },
      {
        path: '/admin/star',
        name: 'Star',
        component: () => import("@/views/Star"),
        meta: {
          title: '点赞管理'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login")
  },
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
