var read = require('read');
var User = require('./user.js');

var Game = function () {
	this.rooms = [];
	this.currentPosition = 0;
	this.currentRoom;
	this.user = new User();
};

Game.prototype.startGame = function () {
	this.getUserName();	
}

Game.prototype.start = function() {
	console.log('*------------ Welcome to Game of Rooms ------------*\n');
	console.log(this.user);
	console.log('Hello, ' + this.user.name + '\n');
	this.currentRoom = this.rooms[0];
	console.log(this.currentRoom.description);
	this.currentRoom.showObjects();
	this.getInput();
};

Game.prototype.getUserName = function () {
	this.user.getName(this.start.bind(this));
}

Game.prototype.moveNext = function() {
	if (this.currentPosition === this.rooms.length - 1) {
		console.log('CONGRATULATIONS!!!');
		console.log('*------------ The End ------------*');
	} else {
		this.currentPosition++;
		this.currentRoom = this.rooms[this.currentPosition];
		console.log(this.currentRoom.description);
		this.currentRoom.showObjects();
		this.getInput();
	}
};

Game.prototype.checkInput = function(err, input) {
	var inputCommands = input.split(" ");
	if (inputCommands[0] == "Pickup") {
		var pickedObject = this.currentRoom.getObject(inputCommands[1]);
		this.user.pickObject(pickedObject);
		this.currentRoom.removeObject(pickedObject);
		console.log(this.currentRoom.description);
		this.getInput();
	} else if (this.currentRoom.correctInput(input)) {
		this.moveNext();
	}	else {
		console.log(this.currentRoom.errorMessage);
		console.log(this.currentRoom.description);
		this.currentRoom.showObjects();
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
