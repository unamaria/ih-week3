var Room = require('./room.js');
var Game = require('./game.js');


var room1 = new Room ('You are in room 1. You can go North.', 'Nyanyo', ['N']);
var game = new Game();
game.addRoom(room1);

game.getInput();

