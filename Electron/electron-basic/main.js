/*
 * @Author: Topskys
 * @Date: 2022-11-29 20:06:50
 * @LastEditTime: 2022-11-30 13:27:10
 * 主进程
 * clipboard:在主进程能用
 */
const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu, Tray, clipboard, desktopCapturer } = require('electron');
const path = require('path');
const WinState = require('electron-win-state').default;
const mainMenu = require('./mainMenu')
const createTray = require('./tray')




let contextMenu = Menu.buildFromTemplate([
    { label: 'item 1' },
    { role: 'editMenu' },
])



function createWindow() {


    const winState = new WinState({
        defaultWidth: 800,
        defaultHeight: 600,
        // other winState options, see below
    })

    const win = new BrowserWindow({
        ...winState.winOptions,
        // width: 500,
        // height: 400,
        // width: 300,
        // height: 200,
        // x:0,
        // y:0,
        show: false,
        // frame: false, // 无边框窗口
        // backgroundColor:'#ffffff',
        // titleBarStyle:'hidden', // - o x
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // path.resolve(__dirname, 'preload.js')
            // 开放 集成和隔离 node 渲染线程app.js将可以操作系统文件 不可取
            // nodeIntegration: true, // 集成node
            // contextIsolation: false, // 隔离node
        }
    });

    // win.loadURL(`http://`); // 线上
    win.loadFile(`index.html`);// 本地
    // 打开开发者工具
    // win.webContents.openDevTools();
    const wc = win.webContents
    // wc.openDevTools();
    wc.on('did-finish-load', () => {
        console.log('finished 检测web资源加载完毕')
    })
    wc.on('dom-ready', () => {
        console.log('dom-ready')
    })
    wc.on('new-window', (e, url) => {
        e.preventDefault()
        console.log('new-window')
    })
    wc.on('context-menu', (e, params) => {
        e.preventDefault()
        console.log('click key of right')
        // wc.executeJavaScript(`alert('${params.selectionText}')`)

        // dialog.showOpenDialog(win, {
        //     buttonLabel: "选择",
        //     defaultPath: app.getPath('desktop'), // 查看路径
        //     properties: ['multiSelections','createDirectory', 'openFile', 'openDirectory'],// 默认功能
        // }).then(result => {
        //     console.log(result.canceled)
        //     console.log(result.filePaths)
        // }).catch(err => {
        //     console.log(err)
        // })


        // const answers = ['Yes', "No", "Maybe"]
        // dialog.showMessageBox({
        //     title: "Message Box",
        //     message: "Please select an option",
        //     detail: "Please select an detail",
        //     buttons: answers,
        // }).then(({ response }) => {
        //     console.log(`User selected: ${answers[response]}`)
        // })

        // 右键菜单
        contextMenu.popup()
    })
    // 暂时关闭安全警告 方法1
    // process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

    // win.loadURL(`http://`) 加载完成才出现窗口，否则先出现白屏
    win.on('ready-to-show', () => {
        win.show();
    })


    // 可实例化多个窗口
    // const win2 = new BrowserWindow({
    //     // width: 500,
    //     // height: 400,
    //     width: 300,
    //     height: 200,
    //     parent: win, // 关联窗口
    //     // modal:true, // 模态，子窗口固定父窗口中心
    // });


    // 状态
    winState.manage(win);


    // 快捷键
    globalShortcut.register('CommandOrControl+Y', () => {
        console.log('key of CommandOrControl+Y')
        globalShortcut.unregister(`CommandOrControl+Y`)
    })

    // 主菜单
    Menu.setApplicationMenu(mainMenu('我的窗口消息', (args) => {
        console.log("主进程", args)
    }));

    // 托盘
    // createTray(app, win)

    // 抓取屏幕
    ipcMain.handle('capture-event', async (e, args) => {
        return desktopCapturer.getSources({
            types: ['window', 'screen']
        }).then((sources) => {
            return sources
        })
    })
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    // console.log(app.getPath('desktop'))
    // console.log(app.getPath('music'))
    // console.log(app.getPath('temp'))
    // console.log(app.getPath('userData'))

})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


// 渲染进程与主进程通信
ipcMain.handle('send-event', async (event, msg) => {
    // const result = await somePromise(...args)
    // return result
    console.log("主进程：", msg)
    return msg
})


ipcMain.handle('clipboardWriteAndRead', async (event, ...args) => {
    clipboard.writeText('hello i am a bit of text2!')
    const text = clipboard.readText()
    console.log('text main:', text)
    return text
})


app.on('before-quit', (e) => {
    e.preventDefault()
})

app.on('browser-window-blur', () => {
    console.log('browser-window-blur')
    setTimeout(() => {
        app.quit()
    }, 3000)
})

app.on('browser-window-focus', () => {
    console.log('browser-window-focus')
})