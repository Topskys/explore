import { useRoutes } from "react-router-dom";
import baseRoutes from "./baseRoutes";

function RouterView() {
    // 创建路由
    const element = useRoutes(baseRoutes)
    // 返回创建好的路由
    return (
        <>{element}</>
    )
}

export default RouterView;