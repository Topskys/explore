/*
 * @Author: Topskys
 * @Date: 2022-11-30 11:02:52
 * @LastEditTime: 2022-11-30 12:32:40
 * 托盘，任务栏右侧
 */
const { Tray, Menu, app, } = require('electron')

function createTray(app, win) {
    const tray = new Tray('./images/icon.png');

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' }
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
    tray.on('click', (e) => {
        if (e.shiftKey) { // shift + click
            console.log(e, e.shiftKey, app)
            app.quit()
        } else {
            win.isVisible() ? win.hide() : win.show()
        }
    })
}


module.exports = createTray

