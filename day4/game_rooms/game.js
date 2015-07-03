var read = require('read');

var Game = function () {
	this.rooms = [];
	this.currentPosition = 0;
	this.currentRoom;
};

Game.prototype.start = function() {
	this.currentRoom = this.rooms[0];
	console.log('*------------ Welcome to Game of Rooms ------------*');
	console.log(this.currentRoom.description);
	this.getInput();
};

Game.prototype.moveNext = function() {
	if (this.currentPosition === this.rooms.length - 1) {
		console.log('CONGRATULATIONS!!!');
		console.log('*------------ The End ------------*');
	} else {
		this.currentPosition++;
		this.currentRoom = this.rooms[this.currentPosition];
		console.log(this.currentRoom.description);
		this.getInput();
	}
};

Game.prototype.checkInput = function(err, input) {
	if (this.currentRoom.correctInput(input)) {
		this.moveNext();
	}	else {
		console.log(this.currentRoom.errorMessage);
		console.log(this.currentRoom.description);
		this.getInput();
	}
};

Game.prototype.getInput = function() {
	var options = {
		prompt: 'Choose direction > \n'
	};

	read(options, this.checkInput.bind(this));
};

Game.prototype.addRoom = function (room) {
	this.rooms.push(room);
};

module.exports = Game;
