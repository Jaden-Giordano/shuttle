import Constants from './constants';

const assetsFolder = Constants.ASSETS_PATH;

var Assets = {};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isFile());
}

function loadAssets() {
  let dirs = [];
  dirs = getDirectories(assetsFolder);

  if (dirs.indexOf('base') == -1) {
    throw 'BASE ASSETS NOT FOUND!';
  }

  var mods = walkFoldersOfPath(assetsFolder);

  console.log(JSON.stringify(mods, null, 4));

  for (var i = 0; i < dirs.length; i++) {
    Assets[dirs[i]] = {};
    Assets[dirs[i]].manifest = JSON.parse(fs.readFileSync(path.join(assetsFolder, dirs[i] + '/manifest.json')).toString());
  }

  //console.log(Assets.base.manifest);
}

function walkFoldersOfPath(folder){
  let splitpaths = folder.replace(assetsFolder, '').replace(/\\/g, '/').split('/');
  let assetFilter = ''; // eslint-disable-line no-unused-vars
  if(splitpaths.length > 2){
    switch(splitpaths[1]){
    case 'maps':
      assetFilter = splitpaths[1];
      break;
    case 'objects':
      assetFilter = splitpaths[1];
      break;
    case 'sprites':
      assetFilter = splitpaths[1];
      break;
    case 'sounds':
      assetFilter = splitpaths[1];
      break;
    }
  }
  let assetObject = {};
  let dirs = getDirectories(folder);
  let files = getFiles(folder);
  for(let i = 0; i < dirs.length; i++){
    assetObject[dirs[i]] = Object();
    assetObject[dirs[i]] = walkFoldersOfPath(path.join(folder, dirs[i] + '/'));
  }
  for(let i = 0; i < files.length; i++){
    assetObject[files[i]] = folder.replace(assetsFolder, '').replace(/\//g, '.') + files[i];
  }
  return assetObject;
}

export default {
  loadAssets: loadAssets
};
