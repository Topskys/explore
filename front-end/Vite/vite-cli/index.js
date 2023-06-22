#!/usr/bin/env node 

// 配置vite-cli运行位置

// 导入koa
const Koa = require("koa")
const send = require("koa-send")
// 导入path
const path = require("path")
// 导入SFC编译器
const compilerSFC = require("@vue/compiler-sfc")
// 导入可读流
const { Readable } = require("stream")

// 创建服务器实例
const app = new Koa();
const port = 3000 || 2364


const streamToString = stream => new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", chunk => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    stream.on('error', reject);
})

const stringToStream = text => {
    const stream=new Readable();
    stream.push(text);
    stream.push(null);
    return stream
}

// 3.加载第三方模块
app.use(async (ctx, next) => {
    // ctx.path --> /@modules/vue
    if (ctx.path.startsWith("/@modules/vue")) {
        const moduleName = ctx.path.substr(10);
        const pkgPath = path.join(process.cwd(), "node_modules", moduleName, "package.json")
        const pkg = require(pkgPath);
        ctx.path = path.join("/node_modules", moduleName, pkg.module)
    }
    await next()
})



// 1.静态文件服务器（中间件）
app.use(async (ctx, next) => {
    // 返回默认静态页面
    await send(ctx, ctx.path, {
        root: process.cwd(),
        index: "index.html"
    })
    await next();
})

// 4.处理单文件组件
app.use(async (ctx, next) => {
    if (ctx.path.endsWith(".vue")) {
        const contents = await streamToString(ctx.body)
        const { descriptor } = compilerSFC.parse(contents)
        let code;
        // 处理SFC第一次请求，不带type参数
        if (!ctx.query.type) {
            code = descriptor.script.content;
            code = code.replace(/export\s+default\s+/g, "const __script = ");
            code += `
            import { render as __render } from "${ctx.path}?type=template"
            __script.render = __render
            export default __script
            `
        } else if (ctx.query.type === "template") {
            const templateRender = compilerSFC.compileTemplate({
                source: descriptor.template.content
            });
            code = templateRender.code;
        }
        ctx.type = "application/javascript";
        ctx.body = stringToStream(code);
    }
    await next();
})

// 2.修改第三方模块的路径
app.use(async (ctx, next) => {
    if (ctx.type === "application/javascript") {
        const contents = await streamToString(ctx.body);
        // import {createApp} from 'vue'
        // import App from './App.vue'
        ctx.body = contents
            .replace(/(from\s+['"])(?![\.\/])/g, "$1/@modules/")
            .replace(/process\.env\.NODE_ENV/g, '"development"')
    }
    await next();
})


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})