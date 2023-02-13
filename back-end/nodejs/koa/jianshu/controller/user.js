/*
 * @Author: Topskys
 * @Date: 2022-12-24 22:40:17
 * @LastEditTime: 2022-12-27 22:28:13
 */
// const { User } = require('../models')
const User = null
const crud = require('../controller/crudUtil')
const jwt = require('jsonwebtoken')
const { Users } = require('../models/users')



// 新增
// const userAdd = async ctx => {
//     let { username, password } = ctx.request.body
//     await crud.add(User, { username, password }, ctx)
// }

// // 更新
// const userUpdate = async (ctx) => {
//     let params = ctx.request.body
//     await crud.updateOne(User,
//         { _id: params._id },
//         {
//             username: params.username,
//             password: params.password
//         },
//         ctx)
// }


// // 删除
// // http://localhost:3000/users/del?id=63a70a87b43256ad8754ab54
// const userDel = async (ctx) => {
//     await crud.findOneAndDel(User, { _id: ctx.request.body.id }, ctx)
// }


// // 查询全部
// const userFind = async (ctx) => {
//     await crud.find(User, null, ctx)
// }


// // 条件查询
// const userFindOne = async (ctx) => {
//     await crud.findOne(User, { _id: ctx.params.id }, ctx)
// }



// 用户登录练习
// const login = async (ctx) => {
//     let user = {
//         username: 'admin',
//         password: '123456'
//     }

//     let token = jwt.sign({
//         username: user.username,
//     }, 'jianshu-server-jwt-key', {
//         expiresIn: 3600 * 24 * 7 // 7 days
//     })

//     return ctx.body={
//         token
//     }
// }



/**
 * @description: 用户登录
 * @param {*} ctx
 * @return {*}
 */
const login = async (ctx) => {
    let { username, password } = ctx.request.body

    await Users.findOne({ username, password }).then(rel => {
        if (rel) {
            let token = jwt.sign({
                username: rel.username,
                _id: rel._id,
            }, 'jianshu-server-jwt', {
                expiresIn: 3600 * 24 * 7 // 7 days
            })

            ctx.body = {
                code: 200,
                msg: "登录成功",
                token
            }
        } else {
            ctx.body = {
                code: 300,
                msg: "用户名或密码错误",
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: "登录时出现异常",
            err
        }
    })
}



/**
 * @description: 用户注册
 * @param {*} ctx
 * @return {*}
 */
const reg = async ctx => {
    let { username, password } = ctx.request.body

    let isDouble = false

    await Users.findOne({ username }).then(rel => {
        if (rel) isDouble = true
    })

    if (isDouble) {
        ctx.body = {
            code: 300,
            msg: '该用户已经存在',
        }
        return
    }

    await Users.create({ username, password }).then(rel => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: "注册成功",
            }
        } else {
            ctx.body = {
                code: 300,
                msg: "注册失败",
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: "登录时出现异常",
            err
        }
    })
}



/**
 * @description: 验证用户登录
 * @param {*} ctx
 * @return {*}
 */
const verify = async ctx => {
    let token = ctx.header.authorization
    token = token.replace('Bearer ', '') // 注意'Bearer '后面的空格

    try {
        let res = jwt.verify(token, 'jianshu-server-jwt')

        await Users.findOne({ _id: res._id }).then(rel => {
            if (rel) {
                ctx.body = {
                    code: 200,
                    msg: "用户认证成功",
                    data: rel
                }
            } else {
                ctx.body = {
                    code: 500,
                    msg: "用户认证失败",
                    data: rel
                }
            }
        }).catch(err => {
            ctx.body = {
                code: 500,
                msg: "用户认证时出现异常1",
                data: err
            }
        })
    } catch (err) {
        ctx.body = {
            code: 500,
            msg: "用户认证时出现异常2",
            data: err
        }
    }
}



/**
 * @description: 修改用户密码
 * @param {*} ctx
 * @return {*}
 */
const updatePassword = async ctx => {
    let { _id, username, password } = ctx.request.body

    await Users.updateOne(
        { username },
        { password }
    ).then(rel => {
        ctx.body = {
            code: rel.modifiedCount > 0 ? 200 : 300,// rel.n
            msg: rel.modifiedCount > 0 ? "密码修改成功" : "密码修改失败",
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: "修改密码时出现异常",
            data: err
        }
    })
}




/**
 * @description: 修改个人信息
 * @param {*} ctx
 * @return {*}
 */
const updatePersonal = async ctx => {
    let { _id, avatarUrl = '', gender = '', phone = '', email = '', desc = '' } = ctx.request.body

    await Users.updateOne(
        { _id },
        {
            avatarUrl,
            gender,
            phone,
            email,
            desc
        }
    ).then(rel => {
        ctx.body = {
            code: rel.modifiedCount > 0 ? 200 : 300,// rel.n
            msg: rel.modifiedCount > 0 ? "修改个人信息成功" : "修改个人信息失败",
            data: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: "修改个人信息时出现异常",
            data: err
        }
    })
}


module.exports = {
    // userAdd,
    // userUpdate,
    // userDel,
    // userFind,
    // userFindOne,
    login,
    reg,
    verify,
    updatePassword,
    updatePersonal,
}