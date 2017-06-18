class Entity {
  constructor(game, x, y, frame, id) {
    this.sprite = game.add.sprite(x, y, frame, id);
  }
}

export default Entity;
