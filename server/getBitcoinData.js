
const getBitcoinData = () => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((response) => {

    })
};


module.exports = getBitcoinData;

/*
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/