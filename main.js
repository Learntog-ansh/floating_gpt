const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 700,
    alwaysOnTop: true,
    frame: true,
    transparent: false,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL('https://chat.openai.com/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
