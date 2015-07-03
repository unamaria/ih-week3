
var Room = function(description, errorMessage, allowedMovements) {
	this.description = description;
	this.errorMessage = errorMessage;
	this.allowedMovements = allowedMovements;
	this.objectsAvailable = [];
};

Room.prototype.correctInput = function(input) {
	return this.allowedMovements.indexOf(input) !== -1;
};

Room.prototype.getObject = function (objName) {
	return this.objectsAvailable.filter( function (obj) {
			return obj.name = objName;
		})[0];
}

Room.prototype.showObjects = function() {
	this.objectsAvailable.forEach (function(object) {
		console.log('You can see a ' + object.name);
	});
};

Room.prototype.addObject = function(object) {
	this.objectsAvailable.push(object);
};

Room.prototype.removeObject = function(object) {
	for (var i = this.objectsAvailable.length - 1; i >= 0; i--) {
		if (this.objectsAvailable[i].name === object.name) {
			this.objectsAvailable.splice(i, 1);			// FILTER
		}
	};
};

module.exports = Room;
