import Constants from '../constants';

class Main extends Phaser.State {
  create() {
    let map = this.game.add.tilemap('test');
    map.addTilesetImage('FloorTiles', 'FloorTilesImage');
    let layer = map.createLayer('Tile Layer 1');
    layer.scale = new Phaser.Point(Constants.TILE_SCALE, Constants.TILE_SCALE);
  }

  update() {

  }
}

export default Main;
