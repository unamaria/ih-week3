var read = require('read');

var Game = function () {
	this.rooms = [];
	this.currentRoom = 0;
};

Game.prototype.checkInput = function(err, input) {
	console.log(input);
	if (this.rooms[this.currentRoom].allowedMovements.indexOf(input) !== -1 ) {
		console.log('movement allowed');
	}	else {
		console.log(this.rooms[0].errorMessage);
		console.log(this.rooms[0].description);
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