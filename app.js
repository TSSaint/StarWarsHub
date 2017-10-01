// use express
var express = require('express');

//  new express application
var app = express();

var routes = require('./routes');

// use express method 'set' to establish the view engine
app.set("view engine", 'ejs');

var path = require('path');
// telling express that the static assets are in public
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(process.env.PORT || 1977);