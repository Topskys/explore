import React, { useEffect, useState } from 'react'
import { GroupBuyType } from '../../utils/types'
import { getGroupBuyProducts } from '../../api/purchase'
import { Table } from 'antd'

interface IProps {
  groupInfo: GroupBuyType,
}

const columns= [
  {
    title: '商品编号',
    dataIndex: 'id',
  },
  {
    title: '商品名称',
    dataIndex: 'productName',
  },
  {
    title: '商品图片',
    dataIndex: 'gallery',
    render:(urls:string)=>{
      let temp
      if(urls.includes(",")){
        temp = urls.split(",")
      }else{
        temp = urls.split("|")
      }
      return <img src={temp[0]} width="120"/>
    }
  },
  {
    title: '规格',
    dataIndex: 'specs',
  },
  {
    title: '正常价格',
    dataIndex: 'price',
  }, {
    title: '促销价格',
    dataIndex: 'salePrice',
  }, {
    title: '佣金比例',
    dataIndex: 'rate',
    render:(text:any)=>text+'%'
  }, {
    title: '每人限购',
    dataIndex: 'limitBuy',
  }, {
    title: '活动总量',
    dataIndex: 'stock',
  },{
    title: '规格',
    dataIndex: 'spesc',
  }, {
    title: '规格',
    dataIndex: 'spesc',
  },{
    title: '规格',
    dataIndex: 'spesc',
  },
];

export default function GroupBuyList(props: IProps) {
  // 定义分页数据
  const [pagination, setPagination] = useState({ total: 1, current: 1,pageSize: 10,size:2, })
  // 
  const [products, setProducts] = useState([]);

  function getProducts() {
    getGroupBuyProducts({
      ...pagination,
      groupBuyId: props.groupInfo.id
    }).then(res => { 
      setProducts(res.data.data) 
      const p=res.data.pagination
      // 更新分页信息
      setPagination({ ...pagination,current: Number(p.current), total: p.total })
    })
  }
  
  useEffect(() => {
    getProducts()
  }, [pagination.current])

  return (
    <div>
      <Table 
      dataSource={products} 
      columns={columns} 
      rowKey="id"
        pagination={{current:pagination.current,total:pagination.total,pageSize:pagination.size}}
        onChange={(p: any) => {
          setPagination({
            ...pagination,
            current: p.current
          })
        }}
        />
    </div>
  )
}
