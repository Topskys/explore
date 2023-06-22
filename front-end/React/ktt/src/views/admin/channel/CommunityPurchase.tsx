import { useEffect, useState } from "react"
import type { GroupBuyType } from "../../../utils/types"
import { getGroupBuy } from "../../../api/purchase"
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs' // antd dayjs
import { DATE_TIME_FORMAT, Group_BUY_STATE } from "../../../utils/constant";


const columns: ColumnsType<GroupBuyType> = [
    {
        title: '活动编号',
        dataIndex: 'id',
    },
    {
        title: '活动名称',
        dataIndex: 'name',
    },
    {
        title: '开始时间',
        dataIndex: 'startTime',
        render: (time: string) => dayjs(time).format(DATE_TIME_FORMAT)
    },
    {
        title: '结束时间',
        dataIndex: 'endTime',
        render: (time: string) => dayjs(time).format(DATE_TIME_FORMAT)
    },
    {
        title: '活动名称',
        dataIndex: 'name',
    },
    {
        title: '状态',
        dataIndex: 'state',
        render: (state: number) => Group_BUY_STATE[state]
    },
    {
        title: '操作',
        render: row => (<>删除</>)
    },
]

function CommunityPurchase() {
    // 定义分页数据
    const [pagination, setPagination] = useState({ total: 1, current: 1 })
    // 默认的查询参数
    const [params, setParams] = useState<GroupBuyType>({
        order: "asc",
        state: "",
        id: "",
        name: "",
        products: "",
        shop: "",
        endTime: ""
    })
    // 团购列表数据
    const [groupBuyList, setGroupBuyList] = useState<GroupBuyType[]>([])
    // 获取团购列表数据
    function getGroup() {
        getGroupBuy({
            ...params,
            current: pagination.current
        }).then(res => {
            const pgn = res.data.pagination
            setGroupBuyList(res.data.list)
            setPagination({ current: pgn.current, total: pgn.total })
        })
    }

    // 挂载时获取数据
    useEffect(() => {
        getGroup()
    }, [pagination.current]) // pagination.current变化更新列表数据

    return (
        <div>
            <h1>社区团购</h1>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={groupBuyList}
                pagination={pagination}
                onChange={(pgn: any) => setPagination({ ...pagination, current: pgn.current })} />
        </div>
    )
}

export default CommunityPurchase