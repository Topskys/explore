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
    user?: any,
}


export interface GroupBuyType {
    id: "",
    name: string,
    startTime?: string,
    endTime?: string,
    state: string,
    current?:number,
    pageSize?: number,
    order?:string,
    products?:string,
    shop?:string,
}