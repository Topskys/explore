export interface UserType {
    name: string,
    password: string,
}

export interface ActionType {
    type: string,
    payload?: any,
}

export interface LoginResType {
    code?: number,
    token?: string,
    msg?: string,
    userInfo?: any,
}