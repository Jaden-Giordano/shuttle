/* eslint-disable no-undef */
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const AssetLoader = require('./asset-loader');
/* eslint-enable */

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('close', () => {
    win = null;
  });
}

app.on('ready', () => {
  console.log('ayyyeyeyeyeyye');
  AssetLoader.loadAssets();

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win == null) {
    createWindow();
  }
});

ipcMain.on('getAssetsDirectory', (event) => {
  event.returnValue = path.join(__dirname, 'assets/');
});
