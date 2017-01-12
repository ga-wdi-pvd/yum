var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant; // now the refference is to the models
var Item = Schema.Item; // now the refference is to the models

//DROPPING THE CURRENT DATA
Restaurant.remove({}, err=>{
  if(err){
    console.log(err);
  }
});

Item.remove({}, err=>{
  if(err){
    console.log(err);
  }
});


// RESTAURANTS
var eastSidePockets = new Restaurant({name:"East Side Pocket",
address: {
  street:"Thayer st",
  zipcode:02906
},
yelpUrl:"https://www.yelp.com/biz/east-side-pockets-providence"});

var fellinis = new Restaurant({name:"Fellinis",
address:{
  street:"Wickiden",
  zipcode:02903
},
yelpUrl:"https://www.yelp.com/biz/fellinis-pizza-atlanta-2"
});


var pizza = new Item({
  title:"Pepperoni Pizza"
});

var fallafel = new Item({
  title:"Fallafel"
});

var items = [pizza, fallafel];
var restaurant = [eastSidePockets, fellinis];

eastSidePockets.items.push(fallafel);
eastSidePockets.save((err, eastSidePockets) =>{
  if(err){
    console.log(err);
  }
});
fellinis.items.push(pizza);
fellinis.save((err, fellinis)=>{
  if(err){
    console.log(err);
  }
});
