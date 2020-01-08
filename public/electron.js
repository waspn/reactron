const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { nodeIntegration: true }
  })
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  mainWindow.on('closed', () => (mainWindow = null))
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('show-more-info', (event, info) => {
  const infoWindow = new BrowserWindow({
    width: 900,
    height: 500,
    // parent: mainWindow,
    // show: false,
    webPreferences: { nodeIntegration: true }
  })
  infoWindow.loadURL(
    isDev
      ? 'http://localhost:3000/info'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  infoWindow.webContents.on('did-frame-finish-load', () => {
    infoWindow.webContents.send('faq-detail', info)
  })
})
