const {app,BrowserWindow,ipcMain,session}=require('electron'),path=require('path'),fs=require('fs');
ipcMain.handle('save',(e,name,buf)=>{const d=path.join(app.getPath('desktop'),'Aswaq Badr');fs.mkdirSync(d,{recursive:true});fs.writeFileSync(path.join(d,name),Buffer.from(buf));return d});
app.whenReady().then(()=>{
 const w=new BrowserWindow({width:1280,height:800,icon:path.join(__dirname,'icon.png'),autoHideMenuBar:true,webPreferences:{preload:path.join(__dirname,'preload.js')}});
 w.maximize();w.loadFile('app/index.html');
});
app.on('window-all-closed',()=>app.quit());
