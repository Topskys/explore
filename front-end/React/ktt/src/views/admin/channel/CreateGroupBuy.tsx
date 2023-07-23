import { Steps } from 'antd'
import React, { ReactNode, useState } from 'react'
import CreateGroupInfo from '../../../components/channel/CreateGroupInfo';
import SelectProducts from '../../../components/channel/SelectProducts';
import CreateGroupFinish from '../../../components/channel/CreateGroupFinish';
import dayjs from "dayjs"


// 基础的团购信息
const baseGroupInfo = {
    "name": "测试团购活动",
    "startTime": dayjs().format("YYYY-MM-DD HH:mm:ss"),
    "endTime": dayjs().format("YYYY-MM-DD HH:mm:ss"),
    "slogan": '测试口号',
    "showHome": "1",
    "homePic": 'https://m15.360buyimg.com/mobilecms/jfs/t1/90537/28/34381/94784/63ead64aFabb4d1b8/154e0b4180874a0e.jpg!cr_1125x449_0_166!q70.jpg',
    "banner": 'https://m15.360buyimg.com/mobilecms/jfs/t1/90537/28/34381/94784/63ead64aFabb4d1b8/154e0b4180874a0e.jpg!cr_1125x449_0_166!q70.jpg',
    "showType": 1,
    "target": 1,
    "limitBuy": 999,
    "shop": '829,824',
    "deliverWay": 1,
    "pickTime": dayjs(new Date(Date.now() + 1000 * 60 * 60 * 24) + "").format("YYYY-MM-DD HH:mm:ss"),
    "products": "586,587,588",
    "preTime": dayjs(new Date(Date.now() - 1000 * 60 * 60 * 24) + "").format("YYYY-MM-DD HH:mm:ss"),
    "tag": 1,
    "state": 1
}
export default function CreateGroupBuy() {
    // 创建活动信息
    const [groupInfo, setGroupInfo] = useState(baseGroupInfo);
    // 当前第几个步骤
    const [current, setCurrent] = useState(0);
    // 步骤的配置
    const itemFn = (title: string, content: ReactNode) => {
        return {
            title,
            content
        }
    }
    const items = [
        itemFn("活动信息", <CreateGroupInfo
            setCurrent={setCurrent}
            setGroupInfo={setGroupInfo}
            groupInfo={groupInfo} />),
        itemFn("添加活动商品", <SelectProducts
            setCurrent={setCurrent}
            setGroupInfo={setGroupInfo}
            groupInfo={groupInfo} />),
        itemFn("创建成功", <CreateGroupFinish />),
    ]

    return (
        <div>
            <Steps
                onChange={e => setCurrent(e)}
                current={current}
                labelPlacement='vertical'
                items={items}
                style={{ width: '50%', margin: '16px auto' }}
            />
            {items[current].content}
        </div>
    )
}
