var Room = require('./room.js');
var Game = require('./game.js');


var game = new Game();
var room1 = new Room ('You are in room 1. You can go North.', 'Nyanyo', ['N']);
var room2 = new Room ('You are in room 2. You can go East.', 'Nyanyo', ['E']);
game.addRoom(room1);
game.addRoom(room2);

game.start();
