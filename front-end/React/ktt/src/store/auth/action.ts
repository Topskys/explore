import type { ReactNode } from 'react';
import type { Dispatch } from 'redux';
import { UserType } from "../../utils/types";
import { SET_MENU, SET_ROUTES, SET_TOKEN, SET_USER } from "../../utils/constant";
import { getUserMenu, login as loginApi } from "../../api/auth";
import LazyLoad from '../../utils/LazyLoad';

// 异步登录action
export function login(data: UserType, callback?: Function | undefined) {
    return (dispatch: Dispatch<any>) => {
        loginApi(data).then((res: any) => {
            if (res.data.code === 200) {
                // 本地存储
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("userInfo", JSON.stringify(res.data.user));
                // 执行reducer
                dispatch({ type: SET_TOKEN, payload: res.data.token })
                dispatch({ type: SET_USER, payload: res.data.user })
                // 执行回调函数
                callback && callback();
                // 获取菜单
                dispatch(getMenus())
            }
        })
    }
}


// 获取菜单 action
export function getMenus() {
    return async (dispatch: Dispatch) => {
        const res = await getUserMenu()
        // 触发redux存储menu
        dispatch({
            type: SET_MENU,
            payload: formatMenu(res.data.list)
        })
        dispatch({
            type: SET_ROUTES,
            payload: formatRoutes(res.data.list)
        })
        console.log();
    }
}


interface OriginMenuItemType {
    path: string,
    name: string,
    component?: string,
    children?: Array<OriginMenuItemType>
}
interface MenuItemType {
    label?: string,
    key: string,
    children?: Array<MenuItemType>
}

// 递归格式化菜单
function formatMenu(arr: Array<OriginMenuItemType>): Array<MenuItemType> {
    const list: Array<MenuItemType> = []
    arr.forEach(item => {
        const obj: MenuItemType = {
            key: item.path,
            label: item.name
        }
        item.children && (obj.children = formatMenu(item.children))
        list.push(obj)
    });
    return list
}

interface RouteItemType {
    path: string,
    element: ReactNode
}

// 格式化路由
function formatRoutes(arr: Array<OriginMenuItemType>): Array<RouteItemType> {
    let list: Array<RouteItemType> = [];
    arr.forEach(item => {
        if (item.component) {
            const obj: RouteItemType = {
                path: item.path,
                element: LazyLoad(item.component.slice(0, -9)) // arr.slice() 移除View.vue，splice()会影响原数组
            }
            list.push(obj);
        }
        if (item.children) {
            const res = formatRoutes(item.children);
            list = list.concat(res);
        }
    })
    return list;
}