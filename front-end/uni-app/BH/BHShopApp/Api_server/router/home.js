const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const homeHandler = require('../router_handler/home')


// 获取banners
router.get('/banner', homeHandler.banner)

// 获取goods
router.get('/goods', homeHandler.goods)

// 获取imgcates
router.get('/imgcates', homeHandler.imgcates)

// 获取goods
router.get('/imgs/:id', homeHandler.imgs)

// 获取news
router.get('/newslist', homeHandler.newslist)

// 获取newsDetail
router.get('/newsdetail/:id', homeHandler.newsDetail)


// 将路由对象共享出去
module.exports = router
