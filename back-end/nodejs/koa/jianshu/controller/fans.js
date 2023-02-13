/*
 * @Author: Topskys
 * @Date: 2022-12-30 17:28:18
 * @LastEditTime: 2022-12-30 17:42:32
 */
const Fans = require('../models/fans');



// 关注作者
const follow = async ctx => {
    let fans = ctx.request.body;

    await Fans.create(fans).then(rel => {
        ctx.body = {
            code: rel ? 200 : 300,
            msg: rel ? '关注成功' : '关注失败',
            rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '关注时出现异常',
            err
        }
    })

}



// 取消关注
const unfollow = async ctx => {
    let { username, author } = ctx.request.body;

    await Fans.findOneAndDelete({ username, author }).then(rel => {
        ctx.body = {
            code: rel ? 200 : 300,
            msg: rel ? '取消关注成功' : '取消关注失败',
            rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '取消关注时出现异常',
            err
        }
    })
}




// 查询粉丝
const findAll = async ctx => {
    let { page = 1, pageSize = 10, author } = ctx.query;

    // 判断页码
    (!page || isNaN(Number(page))) ? (page = 1) : (page = Number(page))

    // 计算总页数
    let count = 0
    await Fans.find({ author }).count().then(rel => {
        count = rel
    })
    let totalPage = 0
    count > 0 && (totalPage = Math.ceil(count / pageSize))

    // 判断当前页码的范围
    if (totalPage > 0 && page > totalPage) {
        page = totalPage
    } else if (page < 1) {
        page = 1
    }

    // 计算起始位置
    let start = (page - 1) / pageSize

    await Fans.find({ author })
        .skip(start)
        .limit(pageSize)
        .then(rel => {
            if (rel && rel.length > 0) {
                ctx.body = {
                    code: 200,
                    msg: 'success',
                    data: rel,
                    page,
                    pageSize,
                    total: count
                }
            } else {
                ctx.body = {
                    code: 300,
                    msg: '还没有粉丝哦',
                    data: rel
                }
            }
        }).catch(err => {
            ctx.body = {
                code: 500,
                msg: '查询粉丝时出现异常',
                err
            }
        })
}



module.exports = {
    follow,
    unfollow,
    findAll,
}