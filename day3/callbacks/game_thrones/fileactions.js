function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    for (var i = 0; i < episodes.length; i++) {
    	console.log('Title: ' + episodes[i].title + ' Episode #: ' + episodes[i].episode_number);
    	console.log(episodes[i].description);
    	console.log('Rating: ' + episodes[i].rating);
    };
}

module.exports = fileactions;