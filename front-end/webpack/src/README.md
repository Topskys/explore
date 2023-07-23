# Webpack 快速上手
[前端工程化」之 Webpack 原理与实践（彻底搞懂吃透 Webpack）汪磊原版](https://www.bilibili.com/video/BV1kP41177wp/?p=75&share_source=copy_web&vd_source=d50c6b3216dda73ea5961ad06d492fa2)

## 未使用webpack前运行
01-getting-started
    |- src
    |   |- heading.js
    |   |- index.js
    |- index.html
```bash
npm install --global serve
# run
serve .
```

## 使用webpack
```bash
yarn init --yes
# 安装webpack webpack-cli
yarn add webpack webpack-cli --dev
# 查看webpack版本
yarn webpack --version
# 运行webpack打包
yarn webpack
# 运行
serve . 
# or
serve dist
# 指定webpack打包模式or配置文件中指定
yarn webpack --mode development
```
```json
// or
// 在package.json中定义scripts代替yarn webpack
"scripts":{
    "build":"webpack"
},
// then run
yarn build
```
作以下替换也可以运行：
```html
<!-- <script type="module" src="src/index.js"></script> -->
    <script src="dist/main.js"></script>
```

<h2>测试自制md-loader</h2>

## 自动编译

```bash 
yarn webpack --watch
```

browserSync
```bash
# install browser-sync
npm i -g browser-sync
# use (监听dist/文件下的变化)
browser-sync dist --files "**/*"
```

Webpack Dev Server
```bash 
# install
yarn i -g webpack-dev-server
# use
# 它会启动webpack打包，然后启动一个http服务，也会监听文件变化，更新浏览器。
# 它局别于browser-sync先打包输出到磁盘的方式，会将打包资源放在内存中，再给浏览器。
yarn webpack-dev-server
```


