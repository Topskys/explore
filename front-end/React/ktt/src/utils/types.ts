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
    order?: string,
    state?: string,
    id?: number | string,
    name?: string,
    current?: number,
    pageSize?: number,
    products?: string,
    shop?: string,
    startTime?: string,
    endTime?: string,
    slogan?: string,
    preTime?: string,
    showHome?: string,
    tag?: string | number,
    target?: number,
    limitBuy?: number,
    deliverWay?: number,
    pickTime?: string,
}

export interface TagType {
    id?: number | string | undefined,
    name?: string,
    pic?: string,
}

export interface GroupBuyProductType {
    groupBuyId: string | number | undefined,
    current?: string | number | undefined,
    pageSize?: string | number | undefined,
    size?: string | number | undefined,
}