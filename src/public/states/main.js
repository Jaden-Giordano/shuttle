import Tile from '../objects/tiles/tile';

class Main extends Phaser.State {
  create() {
    this.testTile = new Tile(this.game, 0, 0, 'FloorTiles', 0);
    this.testTile2 = new Tile(this.game, 16, 0, 'FloorTiles', 1);
  }

  update() {

  }
}

export default Main;
