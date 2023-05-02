<!--
 * @Author: Topskys
 * @Date: 2023-04-07 21:50:45
 * @LastEditTime: 2023-04-07 22:05:22
-->
# 20230407 Mark Manager 

## 项目描述

## 技术选型
Vite + Vue2

## 使用Vite创建Vue2项目
```bash
# vite
npm init vite@laest
# 01 Project name : project1
# 02 Select a framework: vanilla (空模板)
cd project1
npm install
npm run dev
# 03 new File (./src/main.js) , delete ./main.js
# 04 Replace "main.js" with "./src/main.js" (writing the template of Vue2 in the "./src/main.js")
npm install vue@2
npm install vite-plugin-vue2
# new File (./vite.config.js)
```
Creating a configuration file named "./src/main.js" and adding the contents
```js
import Vue from 'vue';
import App from './App.vue';

new Vue({
    el:"#app",
    render:h=>h(App)
}).$mount()
```
Creating a configuration file named vite.config.js and adding the contents
```js
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
    plugins: [ createVuePlugin() ]
}
```
```bash
npm install vue-template-compiler
npm run dev
```