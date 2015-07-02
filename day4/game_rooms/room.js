var read = require('read');

var Room = function(description, errorMessage, allowedMovements) {
	this.description = description;
	this.errorMessage = errorMessage;
	this.allowedMovements = allowedMovements;
};

Room.prototype.checkInput = function(err, input) {
	if (this.allowedMovements.indexOf(input) !== -1 ) {
		console.log('movement allowed');
	}	else {
		console.log(this.errorMessage);
		console.log(this.description);
	}
};

Room.prototype.getInput = function() {
	var options = {
		prompt: 'Choose direction > \n'
	};

	read(options, this.checkInput.bind(this));
};


module.exports = Room;