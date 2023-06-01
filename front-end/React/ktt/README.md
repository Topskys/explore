# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# 快团团ktt

## create
```bash
 create-react-app ktt --template typescript
```

## dev
```bash
npm i redux react-redux redux-thunk redux-logger -S
npm i react-router-dom axios nprogress normalize.css antd -S
npm i sass sass-loader -D
```

## init
在项目src/新建api、router、store、utils、views等文件夹。

## 创建远程仓库
初始化gitee仓库，新建gitee仓库，在本地ktt文件夹:
```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://gitee.com/ktt/ktt.git
git push -u origin master # 自动创建master分支或手动 git push -u origin "master"
```
## 目录
07 定义auth-api
08 定义permission
09 定义redux框架
10 定义异步action
11 使用登录api
12 实现登录后跳转
13 页面权限包裹
14 处理菜单与路由
15 获取菜单数据
16 编写adminView
17 01动态菜单
18 02格式化动态菜单
19 加载中组件




## 配置基础路由


## 使用Antd Design
在index/App.tsx中导入antd样式

## 封装axios

## git切换代码版本
```bash
# 查看提交日志
git reflog
# 切换代码版本
git reset --hard 版本号
```