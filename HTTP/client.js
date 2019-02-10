const request = require('request-promise-native');

const serverAddress = 'http://127.0.0.1:3000';

const data = { time: Date.now() };
const clientData = {
  method: 'POST',
  url: `${serverAddress}/data`,
  body: data,
  json: true,
};

request(clientData)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  })