import { Tabs } from "antd";
import GroupBuyInfo from "../../../components/channel/GroupBuyInfo";
import GroupBuyList from "../../../components/channel/GroupBuyList";
import GroupShopList from "../../../components/channel/GroupShopList";
import { ReactNode, useEffect, useState } from "react";
import { getGroupBuy } from "../../../api/purchase";
import { useParams } from "react-router-dom";


export default function GroupBuyDetail() {
    // 定义团购信息
    const [groupInfo,setGroupInfo]=useState({});
    // 定义params
    const params=useParams();
    // 请求数据
    useEffect(()=>{
        // http://localhost:3000/admin/product#/admin/channel/groupBuyDetail/1
        getGroupBuy({id:params.id}).then(res=>{
            // 更新团购信息数据
            setGroupInfo(res.data.data[0])
        })
    },[])

    // 生成Tabs配置项
    const itemFn = (label: string, key: string, children?: ReactNode) => {
        return {
            label,
            key,
            children
        }
    }

    // Tabs配置项
    const items = [
        itemFn("活动信息", "1", <GroupBuyInfo groupInfo={groupInfo} />),
        itemFn("商品列表", "2", <GroupBuyList groupInfo={groupInfo} />),
        itemFn("店铺列表", "3", <GroupShopList />),
    ]

    return (
        <Tabs
        defaultActiveKey="1"
        type="card"
        items={items}/>
    )
}
