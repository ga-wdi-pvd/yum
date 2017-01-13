var express = require("express");
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser')
var Restaurant = require('./db/connection');
var db = require('./db/connection');
var mongoose = require('mongoose');


//naming our app
mongoose.connect('mongodb://localhost/yum');
// Configure HBS
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware
app.use(express.static(__dirname + '/public'));
//home
app.get('/', (req, res) => {
  res.render('app-welcome');
});

//index
app.get('/restaurants', (req, res) => {
  res.render('restaurants-index', {
    restaurants: db.restaurants
  });
});
//to make a new restaurant
app.get('/restaurant/new', (req, res) => {
  res.render('restaurants-new');
})
//show
app.get('/restaurants/:index', (req, res) =>  {
  res.render('restaurants-show', {
    restaurant: db.restaurants[req.params.index]
  });
});



//create route
app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body.candidate)
})


// Create restaurant
Restaurant.create({name: 'PHOk Me', address: 'Fairmount 02919', yelpUrl: 'www.yelp.com/something', items: 'pho' }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});


//to set up the port
app.listen(3001, () => {
  console.log('//********  LISTENING ON PORT 3001  *******//');
});
