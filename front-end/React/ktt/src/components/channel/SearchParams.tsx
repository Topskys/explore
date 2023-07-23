import React from 'react'
import { GroupBuyType } from "../../utils/types"
import { Col, Input, Row, DatePicker, Radio, Button, Card } from 'antd';
import dayjs from "dayjs"
import { DATE_FORMAT, GROUP_BUY_STATE } from '../../config';

interface IProps {
  params: GroupBuyType, // 参数
  setParams: Function, // 设置查询参数的方法
  getGroup: Function, // 获取查询列表的方法
  reset: Function, // 重置按钮回调函数
}

const { RangePicker } = DatePicker

export default function SearchParams(props: IProps) {
  // 定义简易方法和属性
  const params = props.params;
  const setParams = props.setParams;

  return (
    <div style={{margin:'20px 0'}}>
      <Row gutter={8}>
        <Col span={7}>
          <label>活动编号：</label>
          <Input value={params.id}
            onChange={e => setParams({ ...params, id: e.target.value })}
            placeholder='活动编号'
            className="mt8" />
        </Col>
        <Col span={7}>
          <label>活动名称</label>
          <Input
            value={params.name}
            onChange={e => setParams({ ...params, name: e.target.value })}
            placeholder='活动名称'
            className="mt8"
          />
        </Col>
        <Col span={10}>
          <label>活动开始时间：</label>
          {/* value={()=>params.startTime?dayjs(params.startTime):''} */}
          <div>
            <RangePicker
              format={DATE_FORMAT}
              onChange={(date, strArr) => setParams({ ...params, startTime: strArr.join(",") })}
              className="mt8" />
          </div>
        </Col>
      </Row>
      <Row gutter={8} style={{ margin: "24px 0" }}>
        <Col span={7}>
          <label>参与商品：</label>
          <Input
            value={params.products}
            onChange={e => setParams({ ...params, products: e.target.value })}
            placeholder='活动商品'
            className="mt8"
          />
        </Col>
        <Col span={7}>
          <label>参与门店：</label>
          <Input
            value={params.shop}
            onChange={e => setParams({ ...params, shop: e.target.value })}
            placeholder='参与门店'
            className="mt8"
          />
        </Col>
        <Col span={10}>
          <label>活动结束时间：</label>
          <div>
            <RangePicker
              format={DATE_FORMAT}
              onChange={(date, strArr) => setParams({ ...params, endTime: strArr.join(",") })}
              className="mt8" />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={14}>
          <label>活动的状态：</label>
          <Radio.Group
            defaultValue=""
            buttonStyle='solid'
            onChange={(e) => setParams({ ...params, status: e.target.value })}
            className="mt8"
            size="small" >
            <Radio.Button value="">全部</Radio.Button>
            {
              GROUP_BUY_STATE.map((o, i) => <Radio.Button value={i} key={i}>{o}</Radio.Button>)
            }
          </Radio.Group>
        </Col>
        <Col span={10}>
          <Button onClick={e => props.reset()} style={{marginRight:'10px'}}>重置</Button>
          <Button type="primary" onClick={() => props.getGroup()}>搜索</Button>
        </Col>
      </Row>
    </div>
  )
}
