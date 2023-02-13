import React,{useState} from 'react';
import { Layout, Menu } from 'antd';
import './index.css'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;


// 动态菜单数组
const menuList=[
  {
    key: '/home',
    label: '首页',
    icon: <UserOutlined />,
  },
  {
    key: '/user-manage',
    label: '用户管理',
    icon: <UserOutlined />,
    children: [
          {
            key: '/user-manage/list',
            label: '用户列表',
            icon: <UserOutlined />,
          }
    ]
  },
  {
    key: '/right-manage',
    label: '权限管理',
    icon: <UserOutlined />,
    children: [
          {
            key: '/role-manage/list',
            label: '角色列表',
            icon: <UserOutlined />,
          },
          {
            key: '/right-manage/right/list',
            label: '权限列表',
            icon: <UserOutlined />,
          }
    ]
  }
];
export default function SideMenu() {
   const [collapsed] =useState(false);
  //  collapsible：可折叠的
  const {SubMenu}=Menu;
  return(
    <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >全球新闻发布管理系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '首页',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '用户管理',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '角色管理',
            },
          ]}
        />
      </Sider>
  )
}