function filefilter(episodes, callback){ 

    episodes = episodes.filter(function(episode) { return episode.rating >= 8.5 });
    episodes = episodes.sort(function(episode1, episode2){
      return episode1.episode_number - episode2.episode_number;
    });

    for (var i = 0; i < episodes.length; i++) {
      console.log('Title: ' + episodes[i].title + ' Episode #: ' + episodes[i].episode_number);
      console.log(episodes[i].description);
      var stars = Array(Math.round(episodes[i].rating) + 1).join('*');
      console.log('Rating: ' + episodes[i].rating + ' ' + stars);
    };

    if (callback) {
      callback();
    }
}

module.exports = filefilter;