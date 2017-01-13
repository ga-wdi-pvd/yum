var hbs       = require("hbs");
var Restaurant = require('./db/connection');
var express   = require("express");
var mongoose  = require('mongoose');
var db = mongoose.connection;

// mongoose.connect("mongodb://localhost/restaurants");

db.on("error", err => {
  console.log(err);
})

db.once("open", () => {
  console.log("database has been connected!");
})

var Schema = require("./db/schema.js");

app.listen(3000, function(){
  console.log("app listening on port " + this.address().port);
});
