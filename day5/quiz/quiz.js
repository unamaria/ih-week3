var read = require('read');

var Quiz = function() {
	this.questions = [];
	this.currentQuestion;
};

Quiz.prototype.addQuestion = function(question) {
	this.questions.push(question);
};

Quiz.prototype.begin = function() {
	this.currentQuestion = this.questions[0];
	this.getInput();
};

Quiz.prototype.checkInput = function(err, input) {
	if (this.currentQuestion.correctAnswer(input)) {
		console.log('correct');
	} else {
		console.error('incorrect');
	}
};

Quiz.prototype.getInput = function() {
	options = {
		prompt: this.currentQuestion.print()
	};
	read(options, this.checkInput.bind(this));
};

module.exports = Quiz;