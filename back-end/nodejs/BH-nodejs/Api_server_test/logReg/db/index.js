//导入依赖包
const mysql = require('mysql')

//创建数据库连接
const db = mysql.createPool({
    host: '127.0.0.1', //ip/localhost
    user: 'root',
    password: '123456',
    port: 3307,
    database: 'my_db_01',
})


//检测数据是否连接成功1
db.query('select 1', (err, results) => {
    if (err) return console.log(err.message)
    console.log(results)
})

module.exports = db