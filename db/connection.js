var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var menuSchema = mongoose.Schema ({
  title: String
});

var restaurantSchema = mongoose.Schema ({
  name: String,
  yelpUrl: String,
  items: [MenuItemsSchema],
  address: {
    street: String,
    zipcode: Number
  }
});

mongoose.model("Restaurant, RestaurantSchema");
mongoose.model("Menu, MenuSchema");

var seedData = require("./seeds.json");
module.exports = {
  restaurant: seedData,
  menuItem: seedData
};

module.exports = mongoose;
