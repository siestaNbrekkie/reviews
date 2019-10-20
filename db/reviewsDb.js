var mongoose = require('mongoose');
// var data = require('./reviewsData.js');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'CONNECTION ERROR: '));
db.once('open', function () {
  console.log("WE'RE CONNECTED")
});

var reviewSchema = new mongoose.Schema({
  houseId: Number,
  reviewNum: Number,
  guestName: String,
  date: Date,
  guestReview: {type: String, text: true},
  guestImage: String,
  hostName: String,
  hostResponse: String,
  hostImage: String,
  ratings: {
      location: Number,
      checkIn: Number,
      value: Number,
      communication: Number,
      accuracy: Number,
      cleanliness: Number
  }
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;