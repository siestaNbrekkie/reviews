var mongoose = require('mongoose');
var faker = require('faker');
var DateGenerator = require('random-date-generator');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'CONNECTION ERROR: '));
db.once('open', function () {
  console.log("WE'RE CONNECTED")
});

var reviewSchema = new mongoose.Schema({
  houseId: Number,
  guestName: String,
  date: Date,
  guestReview: String,
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

Review.deleteMany()

var data = [];

var zeroThroughFive = function getRandomArbitrary(min, max) {
  var num = Math.random() * (max - min) + min;
  return num.toFixed(1);
};

var startDate = new Date(2018, 01, 01);
var endDate = new Date(2019, 10, 10);
//DateGenerator.getRandomDateInRange(startDate, endDate);

var populator = function () {

  for (var i = 1; i <= 10; i ++) {
    var start = 0;
    while (start <= 10) {
      var each = {
        houseId: i,
        guestName: faker.name.findName(),
        date: DateGenerator.getRandomDateInRange(startDate, endDate),
        guestReview: faker.lorem.paragraph(),
        guestImage: faker.image.avatar(),
        hostName: faker.name.findName(),
        hostResponse: faker.lorem.sentences(),
        hostImage: faker.image.avatar(),
        ratings: {
          location: zeroThroughFive(0,5),
          checkIn: zeroThroughFive(0,5),
          value: zeroThroughFive(0,5),
          communication: zeroThroughFive(0,5),
          accuracy: zeroThroughFive(0,5),
          cleanliness: zeroThroughFive(0,5)
        }
      }
      data.push(each);
      start += 1;
    }
  }

};

populator();


Review.insertMany(data);

module.exports = Review;

// var data = [{houseId: 4, guestImage: 'vinh'} , {houseId: 5, guestImage: 'derek'}]
// Review.insertMany(data);