const { contextBridge, ipcRenderer, ipcMain } = require("electron");

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
  onZoom: (callback) => {
    window.addEventListener("message", (event) => {
      if (event.data && event.data.type === "zoom") {
        callback(event.data.direction);
      }
    });
  },

  zoom: (direction) => {
    return ipcRenderer.invoke("zoom", direction);
  },
});
