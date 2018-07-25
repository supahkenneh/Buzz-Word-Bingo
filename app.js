const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.port || 3005;

const words = [];
const success = { "success" : true };

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/buzzwords', (req, res) => {
  res.send(words);
  res.json(success);
});

app.post(`/buzzwords`, (req, res) => {
  res.json(success);
})

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
})
