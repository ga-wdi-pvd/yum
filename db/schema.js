var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');

var db = mongoose.connection;

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

db.on('error', err => {
  console.log(err);
});

db.once("open", () => {
  console.log("database has been connected!");
});



var MenuItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipCode: Number
  },
  yelpUrl: String,
  items: [{type: Schema.ObjectId, ref: "MenuItem"}]
});

var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
};
