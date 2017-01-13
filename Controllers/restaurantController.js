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
  }
};

restaurantsController.show({name: "Sora"});

var restaurantsController = {

   // This method takes two arguments: (1) the old instance and (2) what we want to update it with.
   update(req, update){
     Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
       if(err) {
         console.log(err)
       }
       else {
         console.log(author);
       }
     });
   }
 };

 restaurantsController.update({name: "Sora"}, {name: "Cashmere"});

 var restaurantsController = {
   destroy(req){
     Restaurant.findOneAndRemove(req, (err, docs) => {
       if(err){
         console.log(err);
       }
       else{
         console.log(docs);
       }
     });
   }
 };

 restaurantsController.destroy({name: "Birdys"});
