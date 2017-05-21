import Tile from '../objects/tiles/tile';

function loadTiles(game, tileArray, xOffset, yOffset, width, height, layer) {
  let tiles = [];
  let row = -1;
  tileArray.forEach((tileID, index) => {
    let x = index % width;
    if (x == 0) {
      row++;
    }
    let y = row;
    tiles.push(new Tile(game, x + xOffset, y + yOffset, layer, tileID));
  });
  return tiles;
}

export default {
  loadTiles: loadTiles
};
