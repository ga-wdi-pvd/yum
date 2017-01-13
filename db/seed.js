var mongoose = require("./schema");
var seedData = require("./seeds");

var Menu= mongoose.model("Menu");
var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});
