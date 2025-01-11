/*const express = require('express');
const app = express();

const port = process.env.PORT || 8080

// const port = 8080

app.get('/', (req, res) => res.send('Remade By Choru Tiktokers!!'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);*/

const express = require('express');
/*const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('YAHALLO!!'));

app.listen(port, () =>
	console.log(`Your app is listening a http://localhost:${port}`)
);

const app = express();
const axios = require('axios');

const port = 3000;

app.get('/', (req, res) => {
  res.send("I'm alive!");
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}.`);

  // Send a GET request to the /keep-alive endpoint every 60 seconds
  setInterval(() => {
    axios.get('https://blah.axczelplays.repl.co').then(() => {
      console.log("Ping successful.");
    }).catch((error) => {
      console.log("Error occurred while pinging: " + error);
    });
  }, 60000);
});
*/
const express = require('express');
const app = express();
const Monitor = require('ping-monitor');
const notifier = require('node-notifier');
const axios = require('axios');

const port = 3000;

const myMonitor = new Monitor({
    address: 'localhost', // replace with your bot's IP address
    port: port,
    interval: 5, // 5 seconds
    config: {
        intervalUnits: 'seconds',
        generateId: false
    }
});

myMonitor.on('up', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Online !'); // ping
});

myMonitor.on('down', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Offline !');
    return notifier.notify({title: 'Check Connected',message: 'Bot Chết R Kìa =))'}); // noti
});

myMonitor.on('stop', function (res, state) {
    console.log(res.address + ' monitor has stopped.');
    return notifier.notify({title: 'Check Connected',message: 'Bot Chết R Kìa =))'});
});

myMonitor.on('error', function (error, res) {
    console.log(error);
    return notifier.notify({title: 'Check Connected',message: 'Bot Chết R Kìa =))'});
});

myMonitor.on('timeout', function (error, res) {
    console.log(error);
    return notifier.notify({title: 'Check Connected',message: 'Bot Chết R Kìa =))'});
});

app.get('/', (req, res) => {
  res.send("I'm alive!");
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}.`);

  // Send a GET request to the /keep-alive endpoint every 60 seconds
  setInterval(() => {
    axios.get(`http://localhost:${port}`).then(() => {
      console.log("Ping successful.");
    }).catch((error) => {
      console.log("Error occurred while pinging: " + error);
    });
  }, 60000);
});

