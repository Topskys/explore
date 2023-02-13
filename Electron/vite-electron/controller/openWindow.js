/*
 * @Author: Topskys
 * @Date: 2022-12-10 16:54:34
 * @LastEditTime: 2022-12-10 17:43:44
 */
const { ipcMain, BrowserWindow } = require('electron');
const WinState = require('electron-win-state').default;

const cssText=`width: 100px;height: 40px;background-color: #335eea;border-radius:4px;text-align: center;line-height:40px;`

const jsText=`
    const div=document.createElement('div')
    div.id='btn1'
    div.innerHTML='关闭窗口'
    document.body.appendChild(div)
    document.querySelector('#btn1').style.cssText='${cssText}'
`

ipcMain.handle('on-open-event', (e, url) => {

    const winState = new WinState({
        defaultWidth: 1000,
        defaultHeight: 800,
        electronStoreOptions:{
            name:'window-state-open',
        }
    });

    const win = new BrowserWindow({
        ...winState.winOptions,
        show: false,
    });

    win.on('ready-to-show', () => {
        win.show();
    })

    win.loadURL(url);
    
    winState.manage(win);

    win.webContents.executeJavaScript(jsText).catch(() => {});
})