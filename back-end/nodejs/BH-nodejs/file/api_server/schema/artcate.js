//文章分类验证规则

//导入验证规则的模块
const joi = require('joi')



//定义 name 和 alias 的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

//向外共享验证规则对象
exports.add_cate_schema = {
    body: {
        name,
        alias, //别名
    }
}




//定义 分类 id 的验证规则
const id = joi.number().integer().min(1).required()

//验证对象 - 删除分类
exports.delete_cate_schema = {
    params: {
        id,
    },
}

//验证对象 - 根据id获取分类
exports.get_cate_schema = {
    params: {
        id,
    },
}





//验证对象 - 根据id更新分类
exports.update_cate_schema = {
    body: {
        Id: id,
        name,
        alias,
    },
}