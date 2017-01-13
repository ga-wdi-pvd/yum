var mongoose = require("mongoose");

// var MenuItemSchema = new mongoose.Schema({
//   title: String
// });

var RestaurantSchema = new mongoose.Schema(
  {
  name: String,
  address: {
    street: String,
    zipCode: Number
  },
  yelpUrl: String
  // items: [{type: mongoose.Schema.ObjectId, ref: "MenuItem"}]
  }
);

mongoose.model("Restaurant", RestaurantSchema );
// mongoose.model("MenuItem", MenuItemSchema );

mongoose.connect("mongodb://localhost/yum");

module.exports = mongoose;
