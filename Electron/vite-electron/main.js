/*
 * @Author: Topskys
 * @Date: 2022-12-01 17:25:12
 * @LastEditTime: 2022-12-10 17:17:51
 */
const { app, BrowserWindow } = require('electron');
const WinState = require('electron-win-state').default;
const path = require('path');
// 获取url截图
require('./controller/getSource');
// 消息弹窗
require('./controller/alert');
// openWindow
require('./controller/openWindow');



const createWindow = () => {

    const winState = new WinState({
        defaultWidth: 1000,
        defaultHeight: 800,
        electronStoreOptions: {
            name: 'window-state-main',
        }
    });

    const win = new BrowserWindow({
        ...winState.winOptions,
        webPreferences: {
            preload: path.resolve(__dirname, './preload.js'),
            // enableRemoteModule: true,
        },
        show: false,
    });

    win.loadURL("http://127.0.0.1:5173");

    win.webContents.openDevTools();

    winState.manage(win);

    win.on('ready-to-show', () => {
        win.show();
    });


    // 获取网站的截图
    // getSource();
}



app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})



app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') app.quit();
});