class Preload extends Phaser.State {
  preload() {

  }

  create() {
    this.game.state.start('Main');
  }
}

export default Preload;
