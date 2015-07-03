
var Question = function(text, answer) {
	this.createId();
	this.text = text;
	this.answer = answer;
};

Question.prototype.lastId = 0;

Question.prototype.createId = function () {
	this.id = Question.prototype.lastId;
	Question.prototype.lastId += 1;
};

Question.prototype.print = function() {
	console.log(this.text);
};

Question.prototype.correctAnswer = function(input) {
	return input.toUpperCase() === this.answer.toUpperCase();
};

module.exports = Question;