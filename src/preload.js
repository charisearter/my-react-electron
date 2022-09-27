// Preload has access to NodeJS and DOM
// more secure than using nodeIntegration
const { ipcRenderer, contextBridge } = require('electron');

// function and values go here
// anything inside API will allow renderer process to access
const API = {
	sayHello: arg => ipcRenderer.invoke('say-hello', arg),
	sendMsg: msg => ipcRenderer.send('message', msg),
	onCount: callback =>
		ipcRenderer.on('count', (event, args) => {
			callback(args);
		}),
};

// to access this from renderer process ... window.api.function
// api because called 'api' in contextBridge
contextBridge.exposeInMainWorld('api', API);
