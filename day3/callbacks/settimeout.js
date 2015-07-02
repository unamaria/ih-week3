/* RECURSIVE */
function blastOff(sec) {
	if (sec >= 0) {
		setTimeout(function() {
			console.log(sec)
			blastOff(sec-1);
		}, 1000);
	} else {
		console.log('Blast off!');
	}
}

blastOff(5);
