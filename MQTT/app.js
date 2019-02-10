const mqtt = require('mqtt');
const { ArgumentParser } = require('argparse');

const argumentParser = new ArgumentParser({
  version: '1.0.0',
  addHelp: true,
  description: 'MQTT client program',
});

argumentParser.addArgument(
  ['-n', '--number'],
  {
    help: 'Number of requests',
    defaultValue: 1,
  },
);

const args = argumentParser.parseArgs();

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function() {
    client.subscribe('data');

    for (let index = 0; index < args.number; index += 1) {
        const currentTime = Date.now();
        client.publish('data', currentTime.toString());
    }
    client.end();
})

client.on('message', function(topic, message) {
    var receivedTime = Date.now();
    if (topic == 'data') {
        const sentTime = message.toString();
        console.log(`Send time: ${sentTime}`);
        console.log(`Received time: ${receivedTime}`);
        console.log(`Total time: ${receivedTime - sentTime} milliseconds`)
    }
})