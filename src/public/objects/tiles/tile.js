class Tile {
  constructor(game, id, x, y, frame) {
    this.id = id;

    this.sprite = game.add.sprite(x, y, frame, id);
  }
}

export default Tile;
