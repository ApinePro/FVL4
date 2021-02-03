// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var ipcRenderer = require('electron').ipcRenderer;

  // 监听主进程返回的消息
  ipcRenderer.on('asynchronous-reply', function (event, arg) {
    alert(arg);
    console.log(arg);
});

  document.getElementById('blogin').onclick = function () {
    var username = document.getElementById('username').value;
    var psw = document.getElementById('psw').value;
    // 使用 ipcRenderer.send 向主进程发送消息。
    ipcRenderer.send('asynchronous-message', username, psw);
  }


