const express = require('express')
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

//导入验证的中间件
const expressJoi = require('@escook/express-joi')

//导入需要的验证规则
const { reg_login_schema } = require('../schema/user')


router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)
router.post('/login', expressJoi(reg_login_schema), userHandler.login)



module.exports = router