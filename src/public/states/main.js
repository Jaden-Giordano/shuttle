import Constants from '../constants';
import TileLoader from '../tiles/tile-loader';

class Main extends Phaser.State {
  create() {
    let map = this.game.add.tilemap('test');
    map.addTilesetImage('FloorTiles', 'FloorTilesImage');
    let layer = map.createLayer('Tile Layer 1');
    layer.scale = new Phaser.Point(Constants.TILE_SCALE, Constants.TILE_SCALE);

    map.forEach(function(tile) {
      TileLoader.setup(tile);
    });
  }

  update() {

  }
}

export default Main;
