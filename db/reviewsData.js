var faker = require('faker');
var DateGenerator = require('random-date-generator');
var Review = require('./reviewsDb.js');
var mongoose = require('mongoose');



var data = [];
var zeroThroughFive = function getRandomArbitrary(min, max) {
  var num = Math.random() * (max - min) + min;
  return num.toFixed(1);
};
var startDate = new Date(2018, 01, 01);
var endDate = new Date(2019, 10, 10);
//DateGenerator.getRandomDateInRange(startDate, endDate);

// var populator = function () {

for (var i = 1; i <= 20; i++) { // change back to 100
  var start = 1;
  var reviewNumber = 1;
  while (start <= 20) { // change back to 100
    var each = {
      houseId: i,
      reviewNum: reviewNumber,
      guestName: faker.name.firstName(),
      date: DateGenerator.getRandomDateInRange(startDate, endDate), // need to fix this, getting dates that are in the future and I do not want that
      guestReview: faker.lorem.paragraph(),
      guestImage: faker.image.avatar(),
      hostName: faker.name.findName(),
      hostResponse: faker.lorem.sentences(),
      hostImage: faker.image.avatar(),
      ratings: {
        location: zeroThroughFive(0, 5),
        checkIn: zeroThroughFive(0, 5),
        value: zeroThroughFive(0, 5),
        communication: zeroThroughFive(0, 5),
        accuracy: zeroThroughFive(0, 5),
        cleanliness: zeroThroughFive(0, 5)
      }
    }
    data.push(each);
    reviewNumber ++;
    start += 1;
  }
}

async function asyncCall(){
  await Review.insertMany(data);
  mongoose.disconnect();
}

asyncCall();



// };

// populator();

// module.exports = data;

