var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.remove({}, err => {
  if(err){
    console.log(err);
  }
});

MenuItem.remove({}, err => {
  if (err){
    console.log(err);
  }
});
///DB WAS ABLE TO BE CREATED BEFOR I ADDED THE FOLLOWING CODE
var italianPlace = new Restaurant({ name: "Italian Shack", address: {street: "Main St.",zipCode: 02689},yelpUrl: "yelp.com"});

var mexicanPlace = new Restaurant({ name: "Mexican Casa", address: {street: "North Main St.",zipCode: 02689},yelpUrl: "yelp.com"});

var pasta = new MenuItem({ title: "Penne with Sauce"});
var pasta2 = new MenuItem({ title: "Riginotni with Sauce"});
var taco = new MenuItem({ title: "Beef Taco"});
var taco2 = new MenuItem({ title: "Chicken Taco"});

var restaurants = [italianPlace, mexicanPlace];
var menuItems = [pasta, pasta2, taco, taco2];

restaurants.forEach((restaurants, i) => {
  restaurants.menuItems.push(menuItems[i], menuItems[i + 1])
  restaurants.save((err, restaurants) => {
    if (err){
      console.log(err);
    } else {
      console.log(restaurants);
    }
  })
});



// for (var i = 0; i < restaurants.length; i++){
//   restaurants[i].menuItems.push(menuItems[i], menuItems[i + 1])
//   restaurants[i].save((err, restaurants) => {
//     if (err){
//       console.log(err);
//     } else {
//       console.log(restaurants);
//     }
//   })
// };
