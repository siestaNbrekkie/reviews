const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Review = require('../db/reviewsDb.js');

const app = express();

const PORT = 3003;

app.use(compression());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/rooms/:id', express.static(path.join(__dirname, '../public'))); //rooms/:id

app.get('/:id', (req, res) => {
  var locationReviewsObject = {};
  //console.log('this should be the numebr 1 ', req.params.id)
  //req.params.id
    Review.find({ houseId: req.params.id }).sort({ date: -1 })
      .then(function (callback) {
        locationReviewsObject.data = callback;
        locationReviewsObject.copyData = callback;
        locationReviewsObject.count = callback.length;
        locationReviewsObject.pageReviews = callback.slice(0, 7);

        //console.log('this is the new created object I want to send to the client ', locationReviewsObject)
        res.send(locationReviewsObject);
      })
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));