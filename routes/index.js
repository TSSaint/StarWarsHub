var moviesJSON = require('../movies.json');

// Home
// 1st arg: get request of route; the HOME page
// 2nd arg: request and a response
// for get -- based on req, send some response
exports.home = function(req, res) {
    // gets the movies array and stores it in this variable 'movies'
    var movies = moviesJSON.movies;

    res.render('home', {
    // passing an object literal in here that we can use in our ejs
    title: "Star Wars Hub",
    movies : movies
    });
    };
    
// Vader Egg
exports.darth = function(req, res) {
      res.send("The ability to destroy a planet is insignificant compared to the power of the Force.");
    };
    
// Movie Single
// 1st arg: we can store the number in a params variable
// store episode number in var episode_number
exports.movie_single = function(req, res) {
    var episode_number = req.params.episode_number;
    res.send("This is episode " + episode_number + ".");
    };
    
// Missing Page
// This runs if any other route other than what is defined is typed in
exports.notFound = function(req, res) {
    res.send("This is not the page that you are looking for.");
    };

