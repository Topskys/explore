import { AxiosResponse } from 'axios';
import request from '../utils/request';
import { LoginResType, UserType } from '../utils/types'; // 导入用户登录字段类型

// 用户登录
export const login = (data: UserType): Promise<AxiosResponse<LoginResType>> => request.post("/api/login", data)

// 获取用户动态菜单
export const getUserMenu = (): Promise<AxiosResponse> => request.get("/api/yp/user_permission")