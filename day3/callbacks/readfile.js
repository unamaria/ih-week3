'use strict';

var fs = require('fs');

function slideLoader (file) {
    function splitSlides (err, str) {
        if (err) {
            console.log('Oh now, some error!', err);
        } else {
            var slides = str.split('\n----\n');
            console.log(slides);
        }
    }
    fs.readFile(file, 'utf8', splitSlides);
}

slideLoader('./slides.txt');