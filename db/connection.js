var mongoose = require('mongoose');
var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId
mongoose.model("Restaurant", RestaurantSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var MenuItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: { street: String, zipcode: Number },
  yelp: String,
  items: [MenuItemSchema]
});


var MenuItemModel = mongoose.model("MenuItemSchema", MenuItemSchema);
var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);


module.exports = {
  RestaurantModel,
  MenuItemModel
};





///////////////////////

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CandidateSchema = new Schema({
  name: String,
  year: Number
});

mongoose.model("Candidate", CandidateSchema);


var CandidateModel = mongoose.model('Candidate', CandidateSchema);

module.exports = CandidateModel;
