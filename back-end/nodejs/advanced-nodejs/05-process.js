// 1.资源
// CPU内存
//console.log(process.memoryUsage())
//{
//  rss: 22953984,
//  heapTotal: 3596288,
//  heapUsed: 2575588,
//  external: 261401,
//  arrayBuffers: 10762
//}

//console.log(process.cpuUsage()) // { user: 15000, system: 15000 }

// 2.运行环境
// 运行目录、node环境、cpu架构、用户环境、系统环境变量
//console.log(process.cwd(),'\n',
//            process.version,'\n',
//            process.versions,'\n',
//            process.arch,'\n',
//            process.env.NODE_ENV,'\n',
//            process.env.PATH,'\n',
//            process.env.USERPROFILE,'\n',
//            process.platform,'\n')

// 3.运行状态
// 启动参数、PID、运行时间
//console.log(process.argv) // []
//console.log(process.argv0) // execArgv， [0] ，快捷获取argv只提供argv0，没有argv1~
//console.log(process.execArgv,'\n',process.pid,'\n',process.ppid,'\n')
//console.log(process.uptime(),'\n')  // 执行时间

// 4.事件
//process.on('exit',(code)=>{
//    // 在此不可执行异步代码。
//    console.log('3 exit '+ code)
//})
//process.on('beforeExit',(code)=>{
//    // 可执行异步代码。
//    console.log('2 before exit '+ code)
//})
//console.log("1 代码执行完了。上面代码是异步的。")

//process.exit() // 退出程序
//console.log("退出程序，后续代码不再执行。")

// 5.标准输入输出错误
//console.log=function (data){ // 重写log()
//    process.stdout.write('--标准--'+data+'\n')
//}
//console.log("重写log()")

//const fs=require('fs')
//fs.createReadStream('text.txt').pipe(process.stdout) // readStrean--(pipe takes result for sb)-->process.stdout

//process.stdin.pipe(process.stdout) // 标准输入(123456)-->标准输出(123456)
//process.stdin.setEncoding('utf-8') // 设置编码
//process.stdin.on('readable',()=>{
//    let chunk=process.stdin.read() // input
//    chunk !=null && process.stdout.write('data '+chunk) // print
//})