require("dotenv").config();
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var nodeArray = process.argv;
console.log(nodeArray[3]);

var movieName = "";
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";










 
var spotify = new Spotify({
  id: "e94830ea9a5c408eab0281327138eb37",
  secret: "09d77010ae7c42aeb6df29e7f3072776"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 

console.log(data.tracks.items[0]);

});


