require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var myId = keys.spotify.id;
var mySecret = keys.spotify.secret;
var commandInput = process.argv[2];

var command = process.argv[2];
var nextCommand = process.argv[3];

var spotify = new Spotify(keys.spotify);

spotify
  .search({ type: 'track', query: 'beat it', limit: 01 })
  .then(function(response) {
    console.log(response.tracks );
  })
  .catch(function(err) {
    console.log(err);
  });

console.log(Spotify, command);


function getSong(nextCommand){
spotify.search({ type: 'track', query: mySong }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0]); 
  });
}

/******************************* */
  var mysong =  "";
  var queryUrl = "https://api.spotify.com/v1/search?query="+ mysong +"&type=track&offset=0&limit=20";
  
  axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


/******************************* */
  if(command === "spotify-this"){
      console.log("spotify")
      getSong(nextCommand);
  } else if( command === "movie-this"){
      console.log("movie this")
  } else if(comand === "concert this"){
      console.log("concert")
  }













