import { useRoutes } from "react-router-dom";
import baseRoutes from "./baseRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";


function RouterView() {
    // 从redux获取路由数据
    const routes = useSelector((state: RootState) => state.auth.routes)
    // 监听baseRoutes变化，更新页面
    useEffect(()=>{
        baseRoutes[1].children=routes
    },[routes])
    // 创建路由
    const element = useRoutes(baseRoutes)
    // 返回创建好的路由
    return (
        <>{element}</>
    )
}

export default RouterView;