var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, ipcMain = _a.ipcMain;
var path = require('path');
var isDev = require('electron-is-dev');
var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: { nodeIntegration: true }
    });
    mainWindow.loadURL(isDev
        ? 'http://localhost:3000'
        : "file://" + path.join(__dirname, '../build/index.html'));
    mainWindow.on('closed', function () { return (mainWindow = null); });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
ipcMain.on('show-more-info', function (event, info) {
    var infoWindow = new BrowserWindow({
        width: 900,
        height: 500,
        // parent: mainWindow,
        // show: false,
        webPreferences: { nodeIntegration: true }
    });
    infoWindow.loadURL(isDev
        ? 'http://localhost:3000/info'
        : "file://" + path.join(__dirname, '../build/index.html'));
    infoWindow.webContents.on('did-frame-finish-load', function () {
        infoWindow.webContents.send('faq-detail', info);
    });
});
//# sourceMappingURL=electron.js.map