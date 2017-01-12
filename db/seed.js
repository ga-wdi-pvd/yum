var Schema = require("../db/schema.js");

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

var gracies = new Restaurant({name: "Gracie's", address: {street: "194 Washington St", zipcode: 02903 }, yelp: "https://www.yelp.com/biz/gracies-providence", })
