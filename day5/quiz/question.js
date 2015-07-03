
var Question = function(text, answer) {
	this.text = text;
	this.answer = answer;
	this.createId();
};

Question.prototype.lastId = 0;

Question.prototype.createId = function () {
	this.id = Question.prototype.lastId;
	Question.prototype.lastId += 1;
};

var firstQuestion = new Question("some text", "N");
var secondQuestoin = new Question("another text", "S");

console.log(firstQuestion)
console.log(secondQuestoin)

module.exports = Question;