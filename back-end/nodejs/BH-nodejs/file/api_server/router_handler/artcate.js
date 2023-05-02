//导入数据库操作模块
const db = require('../db/index')



//这是获取文章分类列表的处理函数
exports.getArtCates = (req, res) => {
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        res.send({
            status: 0,
            msg: '获取文章分类列表数据成功！',
            data: results,
        })
    })
}



//新增文章分类处理函数
exports.addArticleCates = (req, res) => {

    //查询分类名称和别名是否被占用
    const sql = `select * from ev_article_cate where name=? or alias=?`
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)

        //length===2
        if (results.length === 2) return res.cc('分类名称和分类别名都被占用了，请更换后重试！')

        //length === 1
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名都被占用了，请更换后重试！')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用了，请更换后重试！')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用了，请更换后重试！')

        //定义插入分类sql语句
        const sql = 'insert into ev_article_cate set ?'
        db.query(sql, req.body, (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('新曾文章分类失败！')
            res.cc('新增文章分了成功！', 0)
        })

    })
}




//删除文章分类的处理函数
exports.deleteCateById = (req, res) => {
    sql = 'update ev_article_cate set is_delete=1 where Id=?' //将is_delete更新为1以表示删除
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败！')
        res.cc('删除文章分类成功', 0)
    })
}



//根据id获取文章分类的处理函数
exports.getArtCateById = (req, res) => {
    const sql = 'select * from ev_article_cate where Id=?'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取分类数据失败！')
        res.send({
            status: 0,
            msg: '获取文章分类数据成功',
            data: results[0],
        })
    })

}




//根据id更新文章分类的处理函数
exports.updateCateById = (req, res) => {
    //查询分类名称和别名是否被占用
    const sql = `select * from ev_article_cate where Id<>? and (name=? or alias=?)`
    db.query(sql, [req.body.Id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err)

        //length===2
        if (results.length === 2) return res.cc('分类名称和分类别名都被占用了，请更换后重试！')

        //length === 1
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称和分类别名都被占用了，请更换后重试！')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用了，请更换后重试！')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用了，请更换后重试！')

        //定义更新分类sql语句
        const sql = 'update ev_article_cate set ? where Id=?'
        db.query(sql, [req.body, req.body.Id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败！')
            res.cc('更新文章分类成功！', 0)
        })

    })
}