var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


function findFoodByName(name){
	return Restaurant.find(name);
};

function findAllByZip(zipcode){
	return Restaurant.find(zipcode);
};


