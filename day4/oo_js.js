var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	this.numberWheels = 4;
};

Car.prototype.makeNoise = function() {
	console.log(this.noise);
};

var impala = new Car('impala', 'bruum');

impala.makeNoise();
