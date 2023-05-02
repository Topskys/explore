// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: 3307,
    database: 'my_db_01',
})

// 向外共享 db 数据库连接对象
module.exports = db


//检测数据是否连接成功1
db.query('select 1', (err, results) => {
    if (err) return console.log(err.message)
    console.log(results)
})





//检测数据是否连接成功2
// var mysql = require('mysql'); //调用MySQL模块

// //创建一个connection
// var connection = mysql.createConnection({
//     host: '127.0.0.1', //主机
//     user: 'root', //MySQL认证用户名
//     password: '123456', //MySQL认证用户密码
//     port: '3307', //端口号
//     database: 'my_db_01', //数据库名称
// });
// //创建一个connection
// connection.connect(function(err) {
//     if (err) {
//         console.log('[query] - :' + err);
//         return;
//     }
//     console.log('[connection connect]  succeed!');
// });
// //执行SQL语句
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) {
//         console.log('[query] - :' + err);
//         return;
//     }
//     console.log('The solution is: ', rows[0].solution);
// });
// //关闭connection
// connection.end(function(err) {
//     if (err) {
//         return;
//     }
//     console.log('[connection end] succeed!');
// });