/*
 * @Author: Topskys
 * @Date: 2022-11-29 20:25:16
 * @LastEditTime: 2022-11-30 13:54:36
 * 渲染进程模块
 * 开放 集成和隔离 node 渲染线程app.js将可以操作系统文件，
 * 渲染线程，不能直接访问系统文件和操作，存在安全问题，需要在预处理（预加载）中完成
 */
// 不能
// const fs = require('fs');
// const { join } = require('path');

// fs.writeFile(join(__dirname, '/example.txt'), `example ${new Date}`, () => {
//     console.log('done .')
// });

// console.log(window.myApi.platform);


// 渲染进程--->预处理handleSend(msg) --->主进程return msg---> 渲染进程
document.querySelector('#btn').addEventListener('click', () => {
    window.myApi.handleSend()
})


document.querySelector('#btn2').addEventListener('click', async () => {
    await myApi.copy()
})


document.querySelector('#btn3').addEventListener('click', async () => {
    let res = await myApi.capture()
    document.querySelector('#img').src = res // base64
})


document.querySelector('#btn4').addEventListener('click', async () => {
    myApi.testNativeImage()
})