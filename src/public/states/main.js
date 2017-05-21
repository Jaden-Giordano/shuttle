import Tile from '../objects/tiles/tile';
import TileLoader from '../loaders/tile-loader';

class Main extends Phaser.State {
  create() {
    let map = this.game.cache.getJSON('map');
    let tiles = TileLoader.loadTiles(this.game, map.tiles, 0, 0, map.width, map.height, 'FloorTiles');
    console.log(tiles);
  }

  update() {

  }
}

export default Main;
