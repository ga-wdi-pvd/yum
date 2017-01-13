var mongoose = require('./connection.js');
var seedData = require('./seeds.json');
// mongoose.Promise = global.Promise;
var Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});
