var read = require('read');
var User = require('./user.js');

var Game = function() {
	this.rooms = [];
	this.currentPosition = 0;
	this.currentRoom;
	this.user = new User();
};

Game.prototype.on = function() {
	this.getUserName();	
}

Game.prototype.help = function() {
	console.log('Want to move? -> N (north), S (south), E (East), W (West)');
	console.log('Want to pick up object? -> Pick up <object>');
	console.log('Want to check your inventory? -> Inventory');
	console.log('Want to see these intructions again? -> Help \n');
};

Game.prototype.start = function() {
	console.log('*------------ Welcome to Game of Rooms ------------*\n');
	console.log('Hello, ' + this.user.name + '\n');
	this.help();
	this.currentRoom = this.rooms[0];
	console.log(this.currentRoom.description);
	this.currentRoom.showObjects();
	this.getInput();
};

Game.prototype.getUserName = function() {
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
	var inputCommands = input.split(' ');
	if (inputCommands[0] === 'Pick') {
		var pickedObject = this.currentRoom.getObject(inputCommands[2]);
		this.user.pickObject(pickedObject);
		this.currentRoom.removeObject(pickedObject);
		console.log(this.currentRoom.description);
		this.getInput();
	} else if (inputCommands[0] === 'Inventory') {
		this.user.showInventory();
		console.log(this.currentRoom.description);
		this.getInput();
	} else if (this.currentRoom.correctMove(input)) {
		this.moveNext();
	} else if (inputCommands[0] === 'HELP') {
		this.help();
		console.log(this.currentRoom.description);
		this.getInput();
	}	else {
		console.log(this.currentRoom.errorMessage);
		console.log(this.currentRoom.description);
		this.currentRoom.showObjects();
		this.getInput();
	}
};

Game.prototype.getInput = function() {
	var options = {
		prompt: '> \n'
	};

	read(options, this.checkInput.bind(this));
};

Game.prototype.addRoom = function(room) {
	this.rooms.push(room);
};

module.exports = Game;
