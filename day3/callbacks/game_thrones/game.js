var fs = require('fs');
var fileActions = require('./fileactions.js');
var fileFilter = require('./filefiltered.js');

fs.readFile("./episodes.json", 'utf8', fileActions);
