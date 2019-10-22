const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Review = require('../db/reviewsDb.js')

const app = express();

const PORT = 3003;

app.use('/rooms/:id', express.static(path.join(__dirname, '../public'))); //rooms/:id

app.get('/:id', (req, res) => {
  //console.log('this should be the numebr 1 ', req.params.id)
  //req.params.id
    Review.find({ houseId: req.params.id }).sort({ date: -1 })
      .then(function (callback) {
        // console.log('this is the callback ', callback)
        res.send(callback);
      })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));