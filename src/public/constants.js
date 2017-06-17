var assetsDirectory = null;

function getAssetsDirectory() {
  if (assetsDirectory === null) {
    assetsDirectory = ipcRenderer.sendSync('getAssetsDirectory');
  }
  return assetsDirectory;
}

export default {
  TILE_SCALE: 3,
  TILE_SIZE: 32,
  getAssetsDirectory: getAssetsDirectory
};
