const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const common = require("./webpack.common")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const merge = require("webpack-merge")


/**
 * 生产环境配置
 * 使用时需要配置命令：
 * yarn webpack --config webpack.prod.js
 * 或
 * 将 --config webpack.prod.js配置到package.json中
 */


/**
 * Object.assign()存在相同的属性会被覆盖（不建议）
 */
// module.exports = Object.assign({},common, {
//     mode:"production",
//     plugins:[
//         new CleanWebpackPlugin(),
//         new CopyWebpackPlugin(['public']),
//     ]
// })


/**
 * Merge会自行处理对象属性合并
 */
module.exports = merge(common, {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(['public']),
    ]
})