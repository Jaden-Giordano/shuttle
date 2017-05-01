import Main from './states/main.js';

class Game extends Phaser.Game {
  constructor() {
    super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

    this.state.add('Main', Main, false);
  }
}

export default Game;
