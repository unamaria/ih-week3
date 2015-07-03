var read = require('read');

var User = function() {
	this.name;
	this.inventory = [];
};

// User.prototype.setName = function(err, input) {
// 	this.name = input;
// 	process.stdin.resume();
// };

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

module.exports = User;