var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

//Write a function or method that deletes a restaurant
Restaurant.remove({}, function(err){
  console.log(err)
})
MenuItem.remove({}, function(err){
  console.log(err)
})


  resturant1 = new Restaurant({ name: "Uncle Sushi", address: { street: "Reservoir Avenue", zipcode: 30304, }, yelp: "http://www.yelp.com/biz/uncle-sushi"})
  resturant2 = new Restaurant({ name: "Shogun", address: { street: "Jefferson Blvd", zipcode: 02909 }, yelp: "http://www.yelp.com/biz/shogun"})
  resturant3 = new Restaurant({ name: "Pitos", address: { street: "Cranston Street", zipcode: 02909}, yelp: "http://www.yelp.com/biz/pitos"})
  resturant4 = new Restaurant({ name: "Thai Star", address: { street: "Chalkstone Avenue", zipcode: 02908 }, yelp: "http://www.yelp.com/biz/thai-star"})
  resturant5 = new Restaurant({ name: "Pho Horns", address: { street: "North Main Street", zipcode: 11111}, yelp: "http://www.yelp.com/biz/pho-horns"})


  var item1 = new MenuItem({title: "pho"})
  var item2 = new MenuItem({title: "papaya salad"})
  var item3 = new MenuItem({title: "tartar"})
  var item4 = new MenuItem({title: "chicken and waffles"})
  var item5 = new MenuItem({title: "banh mi"})
  var item6 = new MenuItem({title: "king crab legs"})
  var item7 = new MenuItem({title: "pork belly"})

  var menuItems = [item1, item2, item3, item4, item5, item6, item7]
  var resturants = [resturant1, resturant2, resturant3, resturant4, resturant5]


//part 8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
  resturants.forEach(function(resturant, i){
    resturant.items.push(menuItems[i], menuItems[i+3]);
    resturant.save(function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  });
