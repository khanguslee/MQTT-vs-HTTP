const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log('Example app listening at', server.address().port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/data', (req, res) => {
  const receivedTime = Date.now();
  const sentTime = req.body.time;
  console.log(`Send time: ${sentTime}`);
  console.log(`Received time: ${receivedTime}`);
  console.log(`Total time: ${receivedTime - sentTime} milliseconds\n`);
  res.sendStatus(200);
});
