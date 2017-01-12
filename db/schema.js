var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once("open", () => {
  console.log("\n********************\n");
  console.log("Matt Connors is the Greatest Database Connector!");
  console.log("\n********************\n");
});

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


module.exports - {


};
