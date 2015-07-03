
var Room = function(description, errorMessage, allowedMovements) {
	this.description = description;
	this.errorMessage = errorMessage;
	this.allowedMovements = allowedMovements;
};

Room.prototype.correctInput = function(input) {
	if (this.allowedMovements.indexOf(input) !== -1) {
		return true;
	} else {
		return false;
	}
};

module.exports = Room;
