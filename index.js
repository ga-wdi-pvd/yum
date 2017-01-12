var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/restaurants");
var db = mongoose.connection;

db.on("error", err => {
  console.log(err);
})

db.once("open", () => {
  console.log("database has been connected!");
})
var Schema = require("./db/schema.js");

app.listen(3000, function(){
  console.log("app listening on port " + this.address().port);
});
