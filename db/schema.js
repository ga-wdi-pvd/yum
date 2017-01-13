var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once("open", () => {
  console.log("database has been connected!");
});

var Schema = mongoose Schema;
  ObjectId = Schema.ObjectId;

var MenuItemsSchema = mongoose.Schema ({
  title: String,
});

var RestaurantSchema = mongoose.Schema ({
  name: String,
  address: { street: String, state: String, zipcode: Number },
  yelpUrl: String,
  items: [MenuItemsSchema]
});



var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);

Restaurant.create({ name: "Sora", address: "16 Donovan st."}, (err, restaurant) => {
  if (err){
    console.log(err);
  }
  else{
    console.log(restaurant);
  }
});

module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
};
