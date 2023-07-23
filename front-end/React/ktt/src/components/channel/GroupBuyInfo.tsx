import React, { useState, useEffect } from 'react'
import dayjs from "dayjs"
import type { GroupBuyType, TagType } from "../../utils/types"
import { Button, Card } from 'antd'
import {getTag} from "../../api/purchase"
import { CUSTOMER_TYPE, DATE_TIME_FORMAT, DELIVER_TYPE, GROUP_BUY_STATE, SHOW_HOME } from '../../config'

interface IProps {
  groupInfo: GroupBuyType,
}

export default function GroupBuyInfo(props: IProps) {
  const [tag, setTag] = useState<TagType>({})
  const groupInfo=props.groupInfo;
  const state=Number(groupInfo.state);
  // 请求tag数据
  useEffect(()=>{
    getTag({ id: groupInfo.tag })
    .then(res => setTag(res.data.data[0]))
  },[])
  return (
    <>
      <Card type='inner' title="活动状态">
        <p>{GROUP_BUY_STATE[state]}</p>
        {state <= 2 ? <Button>提前结束</Button> : ''}
      </Card>
      <Card type='inner' title="活动名称">
        <p>
          <span>活动名称：</span>
          <span>{groupInfo.name}</span>
        </p>
        <p>
          <span>活动名称：</span>
          <span>{dayjs(groupInfo.startTime).format(DATE_TIME_FORMAT)}到{dayjs(groupInfo.endTime).format(DATE_TIME_FORMAT)}</span>
        </p>
        <p>
          <span>广告语：</span>
          <span>{groupInfo.slogan}</span>
        </p>
        <p>
          <span>预告时间：</span>
          <span>{dayjs(groupInfo.preTime).format(DATE_TIME_FORMAT)}</span>
        </p>
        <p>
          <span>首页展示：</span>
          <span>{SHOW_HOME[Number(groupInfo.showHome)]}</span>
        </p>
        <p>
          <span>标签：</span>
          <span><img src={tag.pic} alt="标签" width="60" /></span>
        </p>
      </Card>
      <Card type='inner' title='活动规则'>
        <p>
          <span>顾客类型：</span>
          <span>{CUSTOMER_TYPE[Number(groupInfo.target)]}</span>
        </p>
        <p>
          <span>是否限量：</span>
          <span>{groupInfo.limitBuy===999?'不限':groupInfo.limitBuy}</span>
        </p>
        <p>
          <span>配送方式：</span>
          <span>{DELIVER_TYPE[Number(groupInfo.deliverWay)]}</span>
        </p>
        <p>
          <span>提货时间：</span>
          <span>{dayjs(groupInfo.pickTime).format(DATE_TIME_FORMAT)}</span>
        </p>
      </Card>
      
      </>
  )
}
