import React ,{useState} from 'react'
import { Layout ,Dropdown,Menu,Avatar} from 'antd';
// 引入图标
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined, 
} from '@ant-design/icons';



import './index.css'

// 解构
const {Header}=Layout



export default function NavMenu() {
  // 解构 
  // hooks
  //collapsed ：状态
  const [collapsed,setCollapsed]=useState(false)

  const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            超级管理员
          </a>
        ),
      },{
        key: '2',
        danger: true,
        label:'退出',
      }
    ]}
  />
);

  return (
        <Header
          className="site-layout-background"
          style={{
            padding: '0 16px',
          }}
        >
          {/* {collapsed ? <MenuUnfoldOutlined onClick={setCollapsed(!collapsed)}/> : <MenuFoldOutlined onClick={setCollapsed(!collapsed)}/>} */}
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          <div style={{float:'right'}}>
            <span style={{marginRight:'16px'}}>欢迎admin回来</span>
            <Dropdown overlay={menu}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
          </div>
          
        </Header>
  )
}



