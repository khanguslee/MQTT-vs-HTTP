# MQTT-vs-HTTP

An investigation into MQTT and HTTP. As a project to learn MQTT, this repository aims to investigate whether the MQTT protocol is faster than using HTTP. To do this, we will send the same data to a central server and time how long this trip takes for both protocols.

# HTTP

## Getting Started

In the HTTP folder, make sure you download all dependencies using `npm install`. You will need to run the server and client in two different terminal sessions.

To run the server:

```bash
    npm start
```

To run the client:

```bash
    node client.js [--number NUMBER]
```

where NUMBER is the number of times you would like to send a request to the server.