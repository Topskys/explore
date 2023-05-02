const express = require('express')
const router = express.Router()

//挂载路由

//导入函数处理模块
const userinfo_handler = require('../router_handler/userinfo')

//验证数据的中间件
const expressJoi = require('@escook/express-joi')

//导入需要的验证规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')

//获取用户基本信息路由模块
router.get('/userinfo', userinfo_handler.getUserInfo)

//更新用户的基本信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

//重置密码的路由
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)

//更新用户头像
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)













module.exports = router //使用 当访问/my/?时需要headers（key=Authorization，value=yyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ0b3AiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjpudWxsLCJlbWFpbCI6bnVsbCwidXNlcl9waWMiOm51bGwsInBpYyI6IiIsImlhdCI6MTY0OTE0NzE0MSwiZXhwIjoxNjQ5MTgzMTQxfQ.CqNdvj8XD1dsEA5teC7MUcwA9zaaho_5SLOOm9fDxEQ）//登录生成的token