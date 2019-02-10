const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function() {
    client.subscribe('data');

    const currentTime = Date.now();
    client.publish('data', currentTime.toString());
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