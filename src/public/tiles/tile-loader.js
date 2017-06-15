/* eslint-disable */
var tileRegistry;

function loadTileRegistry(game) {
  tileRegistry = game.cache.getJSON('tileRegistry');
}

function setupTile(tile) {

}

export default {
  setup: setupTile,
  loadTileRegistry: loadTileRegistry
};
