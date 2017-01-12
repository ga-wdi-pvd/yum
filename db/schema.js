var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

// Will log an error if db can't connect to MongoDB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Will log "database has been connected" if it successfully connects.
db.once("open", () => {
    console.log("database has been plugged in!");
});

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema;

// ItemSchema needs to be placed above RestaurantSchema in order for RestaurantSchema to embed it
var ItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
     street: String,
     zipcode: Number,
   },
   yelpUrl: String,
   items: [{type: Schema.ObjectId, ref: "Item"}]
});

// Models represent our documents in the db by passing the schema instances to mongoose.model
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Item = mongoose.model("Item", ItemSchema);

// Connect schema.js to seeds.js
module.exports = {
  Restaurant: Restaurant,
  Item: Item
};
