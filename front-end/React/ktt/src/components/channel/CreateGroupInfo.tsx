import React from 'react'
import type { GroupBuyType } from "../../utils/types"
import { Button, Card, Checkbox, DatePicker, Input } from 'antd'
import { DATE_FORMAT } from '../../config'
import dayjs from "dayjs"


interface IProps {
  setCurrent: Function,
  setGroupInfo: Function,
  groupInfo: any,
  // groupInfo: GroupBuyType,
}

interface shopType {
  id?: number
  name?: string
  type?: string
  address?: string
}

const { RangePicker } = DatePicker;

export default function CreateGroupInfo(props: IProps) {
  // 解构属性和方法
  const { groupInfo, setCurrent, setGroupInfo } = props;

  return (
    <div className="CreateGroupInfo">
      <Card type='inner' title='活动信息'>
        <p>
          <span className='label'>活动名称：</span>
          <span><Input
            value={groupInfo.name}
            onChange={e => {
              setGroupInfo({
                ...groupInfo,
                name: e.target.value
              })
            }} /></span>
        </p>
        <p>
          <span className='label'>活动时间：</span>
          <span>
            {/* <DatePicker format={DATE_FORMAT}
              value={dayjs(groupInfo.startTime)}
              onChange={(value, str) => {
                setGroupInfo({
                  ...groupInfo,
                  startTime: str
                })
              }}
            />
            到
            <DatePicker format={DATE_FORMAT}
              value={dayjs(groupInfo.endTime)}
              onChange={(value, str) => {
                setGroupInfo({
                  ...groupInfo,
                  endTime: str
                })
              }} /> */}
            <RangePicker
              format={DATE_FORMAT}
              value={[groupInfo.startTime ? dayjs(groupInfo.startTime) : null, groupInfo.endTime ? dayjs(groupInfo.endTime) : null]}
              onChange={(value, str) => {
                setGroupInfo({
                  ...groupInfo,
                  startTime: str[0],
                  endTime: str[1]
                })
              }} />
          </span>
        </p>
        <p>
          <Button type='primary' onClick={() => setCurrent(1)}>下一步，选择商品</Button>
        </p>
        <p>
          <span className='label'>广告语：</span>
          <span><Input
            value={groupInfo.slogan}
            onChange={e => {
              setGroupInfo({
                ...groupInfo,
                slogan: e.target.value
              })
            }} /></span>
        </p>
        <p>
          <span className='label'>首页展示：</span>
          <span>
            <Checkbox
              checked={Boolean(groupInfo.showHome)}
              onChange={e => {
                setGroupInfo({
                  ...groupInfo,
                  showHome: Number(e.target.checked)
                })
              }} />
          </span>
        </p>
      </Card>
    </div>
  )
}
