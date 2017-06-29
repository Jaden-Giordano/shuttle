/* eslint-disable no-undef */
window.PIXI = require('phaser/build/custom/pixi');
window.p2 = require('phaser/build/custom/p2');
window.Phaser = require('phaser/build/custom/phaser-split');
window.fs = window.require('fs');
window.path = require('path');
const {ipcRenderer} = window.require('electron');
window.ipcRenderer = ipcRenderer;
