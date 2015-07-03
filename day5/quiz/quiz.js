var read = require('read');

var Quiz = function() {
	this.questions = [];
	this.currentQuestionIndex = 0;
	this.currentQuestion;
};

Quiz.prototype.addQuestion = function(question) {
	this.questions.push(question);
};

Quiz.prototype.begin = function() {
	this.currentQuestion = this.questions[0];
	this.getInput();
};

Quiz.prototype.nextQuestion = function() {
	if (this.currentQuestionIndex + 1 == this.questions.length) {
		console.log('Well done!');
	} else {	
		this.currentQuestionIndex++;
		this.currentQuestion = this.questions[this.currentQuestionIndex];
		this.getInput();
	}
};

Quiz.prototype.checkInput = function(err, input) {
	if (this.currentQuestion.correctAnswer(input)) {
		console.log('You are good!');
		this.nextQuestion();
	} else {
		console.log('Really?');
		this.getInput();
	}
};

Quiz.prototype.getInput = function() {
	options = {
		prompt: this.currentQuestion.print()
	};
	read(options, this.checkInput.bind(this));
};

module.exports = Quiz;