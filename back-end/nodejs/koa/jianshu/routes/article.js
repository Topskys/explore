/*
 * @Author: Topskys
 * @Date: 2022-12-29 20:25:29
 * @LastEditTime: 2022-12-29 21:22:34
 */
const Article =require('../controller/article');
const router=require('koa-router')();

router.prefix('/article');



// 发布文章
router.post('/add', Article.add)

// 查询所有文章（分页）
router.get('/findAll', Article.findAll)

// 查询单个文章
router.get('/findOne', Article.findOne)

// 修改文章
router.post('/update', Article.update)

// 删除文章
router.post('/del', Article.del)



module.exports=router;