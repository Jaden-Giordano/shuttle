class Entity {
  constructor(game, x, y, frame, id) { // eslint-disable-line no-unused-vars
    this.sprite = game.add.sprite(x, y, frame, id);
  }
}

export default Entity;
