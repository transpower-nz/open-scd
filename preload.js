const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onFileOpen: (callback) => {
    ipcRenderer.on("file-opened", (_event, fileName, path) =>
      callback(fileName, path)
    );
  },
  openFile: () => {
    ipcRenderer.invoke("dialog:openFile");
  },
  readFile: (filePath) => ipcRenderer.invoke("read-file", filePath),
});
