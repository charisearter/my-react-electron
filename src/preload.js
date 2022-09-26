const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
	sayHello: arg => ipcRenderer.invoke('say-hello', arg),
});
