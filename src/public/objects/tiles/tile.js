import Constants from '../../constants';

class Tile {
  constructor(game, x, y, frame, id) {
    this.id = id;

    this.sprite = game.add.sprite(x, y, frame, id);

    this.sprite.scale = new Phaser.Point(Constants.TILE_SCALE, Constants.TILE_SCALE);

    this.sprite.smoothed = false;
  }
}

export default Tile;
