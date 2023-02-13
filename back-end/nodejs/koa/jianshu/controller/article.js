/*
 * @Author: Topskys
 * @Date: 2022-12-29 20:24:23
 * @LastEditTime: 2022-12-29 21:31:10
 */
const Article = require('../models/article');
const crud = require('../controller/crudUtil');



// 发布文章
const add = async ctx => {
    let article = ctx.request.body;
    await crud.add(Article, article, ctx);
}



// 查询所有文章-分页
const findAll = async ctx => {
    let { page = 1, pageSize = 10, author } = ctx.query;

    // 判断页码
    (!page || isNaN(Number(page))) ? (page = 1) : (page = Number(page))

    // 计算总页数
    let count = 0
    await Article.find({ author }).count().then(rel => {
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

    await Article.find({ author })
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
                    msg: '没有查询到文章',
                    data: rel
                }
            }
        }).catch(err => {
            ctx.body = {
                code: 500,
                msg: '查询文章时出现异常',
                err
            }
        })
}



// 查询单个文章
const findOne = async ctx => {
    let { id } = ctx.query
    let isRead = false

    await Article.findOne({ id }).then(rel => {
        ctx.body = {
            code: rel ? 200 : 300,
            msg: rel ? 'success' : 'error',
            data: rel
        }
        isRead=true
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '查询文章时出现异常',
            err
        }
    })

    isRead && await Article.updateOne({ id }, { $inc: { read: 1 } })
}




// 修改文章
const update = async ctx => {
    let { id, title = '', stemfrom = '', content = '' } = ctx.request.body

    await Article.updateOne(
        { id },
        {
            title,
            stemfrom,
            content
        }
    ).then(rel => {
        ctx.body = {
            code: rel.modifiedCount > 0 ? 200 : 300,
            msg: rel.modifiedCount > 0 ? "文章修改成功" : "文章修改失败",
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '修改文章时出现异常',
            err
        }
    })
}





// 删除文章
const del = async ctx => {
    let { id } = ctx.request.body

    await Article.findOneAndDelete({ id }).then(rel => {
        ctx.body = {
            code: rel ? 200 : 300,
            msg: rel ? "文章删除成功" : "文章删除失败",
            rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '删除文章时出现异常',
            err
        }
    })
}







module.exports = {
    add,
    findAll,
    findOne,
    update,
    del,
}