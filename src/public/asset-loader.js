import Constants from './constants';

const assetsFolder = Constants.ASSETS_PATH;


var Assets = {};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isFile());
}

function loadMods() {
  let dirs = [];
  dirs = getDirectories(assetsFolder);

  if (dirs.indexOf('base') == -1) {
    throw 'BASE ASSETS NOT FOUND!';
  }

  var mods = walkFoldersOfPath(assetsFolder);

  console.log(JSON.stringify(mods, null, 4));

  for (var i = 0; i < dirs.length; i++) {
    let assetdirs = getDirectories(path.join(assetsFolder, dirs[i] + '/'));
    Assets[dirs[i]] = {};
    Assets[dirs[i]].manifest = JSON.parse(fs.readFileSync(path.join(assetsFolder, dirs[i] + '/manifest.json')).toString());
  }

  //console.log(Assets.base.manifest);
}

function walkFoldersOfPath(folder){
  let splitpaths = folder.replace(assetsFolder, '').replace(/\\/g, '/').split('/');
  let assetfilter = '';
  if(splitpaths.length > 2){
    switch(splitpaths[1]){
      case 'maps':
          assetfilter = splitpaths[1];
        break;
      case 'objects':
          assetfilter = splitpaths[1];
        break;
      case 'sprites':
          assetfilter = splitpaths[1];
        break;
      case 'sounds':
          assetfilter = splitpaths[1];
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
  loadMods: loadMods
};
