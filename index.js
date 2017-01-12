var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

function findFood(name){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}
function findByZip(zipcode){
  return Restaurant.find(zipcode);
}
