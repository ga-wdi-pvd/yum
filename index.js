var mongoose = require('mongoose');
var Schema = require("./mongoose/connection.js");
var express = require('express');
var hbs = require('hbs');
var parser = require("body-parser");

var restaurant = Schema.Restaurant;
var menuItem = Schema.MenuItem

mongoose.connect("mongodb:/localhost/yum");

app.get('/', (req, res) => {
  res.render('app-welcome');
});

//Create
app.post('/restaurants', (req, res) => {

});

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

//Port Set-up
app.listen(3001, function(){
  console.log("******LISTENING ON PORT 3001******");
});
