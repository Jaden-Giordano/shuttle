/* eslint-disable */
var tileRegistry;

function loadTileRegistry(game) {
  tileRegistry = game.cache.getJSON('tileRegistry');
}

function setupTile(tile) {


  //tile.attributes =
  //console.log(tileRegistry);
  //console.log(tile.index);
}

export default {
  setup: setupTile,
  loadTileRegistry: loadTileRegistry
};
