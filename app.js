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

app.listen(1234, function() {
  console.log("This droid is running on localhost:1234");
})



