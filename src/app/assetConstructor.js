/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

Assets = {};
/* eslint-enable */

function constructAssets(){
  console.log("Assets.base.tileRegistry");
  dirs = []
  dirs = getDirectories(path.join(__dirname, 'assets/'));

  if(dirs.indexOf('base') == -1){
    throw "BASE ASSETS NOT FOUND!"
    return 1;
  }

  for(i = 0; i < dirs.length; i++){
    Assets[dirs[i]] = {
      tileRegistry: JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/' + dirs[i] + '/tile-registry.json')).toString())
    }
  }

  console.log("Assets.base.tileRegistry");
}

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory());
}

module.exports = {
  constructAssets: constructAssets
}
