var read = require('read');

var Game = function () {
	this.rooms = [];
	this.currentRoom = 0;
};

Game.prototype.start = function() {
	console.log(this.rooms[this.currentRoom].description);
	this.getInput();
};

Game.prototype.moveNext = function() {
	if (this.currentRoom === this.rooms.length - 1) {
		console.log('CONGRATULATIONS! You reached the end.');
	} else {
		this.currentRoom++;
		console.log(this.rooms[this.currentRoom].description);
		this.getInput();
	}
};

Game.prototype.checkInput = function(err, input) {
	if (this.rooms[this.currentRoom].allowedMovements.indexOf(input) !== -1 ) {
		this.moveNext();
	}	else {
		console.log(this.rooms[this.currentRoom].errorMessage);
		console.log(this.rooms[this.currentRoom].description);
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
