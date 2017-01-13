var mongoose = require('mongoose');
var express  = require('express');
var hbs      = require('hbs');
var Schema   = require("./db/schema.js");

var app      = express();

//*****HANDLEBARS CONFIG
app.set('view engine', 'hbs');
app.set('views', './views');

// GET(READ) ROUTES

// WELCOME
app.get('/', (req, res) => {
  res.render('app-welcome');
});

// INDEX
app.get('/restaurants', (req, res) => {
  Schema.find({})
  .then((restaurants) => {
    res.render('restaurants-index', {
      restaurants
    });
  })
  .catch((err) => {
    if(err)console.log(err);
  });
});

















//******LISTENING PORT
app.listen(3000, () => {
  console.log('//********LISTENING ON PORT 3000********//');
});
