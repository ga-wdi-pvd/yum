var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("ara, it's ready");
	});

var Schema = mongoose.Schema;




var MenuItemsSchema = new Schema ({
	title: String
	});


var RestaurantSchema = new Schema ({
	name: String,
	address: {street: String, zipcode: Number},
	yelpUrl: String,
	items: [MenuItemsSchema]
	});
	
var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);
var MenuItemModel = mongoose.model("MenuItemsSchema", MenuItemsSchema);

module.exports = {
	Restaurant: RestaurantModel,
	MenuItem: MenuItemModel
	};
