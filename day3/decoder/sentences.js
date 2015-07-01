var superDecode = require('./super_decode.js');

var sentence1 = "Attack her nose under here with an itch"
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"

var sentences = [sentence1, sentence2, sentence3, sentence4, sentence5];
var types = ['even-backwards', 'every-backwards', 'odd-backwards', 'even-forwards', 'every-forwards', 'odd-forwards'];


var testDecoder = function(sentences, types) {
	sentences.forEach(function(sentence) {
		types.forEach(function(type) {
			console.log(superDecode(sentence, type));
		});
	});
}

testDecoder(sentences, types);
