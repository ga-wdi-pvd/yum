var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Item = Schema.Item;


Restaurant.remove({}, err=>{
  if(err){
    console.log(err);
  }
});

MenuItem.remove({}, err=>{
  if(err){
    console.log(err);
  }
});

resturant1 = new Restaurant({ name: "Gracie’s", address: { street: "194 Washington St", zipcode: 02903, }, yelp: "https://www.yelp.com/biz/gracies-providence"})
resturant2 = new Restaurant({ name: "East Side Pockets", address: { street: "278 Thayer St", zipcode: 02906 }, yelp: "https://www.yelp.com/biz/east-side-pockets-providence"})
resturant3 = new Restaurant({ name: "Ocean State Sandwich Company", address: { street: "155 Westminster St", zipcode: 02903}, yelp: "https://www.yelp.com/biz/ocean-state-sandwich-company-providence-2"})
resturant4 = new Restaurant({ name: "Tricycle Ice Cream", address: { street: "", zipcode: 02903 }, yelp: "https://www.yelp.com/biz/tricycle-ice-cream-providence"})
resturant5 = new Restaurant({ name: "Ellie’s Bakery", address: { street: "61 Washington St", zipcode: 02903}, yelp: "https://www.yelp.com/biz/ellies-bakery-providence"})


var item1 = new MenuItem({title: "Cupcake"});
var item2 = new MenuItem({title: "Cookie"});
var item3 = new MenuItem({title: "Pizza"});
var item4 = new MenuItem({title: "PB Ice Cream"});
var item5 = new MenuItem({title: "salad"});
var item6 = new MenuItem({title: "Sandwich"});
var item7 = new MenuItem({title: "Pasta"});

restaurants.forEach((restaurant, i) => {
   restaurant.items.push(menus[i], menus[i+2]);
   rest.save((err, restaurant) => {
     if (err){
       console.log(err);
     } else {
       console.log(rest);
     }
   });
 });
