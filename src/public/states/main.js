import Tile from '../objects/tiles/tile';

class Main extends Phaser.State {
  create() {
    this.testTile = new Tile(this.game, 0, 0, 0, 'FloorTiles');
  }

  update() {

  }
}

export default Main;
