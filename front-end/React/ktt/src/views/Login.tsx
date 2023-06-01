import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import { useState } from "react";
import { login } from "../store/auth/action";
import { useNavigate, useSearchParams } from 'react-router-dom';


// 验证失败
const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);

function Login() {
    const dispatch: Dispatch<any> = useDispatch()
    // 双向绑定
    const [name, setName] = useState("")
    const [password, setPwd] = useState("")
    // 获取查询参数与页面跳转
    const navigate = useNavigate(); // 不能在action中执行
    const [search, setSearch] = useSearchParams();
    const redirect = search.getAll("redirect")[0] || "/admin"; // http://localhost:3000/#?redirect=/admin/abc
    // 验证成功，执行dispatch
    const onFinish = (values: any) => dispatch(login({ name, password }, () => navigate(redirect))) 

    return (
        <div className='login-warp'>
            <h2 className='login-title'><span>快团团</span>登录</h2>
            <Form
                name="basic"
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder='Username' value={name} onChange={e => setName(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Password' value={password} onChange={e => setPwd(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;


