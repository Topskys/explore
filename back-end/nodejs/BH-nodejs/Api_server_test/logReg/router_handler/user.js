//导入数据库模块
const db = require('../db/index')

//导入加密包bcryptjs
const bcrypt = require('bcryptjs')

//导入生成 Token 包
const jwt = require('jsonwebtoken')

//导入全局配置文件
const config = require('../config')




// 注册用户的处理函数
exports.regUser = (req, res) => {

    // 接收表单数据
    const userinfo = req.body

    //定义 SQL 语句，查询用户名是否被占用
    const sql = `select * from ev_users where username=?`
    db.query(sql, [userinfo.username], function(err, results) {
        if (err) {
            return res.cc(err)
        }
        // 用户名被占用
        if (results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名！')
        }

        //调用bcrypt.hashSync()对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        const sql = 'insert into ev_users set ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, function(err, results) {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) {
                return res.cc('注册用户失败，请稍后再试！') //return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
            }
            res.cc('注册成功！', 0)
        })
    })
}



// 登录的处理函数
exports.login = (req, res) => {

    const userinfo = req.body;
    console.log(userinfo)
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登陆失败！')

        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
            // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('登录失败！')
        }
        console.log("登录成功！")

        // 登录成功，生成 Token 字符串
        const user = {...results[0], password: '', user_pic: '' } //
        console.log(user)
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            msg: "登录成功",
            token: 'Topsky ' + tokenStr,
        })
    })
}