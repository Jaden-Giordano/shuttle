/* eslint-disable */
const fs = require('fs');
const path = require('path');

const assetsFolder = path.join(__dirname, 'assets/');
/* eslint-enable */

var Assets = {};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
}

function loadAssets() {
  console.log('Assets.base.tileRegistry');
  let dirs = [];
  dirs = getDirectories(assetsFolder);

  if (dirs.indexOf('base') == -1) {
    throw 'BASE ASSETS NOT FOUND!';
  }

  for (var i = 0; i < dirs.length; i++) {
    let assetdirs = getDirectories(path.join(assetsFolder, dirs[i] + "/")
    Assets[dirs[i]] = {}
    Assets[dirs[i]].manifest = JSON.parse(fs.readFileSync(path.join(assetsFolder, dirs[i] + '/manifest.json')).toString())
    if(assetdirs.indexOf('maps')){
      
    }
  }

  console.log(Assets.base.tileRegistry);
}

/* eslint-disable */
module.exports = {
  loadAssets: loadAssets
};
