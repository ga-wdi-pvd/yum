var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once("open", () => {
    console.log("database has been connected!");
});

var Schema = mongoose.Schema;

// menu item schema
var MenuItemSchema = new Schema({
  title:String
});

// restaurant schema
var RestaurantSchema = new Schema({
  name:String,
  address: {
    street:String,
    zipcode:Number
  },
  yelpUrl:String,
  menuItems:[{type: Schema.ObjectId, ref:"MenuItem"}]
});

// models
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuItemModel = mongoose.model("MenuItem", MenuItemSchema);


// export models
module.export = {
  Restaurant:RestaurantModel,
  MenuItem:MenuItemModel
};
