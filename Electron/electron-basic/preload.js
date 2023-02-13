/*
 * @Author: Topskys
 * @Date: 2022-11-29 21:23:26
 * @LastEditTime: 2022-11-30 13:57:15
 * 预处理、预加载（中间人）
 * 隔离node，也可以读取系统文件操作
 */


// 解决渲染进程操作系统文件的安全问题：
// 主进程main.js--->预加载preload.js挂载到window--->渲染进程app.js
const { contextBridge, ipcRenderer } = require('electron');
const nativeImage = require('electron').nativeImage


const handleSend = async () => {
    let callback = await ipcRenderer.invoke('send-event', "渲染进程发送msg到主进程")
    console.log("预处理：", callback);
}

const copy = async () => {
    const text = await ipcRenderer.invoke('clipboardWriteAndRead')
    console.log('copy-pre:', text)
    return text
}


const capture = async (resolve, reject) => {
    let sources = await ipcRenderer.invoke('capture-event')
    console.log(sources)
    for (const source of sources) {
        if (source.name === "整个屏幕" || 'Entire Screen') {
            let str = source.thumbnail.crop({
                x: 0,
                y: 30,
                width: 200,
                height: 200
            })
            // resolve(str.toDataURL())
            return str.toDataURL()
        }
    }
}

// 本地图片
const testNativeImage = () => {
    console.log(nativeImage)
    const image = nativeImage.createFromPath('./images/icon@2x.png')
    console.log(image.getSize())
}

contextBridge.exposeInMainWorld('myApi', {
    platform: process.platform,
    handleSend,
    copy,
    capture,
    testNativeImage,

})





