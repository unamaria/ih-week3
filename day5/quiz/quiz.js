var read = require('read');
var User = require('./user.js');

var Quiz = function() {
	this.questions = [];
	this.currentQuestionIndex = 0;
	this.currentQuestion;
	this.user = new User();
};

Quiz.prototype.begin = function() {
	this.getUserName();	
}

Quiz.prototype.getUserName = function() {
	this.user.getName(this.firstQuestion.bind(this));
}

Quiz.prototype.addQuestion = function(question) {
	this.questions.push(question);
};

Quiz.prototype.firstQuestion = function() {
	console.log('Hi ' + this.user.name + '!');
	console.log('Let\'s check how good are you with capitals');
	this.currentQuestion = this.questions[0];
	this.getInput();
};

Quiz.prototype.nextQuestion = function() {
	if (this.currentQuestionIndex + 1 == this.questions.length) {
		console.log('You earned a total of ' + this.user.totalPoints + ' points');
		if (this.user.totalPoints > 0) {
			console.log('Well done!');
		} else {
			console.log('Ehem. Keep playing!')
		}
	} else {	
		this.currentQuestionIndex++;
		this.currentQuestion = this.questions[this.currentQuestionIndex];
		this.getInput();
	}
};

Quiz.prototype.checkInput = function(err, input) {
	if (this.currentQuestion.correctAnswer(input)) {
		console.log('You are good!');
		this.user.totalPoints += this.currentQuestion.points;
		this.nextQuestion();
	} else {
		console.log('Really?');
		this.user.totalPoints -= this.currentQuestion.points;
		this.getInput();
	}
};

Quiz.prototype.getInput = function() {
	console.log('You have ' + this.user.totalPoints + ' points');
	options = {
		prompt: this.currentQuestion.print()
	};
	read(options, this.checkInput.bind(this));
};

module.exports = Quiz;