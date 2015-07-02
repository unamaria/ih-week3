
var Room = function(description, errorMessage, allowedMovements) {
	this.description = description;
	this.errorMessage = errorMessage;
	this.allowedMovements = allowedMovements;
};

module.exports = Room;