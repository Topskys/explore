/*
 * @Author: Topskys
 * @Date: 2022-12-01 17:33:43
 * @LastEditTime: 2022-12-10 16:57:09
 */
const { ipcRenderer, contextBridge } = require('electron');



const sendUrl = async (url) => {
    let res = await ipcRenderer.invoke('on-url-event', url)
    return res
}

const alert = (msg) => {
    ipcRenderer.invoke('on-alert-event', msg)
}


const open = (url) => {
    ipcRenderer.invoke('on-open-event', url);
}



contextBridge.exposeInMainWorld("myApi", {
    sendUrl,
    alert,
    open,
})