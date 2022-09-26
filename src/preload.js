const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
	sayHello: arg => ipcRenderer.invoke('say-hello', arg),
	setTitle: title => ipcRenderer.send('set-title', title),
});
