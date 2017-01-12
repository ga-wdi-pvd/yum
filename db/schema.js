var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// intial mongo and mongoose setup

//because you have mongoose now you have access to the schema
var Schema = mongoose.Schema;// Makes schema avaialable in app

var ItemSchema = new Schema({ // a schema named ItemSchema
  title:String
});

var RestaurantSchema = new Schema({ // a schema named RestaurantSchema
  name:String,
  address: {
    street:String,
    zipcode:Number
  },
  yelpUrl:String,
  items:[{type: Schema.ObjectId, ref:"Item"}]
});



//Create Model and hookem up to schemas
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Item = mongoose.model("Item", ItemSchema);


// Export the models
module.export = {
  Restaurant:Restaurant,
  Item:Item
};
