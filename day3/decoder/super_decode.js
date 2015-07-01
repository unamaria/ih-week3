var evenWords = require('./decode.js')[0];
var oddWords = require('./decode.js')[1];
var decode = require('./decode.js')[2];

'use strict'

var superDecode = function(words, type) {

		words = words.split(' ');
		type = type.split('-');

		if (type[1] === 'backwards') {
			words = words.reverse();
		}

		switch (type[0]) {
			case 'every':
				return decode(words);
			break;
			case 'even':
				return decode(evenWords(words));
			break;
			case 'odd':
				return decode(oddWords(words));
			break;
		}
};

module.exports = superDecode;