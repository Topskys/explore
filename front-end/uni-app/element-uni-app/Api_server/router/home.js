const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const homeHandler = require('../router_handler/home')


// 微信授权登录
router.get('/wx/auth', homeHandler.wxLogin)

// 获取RSA公钥
router.get('/wx/publicKey', homeHandler.publicKey)

// 获取微信凭证
router.get('/wx/token', homeHandler.token)

// 获取微信消息回调
router.get('/wx/wxCallback', homeHandler.wxCallback)



// 获取公告分页列表
router.get('/notice/page', homeHandler.notice)

// 获取公告详情
router.get('/notice/info', homeHandler.noticeDetail)




// 获取排行榜列表分页
router.get('/rank/page', homeHandler.rank)

// 获取轮播图
router.get('/rank/pics', homeHandler.carousel)




// 近20次正式和训练考试成绩
router.get('/ability/achieve', homeHandler.achieve)

// 考试分页列表
router.get('/ability/page', homeHandler.examPagination)

// 理、操、编题正确率
router.get('/ability/rate', homeHandler.rate)

// 近20天训练题目数量统计
router.get('/ability/trainTotal', homeHandler.trainTotal)


// 图片流
router.get('/file/bytes', homeHandler.imageBytes)







// 登录
router.get('/login', homeHandler.login)

// categoryList
router.get('/catelist', homeHandler.categoryList)

// 首页商家列表
router.get('/shoplist', homeHandler.shopList)


// 商家详情
router.get('/shopdetail', homeHandler.shopDetail)


// goodCates
router.get('/goodcates', homeHandler.goodCateList)



// 商品信息
router.get('/good', homeHandler.goodInfo)


// 支付
router.get('/pay', homeHandler.pay)


// 获取订单信息
router.get('/order', homeHandler.orderInfo)






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