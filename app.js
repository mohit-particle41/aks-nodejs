var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('NodeJS API AKS Example'+ Date()));
app.get('/healthz', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = app;