/**
 * CRUD模块
 */



function response(ctx, params) {
    return ctx.body = {
        code: params.code || params.rel ? 200 : 300,
        msg: params.msg || rel?'success':'error',
        data: params.rel || params.err
    }
}





/**
 * @description: 查询全部
 * @param {*} model 模型
 * @param {*} ctx 
 * @return {*}
 */
const find = (model,where, ctx) => (
    model.find(where).then(rel => {
        response(ctx, { rel })
    }).catch(err => {
        response(ctx, { err, msg: '异常', code: 400 })
        console.error(err)
    })
)



/**
 * @description: 条件查找
 * @param {*} model
 * @param {*} where 条件
 * @param {*} ctx
 * @return {*}
 */
const findOne = (model, where, ctx) => {
    return model.findOne(where).then(rel => {
        response(ctx, { rel})
    }).catch(err => {
        response(ctx, { err, msg: '异常', code: 400 })
        console.error(err)
    })
}



/**
 * @description: 删除
 * @param {*} model
 * @param {*} where
 * @param {*} ctx
 * @return {*}
 */
const findOneAndDel = (model, where, ctx) => {
    return model.findOneAndDelete(where).then(rel => {
        response(ctx, { rel})
    }).catch(err => {
        response(ctx, { err, msg: '异常', code: 400 })
        console.error(err)
    })
}



/**
 * @description: 新增
 * @param {*} model
 * @param {*} params
 * @param {*} ctx
 * @return {*}
 */
const add = (model, params, ctx) => {
    return model.create(params).then(rel => {
        response(ctx, { rel })
    }).catch(err => {
        response(ctx, { err, msg: '异常', code: 400 })
        console.error(err)
    })
}



/**
 * @description: 更新
 * @param {*} model
 * @param {*} where
 * @param {*} params
 * @param {*} ctx
 * @return {*}
 */
const updateOne = (model, where, params, ctx) => {
    return model.updateOne(where, params).then(rel => {
        response(ctx, { rel })
    }).catch(err => {
        response(ctx, { err, msg: '异常', code: 400 })
        console.error(err)
    })
}




module.exports = {
    find,
    findOne,
    findOneAndDel,
    add,
    updateOne,
}