var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants);
    });
  },
  show(req){
   Restaurant.findOne({name: req.name}, (err, restaurant) => {
     console.log(restaurant);
   });
 },
 update(req, update){
   Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
     if(err) {
       console.log(err)
     }
     else {
       console.log(restaurant);
     }
   });
 },
 destroy(req){
    Restaurant.findOneAndRemove(req, (err, restaurant) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(restaurant);
      }
    });
  }
};

restaurantsController.index();
restaurantsController.show({name:"Tom's Bar"});
restaurantsController.update({name: "Tom's Bar"}, {name: "Voldemort's"});
restaurantsController.destroy({name: "Voldemort's"});
