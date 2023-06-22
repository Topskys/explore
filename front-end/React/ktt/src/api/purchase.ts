import {  AxiosResponse } from "axios";
import request from "../utils/request";
import type { GroupBuyType } from "../utils/types";


export function getGroupBuy(params: GroupBuyType):Promise<AxiosResponse> {
    return request.get("/api/yp/groupBuy",{params})
}