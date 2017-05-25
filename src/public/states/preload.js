class Preload extends Phaser.State {
  preload() {
    this.game.load.tilemap('testRaw', 'assets/maps/test.json', null, Phaser.Tilemap.TILED_JSON);
    let parsedMap = Phaser.TilemapParser.parse(this.game, 'testRaw');

    this.game.load.image('FloorTilesImage', 'assets/base/tilesets/FloorTiles.png');
  }

  create() {
    this.game.state.start('Main');
  }
}

export default Preload;
