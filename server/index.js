const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Review = require('../db/reviewsDb.js');

const app = express();

const PORT = 3003;

const getAverage = function (array, key) {
  if (array.length !== 0) {
    let total = 0;
    const arrLength = array.length
    array.map(obj => {
      total += obj.ratings[key]
    })
    return total / arrLength;
  } else {
    return 0;
  }
}

app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
  var locationReviewsObject = {};
  Review.find({ houseId: req.params.id }).sort({ date: -1 })
    .then(function (callback) {
      locationReviewsObject.data = callback;
      locationReviewsObject.copyData = callback;
      locationReviewsObject.count = callback.length;
      locationReviewsObject.pageReviews = callback.slice(0, 7);
      locationReviewsObject.checkIn = getAverage(callback, 'checkIn').toFixed(1);
      locationReviewsObject.accuracy = getAverage(callback, 'accuracy').toFixed(1);
      locationReviewsObject.cleanliness = getAverage(callback, 'cleanliness').toFixed(1);
      locationReviewsObject.communication = getAverage(callback, 'communication').toFixed(1);
      locationReviewsObject.location = getAverage(callback, 'location').toFixed(1);
      locationReviewsObject.value = getAverage(callback, 'value').toFixed(1);

      res.send(locationReviewsObject);
    })
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));