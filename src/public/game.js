import Boot from './states/boot';
import Preload from './states/preload';
import Main from './states/main';

class Game extends Phaser.Game {
  constructor() {
    super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

    this.state.add('Boot', Boot, false);
    this.state.add('Preload', Preload, false);
    this.state.add('Main', Main, false);

    this.state.start('Boot');
  }
}

export default Game;
