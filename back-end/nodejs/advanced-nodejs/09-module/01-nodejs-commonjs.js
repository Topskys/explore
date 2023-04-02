// 模块的导入与导出
let obj=require('./m')

//console.log(obj)

// 验证同步加载
//console.log("同步加载开始...")
//console.log(obj)
//console.log("同步加载结束...")


console.log(require.main==module) // true