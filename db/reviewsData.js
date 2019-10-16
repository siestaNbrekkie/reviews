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

for (var i = 1; i <= 10; i++) {
  var start = 1;
  while (start <= 10) {
    var each = {
      houseId: i,
      guestName: faker.name.findName(),
      date: DateGenerator.getRandomDateInRange(startDate, endDate), // will need to change this to to show just the month and year (faker has a random month generator @ faker.date.month)
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

