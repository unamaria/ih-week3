'use strict'

var evenWords = function(words) {
	evenWords = [];
	for (var i = 0; i < words.length; i++) {
		if (i % 2 === 0) {
			evenWords.push(words[i]);
		}
	};
	return evenWords;
};

var oddWords = function(words) {
	oddWords = [];
	for (var i = 0; i < words.length; i++) {
		if (i % 2 !== 0) {
			evenWords.push(words[i]);
		}
	};
	return oddWords;
};

var decode = function(words) {
	var secret = '',
				j = 0;

		for (var i = 0; i < words.length; i++) {
			secret += words[i].charAt(j);
			j = (j + 1) % 5;
		}
	return secret;
};

module.exports = [evenWords, oddWords, decode];
