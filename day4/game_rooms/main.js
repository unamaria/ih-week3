var Room = require('./room.js')

var Game = function () {
	this.rooms = [];
	this.currentRoom = 0;
};

Game.prototype.addRoom = function (room) {
	this.rooms.push(room);
};

var room1 = new Room ('You are in room 1. You can go North.', 'Nyanyo', ['N']);
game = new Game();
game.addRoom(room1);

room1.getInput();

