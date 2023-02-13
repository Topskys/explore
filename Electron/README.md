<!--
 * @Author: Topskys
 * @Date: 2022-11-29 19:57:28
 * @LastEditTime: 2022-12-01 18:06:35
-->
# electron
2022-11-29 19:57:28



## 新建项目
```bash
# 新建文件夹
mkdir electron-basic
# 转到项目文件夹
cd electron-basic
# 初始化 package.json
npm init -y
# 安装 electron
npm i electron -D
# 新建 main.js，在package.json换掉入口文件
``` 




## 创建vite-electron项目
```bash
npm init vite 
# 填写项目名
# 选择框架
vue
# 选择语言
JavaScript
# 转到项目目录下
cd 项目名
# 安装依赖
npm install
# 运行
npm run dev
# 安装electron
npm i electron -D
# package.json 新增入口文件
"main": "main.js",
# package.json 配置
# 查看帮助
npx nodemon --help
# 安装 electron-win-state
npm i electron-win-state -D
# 重新启动
npm run dev
npm run start
```