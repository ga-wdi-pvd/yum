var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

// Create restaurant
Restaurant.create({name: 'PHOk Me', address: 'Fairmount 02919', yelpUrl: 'www.yelp.com/something', items: 'pho' }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});
