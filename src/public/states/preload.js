class Preload extends Phaser.State {
  preload() {
    this.game.load.tilemap('test', 'assets/base/maps/test.json', null, Phaser.Tilemap.TILED_JSON);

    this.game.load.json('tileRegistry', 'assets/base/tile-registry.json');

    this.game.load.image('FloorTilesImage', 'assets/base/tilesets/floor/FloorTiles.png');
  }

  create() {
    this.game.state.start('Main');
  }
}

export default Preload;
