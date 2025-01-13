import React from 'react'
import { Layout} from 'antd';
import './index.css'



import {Route,Switch ,Redirect} from 'react-router-dom'


import NavMenu from '../../components/nav-menu'
import SideMenu from '../../components/side-menu'

import Home from '../news-sand-box/home'
import UserList from '../news-sand-box/user-list'
import RoleList from '../news-sand-box/role-list'
import RightList from '../news-sand-box/right-list'
import NoPermission from '../news-sand-box/no-permission'


export default function index() {
  const { Content } = Layout;
  return (
    <Layout>
      {/* 侧边栏 */}
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        {/* 顶部导航栏 */}
        <NavMenu></NavMenu>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/user-manage/list' component={UserList}/>
              <Route path='/right-manage/role/list' component={RoleList} />
              <Route path='/right-manage/right/list' component={RightList} />
              {/* exact：精确匹配，只能是/开头时跳转/home，反之是模糊重定向 */}
              <Redirect from='/' to='/home' exact/>
              <Redirect path='*' component={NoPermission} />
              
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

