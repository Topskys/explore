# Vite
> 2023年6月4日20:27:08
Vite工作原理和手写实现

https://www.bilibili.com/video/BV1BL411q7UF?p=2&vd_source=f72f2ba9c041e7d811515312b7d7456a

Vite概念
- Vite是一个面向现代浏览器的一个更轻、更快的 Web应用开发工具
- 它基于ECMAScript标准原生模块系统（ES Modules)实现

Vite项目依赖
- Vite
- @vue/compiler-sfc

基础使用
- vite serve
- vite build

HMR
- Vite HMR
- 立即编译当前所修改的文件. Webpack HMR
- 会自动以这个文件为入口重写build一次，所有的涉及到的依赖也都会被加载一遍

## Build
 vite build
- Rollup
- Dynamic import
- Polyfill

## 打包or不打包
使用Webpack打包的两个原因:
- 浏览器环境并不支持模块化
- 零散的模块文件会产生大量的HTTP请求

## Vite特性
- 快速冷启动
- 模块热更新
- 按需编译
- 开箱即用

## Vite核心功能
- 静态Web 
- 服务器
- 编译单文件组件
    拦截浏览器不识别的模块，并处理
- HMR


## npm link
link会把当前项目链接到当前npm安装目录里面来，打开一个基于vite的vue3项目，然后在vue3项目路径打开终端，输入vite-cli运行自定义的vite。
```bash
npm link
```