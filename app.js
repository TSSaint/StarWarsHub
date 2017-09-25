// use express
var express = require('express');

//  new express application
var app = express();
// console.log("MTFBWY");

//////////////
/// ROUTES ///
//////////////

// Home
// 1st arg: get request of route; the HOME page
// 2nd arg: request and a response
// for get -- based on req, send some response
app.get('/', function(req, res) {
  res.send("There is an awakening...");
});

app.get('/darth', function(req, res) {
  res.send("The ability to destroy a planet is insignificant compared to the power of the Force.");
});

// Movie Single
// 1st arg: we can store the number in a params variable
// store episode number in var episode_number
app.get('/star_wars_episode/:episode_number?', function(req, res) {
  var episode_number = req.params.episode_number;
  res.send("This is episode " + episode_number + ".");
});

app.listen(1234, function() {
  console.log("This droid is running on localhost:1234");
})




