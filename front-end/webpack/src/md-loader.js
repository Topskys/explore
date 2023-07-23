const {marked} = require('marked')

module.exports = source => {
    // loader返回值必须符合js语法或交给下一个loader处理，因为打包后会插入bundle.js中运行。
    // return "console.log('-----------source---------')";
    const htmlStr = marked(source);
    // return `module.exports=${JSON.stringify(htmlStr)}`
    // or ES6
    // return `export default ${JSON.stringify(htmlStr)}`
    return htmlStr // md-loader -----pipe-----> html-loader
}