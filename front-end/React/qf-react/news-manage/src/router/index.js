// 路由模块
import React from 'react'
// 创建react默认版本是18，下调为17
// npm install react@17.x react-dom@17.x --save
// cnpm i react-router-dom --save-dev//(@6)版本过高可能会报错
// npm uninstall react-router-dom
// cnpm install react-router-dom@5 --save-dev 

// HashRouter or BrowserRouter
import { HashRouter,Route,Switch,Redirect } from 'react-router-dom'; 

// 引入组件
import Login from '../views/login'
import NewsSandBox from '../views/news-sand-box'

// Switch：匹配到第一个路由就停止检索
// Redirect：路由重定向

import './index.css'

export default function index() {
  
  return (
    <HashRouter>
      {/* Switch：匹配到第一个路由就停止检索 */}
          <Switch>
              <Route path='/login' component={Login}/>
              {/* Redirect：路由重定向 */}
              <Route path='/' render={()=>sessionStorage.getItem('token')?<NewsSandBox></NewsSandBox>:<Redirect to='/login'/>}/>
          </Switch>
    </HashRouter>
  )
}
