// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/yum');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once("open", () => {
//     console.log("database has been connected!");
// });
//
//
//
// // First, we instantiate a namespace for our Schema constructor defined by mongoose.
// var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;
//
//
// var MenuSchema = new Schema({
//   title: String
// });
//
// var RestaurantSchema = new Schema({
//   name: String,
//   address: {
//     street: String,
//     zip: Number
//   },
//   yelpUrl: String,
//   items: [{type: Schema.ObjectId, ref: "Menu"}]
// });
// var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
// var Menu = mongoose.model("Menu", MenuSchema);
//
//
// // var newRestaurant = Restaurant.create({ name: "Sora", address: {street:"Dunbar",zip:02343}, yelpUrl: ""}, (err, rest) => {
// //   if (err){
// //     console.log(err);
// //   }
// //   else{
// //     console.log(rest);
// //   }
// // });
// //
// // var newMenu = new Menu({title: "Great food!"});
// //
// // // Now we add that reminder to an author's collection / array of reminders.
// // newRestaurant.items.push(newMenu);
// //
// // // In order to save that reminder to the author, we need to call `.save` on the author -- not the reminder.
// // newRestaurant.save((err, rest) => {
// //   if(err){
// //     console.log(err);
// //   } else {
// //     console.log(`${rest} was saved to our db!`);
// //   }
// // });
//
//
//
// // By adding `module.exports`, we can now reference these models in other files by requiring `schema.js`.
// module.exports = {
//   Restaurant: Restaurant,
//   Menu: Menu
// };


var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

// var CandidateSchema = new Schema({
//   name: String,
//   year: Number
// });
//
// var CandidateModel = mongoose.model('Candidate', CandidateSchema);



var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zip: Number
  },
  yelpUrl: String,
  items: [{type: Schema.ObjectId, ref: "Menu"}]
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);

// module.exports = CandidateModel;

module.exports = {
  Restaurant: RestaurantModel,
  Menu: MenuModel
};
