import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useSelector } from "react-redux";
import type { RootState } from "../../store";



const { Header, Sider, Content } = Layout;


function Admin() {
    // 从redux获取菜单数据
    const menus = useSelector((state: RootState) => state.auth.menu)
    console.log(menus)
    // 点击菜单回调事件
    const onClick: MenuProps['onClick'] = e => {

    }

    return (
        <Layout style={{ width: '100vw', height: '100vh' }}>
            <Header>Header</Header>
            <Layout >
                <Sider>
                    <Menu
                        mode="inline"
                        items={menus}
                        onClick={onClick}
                    />
                </Sider>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;