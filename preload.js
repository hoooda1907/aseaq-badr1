const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('bridge',{save:(n,b)=>ipcRenderer.invoke('save',n,b)});
