# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## 创建项目
```bash
npm create vite@latest
cd project-name
npm install
npm run dev
# or
cd project-name && npm i && npm run dev
```

## 安装依赖
```bash
# 安装ts提示依赖
npm install @types/node --save-dev
# 安装路由
npm i vue-router -S
# element-plus
npm install element-plus --save
# pinia

```

实现水印防篡改

为了保护版权，有什么时候我们会在网页上面添加水印。添加水印一般是由后端来做的，不过有些网站需要添加水印的保护知识产权类型很多，比如文字、图片、视频。水印很难不被篡改，因此我们必须给水印修改做一定的篡改防范。由于后端对于不同操作不同类型的水印和防止水印被篡改比较麻烦，这一操作逐渐让前端来实现。

如果你使用ant design开发的话，里面就提供一个水印WaterMark组件。但如果你使用其他UI组件，就需要自己编写水印组件。那么我们应该怎么实现水印防篡改效果？根据我们的需求，需要考虑以下两点：
1、制作水印
2、防止水印被篡改

制作水印
我们可以在一个盒子区域内给重复的背景图，背景图可使用canvas来画。

防止水印被篡改
一般是右键检查元素删除水印，所以我们需要监控用户删除元素，然后重新生成水印div
