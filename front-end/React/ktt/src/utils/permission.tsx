import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ReactNode, FC } from "react";

interface IProps {
    children?: ReactNode,
}

// 写法1
// function PermissionB<FC>(props: IProps) {}

// 写法2，定义一个函数，使用FC类型传入真实类型为TProps
const Permission: FC<IProps> = (props) => {
    const token = sessionStorage.getItem('token');
    const location = useLocation() // 不能省这一步，否则会报错
    // 检查token是否存在，否则跳转"/"首页
    return token ? <>{props.children}</>
        : <Navigate to={"/?redirect=" + location.pathname} />
}

export default Permission;