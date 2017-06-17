/* eslint-disable no-undef */
window.PIXI = require('phaser/build/custom/pixi');
window.p2 = require('phaser/build/custom/p2');
window.Phaser = require('phaser/build/custom/phaser-split');
const {ipcRenderer} = window.require('electron');
window.ipcRenderer = ipcRenderer;
