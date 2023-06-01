import Login from "../views/Login";
import Admin from "../views/admin/Admin";
import Permission from "../utils/permission";
import LazyLoad from "../utils/LazyLoad";

// 创建基础路由
const baseRoutes = [
    { path: "/", element: <Login></Login> },
    {
        path: "/admin/*", element: <Permission><Admin /></Permission>,
        children: [
            { path: "", element: LazyLoad("/admin/dash") }
        ],
    },
]

export default baseRoutes