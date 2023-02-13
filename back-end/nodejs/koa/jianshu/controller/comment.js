/*
 * @Author: Topskys
 * @Date: 2022-12-30 16:55:27
 * @LastEditTime: 2022-12-30 17:22:25
 */
const Comment = require('../models/comment')
const Article = require('../models/article')



/**
 * @description: 添加评论
 * @param {*} ctx
 * @return {*}
 */
const add = async ctx => {
    let comment = ctx.request.body;
    let isComment = false;

    await Comment.create(comment).then(rel => {
        ctx.body = {
            code: rel ? 200 : 300,
            msg: rel ? '发布成功' : '发布失败',
            rel
        }
        rel && (isComment = true)
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '发布评论时出现异常',
            err
        }
    })

    isComment && await Article.updateOne({ id }, { $inc: { comment: 1 } })
}




// 前台文章评论
const findById = async ctx => {
    let { id } = ctx.query;

    await Comment.find({ articleId: id }).then((rel) => {
        ctx.body = {
            code: rel ? 200 : 300,
            msg: rel ? '评论查询成功' : '评论查询失败',
            rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '查询评论时出现异常',
            err
        }
    })
}




// 后台查询评论
const findByAuthor = async ctx => {
    let { page = 1, pageSize = 10, author } = ctx.query;

    // 判断页码
    (!page || isNaN(Number(page))) ? (page = 1) : (page = Number(page))

    // 计算总页数
    let count = 0
    await Comment.find({ author }).count().then(rel => {
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

    await Comment.find({ author })
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
                    msg: '没有查询到文章评论',
                    data: rel
                }
            }
        }).catch(err => {
            ctx.body = {
                code: 500,
                msg: '查询文章评论时出现异常',
                err
            }
        })
}




module.exports = {
    add,
    findById,
    findByAuthor,
}