var Schema = require("./schema.js");

var Restaurant = Schema.Restaurant;
var Item = Schema.Item;

// Clears the DB of existing entries
Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Item.remove({}, err => {
  if(err){
    console.log(err)
  }
});

// Now we generate instances of Restaurant and Item.

var ranZan = new Restaurant({
  name: "RanZan",
  address: {
     street: "500 Blackstone Blvd",
     zipcode: 02901,
   },
   yelpUrl: "#",
   items: [{type: Schema.ObjectId, ref: "Item"}]
});

var item1 = new Item({title: "Ramen"});
var item2 = new Item({title: "Pork Katsu"});
var item3 = new Item({title: "Beef Curry"});
var item4 = new Item({title: "Sushi"});

var restaurants = [ranZan];
var items = [item1, item2, item3, item4];

// Here we assign some items to each Restaurant.
for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
