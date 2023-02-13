/*
 * @Author: Topskys
 * @Date: 2022-12-02 22:45:03
 * @LastEditTime: 2022-12-02 23:08:53
 */
const { dialog, ipcMain } = require('electron');

ipcMain.handle('on-alert-event', (e, msg) => {
    dialog.showMessageBox({
        type: 'error',
        title:'提示',
        message: msg
    });
})
const alert = () => {

};