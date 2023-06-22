import { Model } from "sequelize-typescript";

/**
 * @description: 统一处理分页格式
 * @param {T} data 
 * @param {number} page 当前页
 * @param {number} total 总数量
 * @param {number} limit 每次限制查询数量
 * @return {*}
 */
function paginate<T extends Model[]>(data: T, page: number = 1, total: number = 0, limit: number = 10) {
    return {
        data,
        page,
        total,
        totalPage: Math.ceil(total / limit),
        limit,
    }
}

export default paginate;