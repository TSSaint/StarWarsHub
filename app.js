// use express
var express = require('express');

//  new express application
var app = express();

// use express method 'set' to establish the view engine
app.set("view engine", 'ejs');

var routes = require('./routes');
console.log("MTFBWY");

//////////////
/// ROUTES ///
//////////////

// Home
app.get('/', routes.home);

// Vader Egg
app.get('/darth', function(req, res) {
  res.send("The ability to destroy a planet is insignificant compared to the power of the Force.");
});

// Movie Single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// Missing Pages
app.get('*', routes.notFound);

// Console Log
// Check if app runsclear

app.listen(1234, function() {
  console.log("This droid is running on localhost:1234");
});




