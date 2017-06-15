class Preload extends Phaser.State {
  preload() {
    this.game.load.tilemap('test', 'assets/maps/test.json', null, Phaser.Tilemap.TILED_JSON);

    this.game.load.image('FloorTilesImage', 'assets/base/tilesets/floor/FloorTiles.png');
  }

  create() {
    this.game.state.start('Main');
  }
}

export default Preload;
