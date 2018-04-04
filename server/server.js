const express = require('express');
const axios = require('axios');

const getBitcoinData = require('./getBitcoinData.js');

const app = express();

app.use(express.static('dist'));

app.get('/btc', (req, res) => {
  // console.log(`${req.method} received from ${req.url}`)

  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((response) => {
      console.log(response)
      res.send((response.data))
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3000, () => console.log('...App listening on port 3000!'))


/*
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/