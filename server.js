var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
mongoose.connect('mongodb://localhost/yum');
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

// Configure HBS
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware
app.use(express.static(__dirname + '/public'));
//home
app.get('/', (req, res) => {
  res.render('app-welcome');
});

app.get('/restaurants', (req, res) => {
  res.render('restaurants-index', {
    restaurants: db.restaurants
  });
});

// Create
Restaurant.create({ name: 'Cookies-R-Us', "address.zipcode": 20001 }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});

// Find by name
function findByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

// Find all by zip
function findByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode === zipcode){
        results.push(rest);
      }
    });
    console.log(results);
  });
}

// Updating resturant
function update(resturant, update){
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

// Deleting resturant
function destroy(resturant){
  Restaurant.findOneAndRemove({name: resturant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " was deleted!");
    }
  });
}

// Add sub document
function addItem(resturant, item){
  Restaurant.findOne({name: resturant}, function(err, docs){
    docs.items.push(new MenuItem({title: item}))
    docs.save(function(err, results){
      if(err){
        console.log(err)
      }
      else{
        console.log(results);
      }
    })
  });
}

// Remove sub document
function removeItem(resturant, item){
  Restaurant.findOneAndUpdate({name: resturant}, {
    $pull: { items: {title: item} }
  },
  {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}

app.get('/restaurant/new', (req, res) => {
  res.render('restaurants-new');
})
//show
app.get('/restaurants/:index', (req, res) =>  {
  res.render('restaurants-show', {
    restaurant: db.restaurants[req.params.index]
  });
});



//create route
app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body.restaurant)
})
//to set up the port
app.listen(3001, () => {
  console.log('//********  LISTENING ON PORT 3001  *******//');
});
