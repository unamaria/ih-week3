
var Quiz = function() {
	this.questions = [];
};

Quiz.prototype.addQuestion = function(question) {
	this.questions.push(question);
};

module.exports = Quiz;