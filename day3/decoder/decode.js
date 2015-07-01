'use strict'

var evenWords = function(words) {
	var secret = '',
			j = 0;

	for (var i = 0; i < words.length; i++) {
		if (i % 2 !== 0) {
			secret += words[i].charAt(j);
		}
		j = (j + 1) % 5;
	}
	return secret;
}

var oddWords = function(words) {
	var secret = '',
			j = 0;

	for (var i = 0; i < words.length; i++) {
		if (i % 2 === 0) {
			secret += words[i].charAt(j);
		}
		j = (j + 1) % 5;
	}
	return secret;
}

var allWords = function(words) {
	var secret = '',
			j = 0;

	for (var i = 0; i < words.length; i++) {
		secret += words[i].charAt(j);
		j = (j + 1) % 5;
	}
	return secret;
};

var decode = function(words, whichWords, direction) {
	if (direction === 'backward') {
		words = words.reverse();
	}

	switch (whichWords) {
		case 'odd':
			return oddWords(words);
		break;
		case 'even':
			return evenWords(words);
		break;
		case 'all':
			return allWords(words);
		break;
	}
};

var words = [
	'January',
  'lacks',
  'caveats',
  'hazardous',
  'DOORS',
  'crying',
  'arrogantly',
  'climate',
  'proponent',
  'rebuttal'
];

var sentence1 = "Attack her nose under here with an itch"
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"


console.log(decode(words, 'odd', 'forward'));
console.log(decode(words, 'odd', 'backward'));

