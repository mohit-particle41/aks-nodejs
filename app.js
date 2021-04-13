var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('NodeJS API AKS Example with Deployment center'+ Date()));
app.get('/healthz', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = app;