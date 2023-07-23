import { useEffect, useState } from "react"
import type { GroupBuyType } from "../../../utils/types"
import { getGroupBuy } from "../../../api/purchase"
import { Space, Table, Tag, Card, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs' // antd dayjs
import { DATE_TIME_FORMAT, Group_BUY_STATE } from "../../../utils/constant";
import SearchParams from "../../../components/channel/SearchParams";
import {Link} from "react-router-dom"

const columnFn = (title: string, dataIndex: string, render?: Function) => {
    return {
        title,
        dataIndex,
        render
    }
}

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

const baseParams = {
    order: "asc",
    state: "",
    id: "",
    name: "",
    products: "",
    shop: "",
    startTime: "",
    endTime: ""
}

function CommunityPurchase() {
    // 定义分页数据
    const [pagination, setPagination] = useState({ total: 1, current: 1 })
    // 默认的查询参数
    const [params, setParams] = useState<GroupBuyType>(baseParams)
    // 定义重置方法
    const reset = () => {
        setParams(baseParams)
        // 更新完params数据，重新请求，拿不到数据。（产生问题1：点击重置两次才触发请求）
        // getGroup()
        // 解决问题1：需要单独使用useEffect监听params变化再做getGroup()请求
    }

    // 团购列表数据
    const [groupBuyList, setGroupBuyList] = useState<GroupBuyType[]>([])
    // 获取团购列表数据
    function getGroup() {
        getGroupBuy({
            ...params,
            current: pagination.current
        }).then(res => {
            const pgn = res.data.pagination
            setGroupBuyList(res.data.data)
            setPagination({ current: pgn.current, total: pgn.total })
        })
    }

    // 挂载时获取数据
    useEffect(() => {
        getGroup()
    }, [pagination.current]) // pagination.current变化更新列表数据

    // 监听params的变化，拿到最新的state。
    useEffect(() => {
        // 如果点击了重置按钮
        if (params === baseParams) {
            getGroup();
        }
    }, [params])

    return (
        <div>
            <h1>社区团购</h1>
            {/* 搜索组件 */}
            <Card
                type="inner"
                title={<span>筛选查询<Button style={{ marginLeft: 32 }}><Link to="/admin/channel/createGroupBuy">+ 创建团购活动</Link></Button></span>}>
                <SearchParams
                    params={params}
                    setParams={setParams}
                    getGroup={getGroup}
                    reset={reset}
                />
            </Card>

            {/* 表格组件 */}
            <Card
                type="inner"
                title={<span>数据展示</span>}>
                <Table
                    rowKey="id"
                    size="small"
                    columns={columns}
                    dataSource={groupBuyList}
                    pagination={pagination}
                    onChange={(pgn: any) => {
                        setPagination({
                            ...pagination,
                            current: pgn.current
                        })
                    }} />
            </Card>
        </div>
    )
}

export default CommunityPurchase