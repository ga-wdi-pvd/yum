var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var MenuSchema = new Schema({
  name: String,
  age: Number,
  reminders: [{type: Schema.ObjectId, ref: "Reminder"}]
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
});

mongoose.model("Restaurant", RestaurantSchema);
mongoose.model("Menu", MenuSchema);
mongoose.connect("mongodb://localhost/yum");

module.exports = mongoose;
