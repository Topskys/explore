import React from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import "./css/sideMenu.css";
// 高阶组件，用于多层出书props
import {widthRouter} from "react-router-dom"; 

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('首页', '/admin', <PieChartOutlined />),
  getItem('内存分析', '2', <DesktopOutlined />),
  getItem('用户管理', 'sub1', <UserOutlined />, [
    getItem('用户列表', '3'),
    getItem('编辑用户', '5'),
  ]),
  getItem('权限管理', '/admin/right', <TeamOutlined />, [
    getItem('权限列表', '6'),
    getItem('角色列表', '8')
  ]),
  getItem('文件', '9', <FileOutlined />),
];

function SideMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e) => {
    console.log('click ', e);
    props.history.push(e.path);
  };

  return (
    <Sider style={{ background: colorBgContainer }}
      collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="side-logo" >
        Ant Design Pro
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onChange} />
    </Sider>
  )
}

// 导出包装生成的高阶组件，以底层组件获取高层组件的props
export default widthRouter(SideMenu);