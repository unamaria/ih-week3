var Question = require('./question.js');
var Quiz = require('./quiz.js');

quiz = new Quiz();
question1 = new Question('Are you up to this?', 'Y');
quiz.addQuestion(question1);

quiz.begin();