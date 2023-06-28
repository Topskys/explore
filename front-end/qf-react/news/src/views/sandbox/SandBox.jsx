import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from "./home/Home";
import UserList from "./user-manage/UserList"
import RoleList from './right-manage/RoleList';
import RightList from './right-manage/RightList';
import NoPermission from './NoPermission';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default function SandBox() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{
      minHeight: '100vh',
    }}>
      <SideMenu/>
      <Layout>
        <TopHeader />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {/* 写在组件内路由-父组件的二级路由 */}
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/user-manage/list" component={UserList}></Route>
            <Route path="/right-manage/role/list" component={RoleList}></Route>
            <Route path="/right-manage/right/list" component={RightList}></Route>

            <Redirect path="/" to="/home" exact />
            <Route path="*" component={NoPermission}></Route>

          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
