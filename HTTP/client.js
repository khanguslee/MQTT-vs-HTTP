const request = require('request-promise-native');
const { ArgumentParser } = require('argparse');

const argumentParser = new ArgumentParser({
  version: '1.0.0',
  addHelp: true,
  description: 'HTTP client program',
});

argumentParser.addArgument(
  ['-n', '--number'],
  {
    help: 'Number of requests',
    defaultValue: 1,
  },
);

const args = argumentParser.parseArgs();

const serverAddress = 'http://127.0.0.1:3000';

const data = { time: Date.now() };
const clientData = {
  method: 'POST',
  url: `${serverAddress}/data`,
  body: data,
  json: true,
};

for (let index = 0; index < args.number; index += 1) {
  request(clientData)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    })
}