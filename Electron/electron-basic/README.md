<!--
 * @Author: Topskys
 * @Date: 2022-11-29 19:57:28
 * @LastEditTime: 2022-11-30 22:52:52
-->
# electron
当前electron版本21.3.1


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
``` 
新建 main.js，在package.json换掉入口文件
```json
"main": "main.js", // 入口文件
  "scripts": {
    // "start":"electron .", // 新增
    "start":"chcp 65001 &&  nodemon --exec electron ." // 字符集 & watch
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## 启动
```bash
npm start
# or
npm run start
```


## 保存状态
```bash
# 使用方法 https://github.com/BetaHuhn/electron-win-state
npm i electron-win-state -S
```