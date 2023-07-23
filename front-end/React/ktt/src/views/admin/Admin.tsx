import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { getMenus } from "../../store/auth/action";
import { useEffect } from "react";
import { Dispatch } from "redux";


const { Header, Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
    color: '#fff',
    backgroundColor: '#1d273b',
};

function Admin() {
    const navigate = useNavigate();
    // 从redux获取菜单数据
    const menus = useSelector((state: RootState) => state.auth.menu)
    // 点击菜单回调事件
    const onClick: MenuProps['onClick'] = e => navigate(e.key)
    // 创建一个redux事件发送器
    const dispatch: Dispatch<any> = useDispatch()
    const location = useLocation()

    useEffect(() => {
        // 处理动态菜单路由
        if (menus.length < 2) {
            dispatch(getMenus())
            const redirect = location.pathname === "/admin" ? "/admin/dash" : location.pathname
            navigate(redirect)
        }
    }, [])

    return (
        <Layout style={{ width: '100vw', height: '100vh' }}>
            <Header style={{ height: '60px',backgroundColor: 'white'}}>
                <div className="logo">Logo</div>
            </Header>
            <Layout >
                <Sider style={siderStyle} className="sider">
                    <Menu
                        mode="inline"
                        items={menus}
                        onClick={onClick}
                    />
                </Sider>
                <Content className="main-content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;