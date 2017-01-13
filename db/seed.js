var Schema = require("../db/schema.js");


var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

// First we clear the database of existing authors and reminders.
Restaurant.remove({}, err => {
  if(err){
    console.log(err);
  }
});

Menu.remove({}, err => {
  if(err){
    console.log(err);
  }
});

// Now we generate instances of Author and Reminder.
var george = new Restaurant(
  { name: "George's Restaurant", address: {street:"123 Main Street",zip:02888}, yelpUrl: ""}
);
var joanne = new Restaurant(
  {name: "Joanne's Cafe", address: {street:"456 West Shore Road",zip:02886}, yelpUrl: ""}
);
var tom = new Restaurant(
  {name: "Tom's Bar", address: {street:"789 East Beach Road",zip:02887}, yelpUrl: ""}
);

var menu1 = new Menu({title: "Pasta"});
var menu2 = new Menu({title: "Salad"});
var menu3 = new Menu({title: "Chicken"});
var menu4 = new Menu({title: "Beef"});

var restaurants = [george, joanne, tom];
var menus = [menu1, menu2, menu3, menu4];

// Here we assign some reminders to each author.
// ...or you could use forEach instead of a for loop...
restaurants.forEach((rest, i) => {
  rest.items.push(menus[i], menus[i+1]);   // Assigning each author multiple reminders
  rest.save((err, rest) => {
    if (err){
      console.log(err);
    } else {
      console.log(rest);
    }
  });
});
