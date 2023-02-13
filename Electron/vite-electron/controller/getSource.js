/*
 * @Author: Topskys
 * @Date: 2022-12-02 16:52:57
 * @LastEditTime: 2022-12-03 09:57:04
 */

const { ipcMain, BrowserWindow } = require("electron");



//  获取url地址网页截图
const getSource = (url) => {
    return new Promise((resolve, reject) => {
        // 后台运行，不显示该窗口
        const win = new BrowserWindow({
            width: 500,
            height: 500,
            show: false,
            webPreferences: {
                offscreen: true,
            },
        })
        win.loadURL(url);
        win.webContents.on('did-finish-load', async () => {
            // 抓取url的title
            const title = win.getTitle();
            try {
                // nativeImage
                const image = await win.webContents.capturePage();
                if (image.isEmpty()) {
                    resolve({
                        msg: "无法访问该站点"
                    });
                } else {
                    // base64
                    const screenshot = image.toDataURL();
                    resolve({ title, screenshot, url });
                }
            } catch (e) {
                reject(e);
            }
        });
    });
}


ipcMain.handle("on-url-event", async (e, url) => {
    const res = await getSource(url);
    return res;
})



// 已经在ipcMain运行和在main.js导入
// module.exports = getSource