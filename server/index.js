const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Review = require('../db/reviewsDb.js')

const app = express();

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '../public'))); //rooms/:id

app.get('/hi', (req, res) => { // need to make app.get('/:id)
    Review.find()
      .then(function(callback){
        console.log('this is the callback ', callback)
        res.send(callback);
      })
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));