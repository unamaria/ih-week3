var Question = require('./question.js');
var Quiz = require('./quiz.js');

quiz = new Quiz();
question1 = new Question('Capital of Italy?', 'Rome');
quiz.addQuestion(question1);
question2 = new Question('Capital of Slovenia?', 'Ljubljana');
quiz.addQuestion(question2);

quiz.begin();