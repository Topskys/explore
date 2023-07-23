import { AxiosResponse } from "axios";
import request from "../utils/request";
import type { GroupBuyType, GroupBuyProductType,TagType } from "../utils/types";


export function getGroupBuy(params: GroupBuyType): Promise<AxiosResponse> {
    return request.get("/api/yp/groupBuy", { params })
}


export function getTag(params: TagType): Promise<AxiosResponse> {
    return request.get("/api/yp/tag", { params })
}

export function getGroupBuyProducts(params: GroupBuyProductType): Promise<AxiosResponse> {
    return request.get("/api/yp/groupBuyProduct", { params })
}