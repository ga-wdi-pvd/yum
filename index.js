var hbs       = require("hbs");
var Restaurant = require('./db/connection');
var express   = require("express");
var mongoose  = require('mongoose');
var db = mongoose.connection;

var app = express();
// var Schema = require("./db/schema.js");
// mongoose.connect("mongodb://localhost/restaurants");

db.on("error", err => {
  console.log(err);
})

db.once("open", () => {
  console.log("database has been connected!");
})



app.listen(3000, function(){
  console.log("app listening on port " + this.address().port);
});
