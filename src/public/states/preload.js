class Preload extends Phaser.State {
  preload() {
    this.game.load.spritesheet('FloorTiles', 'assets/FloorTiles.png', 16, 16);
  }

  create() {
    this.game.state.start('Main');
  }
}

export default Preload;
