var read = require('read');

var User = function() {
	this.name;
	this.inventory = [];
};

User.prototype.getName = function(callback) {
	var options = {
		prompt: 'What\'s your name?\n'
	};
	var user = this;
	read(options, function (err, input) {
		user.name = input;
		callback();
	});
};

User.prototype.pickObject = function(object) {
	this.inventory.push(object);
	console.log('You picked up a ' + object.name);
};

User.prototype.showInventory = function() {
	if (this.inventory.length > 0) {
		console.log('You have: \n');
		this.inventory.forEach (function(object) {  
			console.log('- ' + object.name);
		});
	} else {
		console.log('No objects yet!');
	}
};

module.exports = User;