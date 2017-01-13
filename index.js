
var express = require('express');
var hbs = require('hbs');
var bodyParser =require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

var Schema = require("./db/schema");
var app = express();

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;


//Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/yum');

//Config hbs
app.set('view engine', 'hbs');
app.set('views', './views');

//Middleware
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));

//Home
app.get('/', (req, res) => {
  res.render('app-welcome');
});

//Index
app.get('/restaurants', (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.render('restaurants-index', {
        restaurants
      });
    })
    .catch((err) => {
      if(err)console.log(err);
    });
});

app.get('/restaurants/new', (req, res) => {
  res.render('restaurants-new');
});

//Show
app.get('/restaurants/:id', (req, res) => {
  Restaurant.findOne({_id: req.params.id})
    .then((restaurant) => {
      res.render('restaurants-show', {
        restaurant
    })
    .catch((err) => {
      if(err)console.log(err);
    });
  });
});

//Create
app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body.restaurant)
    .then((restaurant) => {
      res.redirect(`/restaurants/${restaurant._id}`);
    })
    .catch((err) => {
      if(err)console.log(err);
    });
});

//Delete

app.get('/restaurants/:id', (req, res) => {
  Restaurant.findByIdAndRemove({_id: req.params.id})
  .then((restaurant) => {
    res.redirect(`/restaurants`);
  })
    .catch((err) => {
      if(err)console.log(err);
    });
  });
//});


// const destroy = (id) => {
//
//   if (Movement.findById(id).exists(true)) {
//     Movement.findByIdAndRemove(id).then(move => {
//       console.log(move);
//     }).catch(err => {
//       console.log(err);
//     });
//   } else {
//     console.log('Not Found');
//   }
//
// };







app.listen(3001, () => {
  console.log('//******* LISTENING ON PORT 3001 *********//');
});
