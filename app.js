const express = require('express');
const bodyParser = require('body-parser');
const buzzword = require(`./buzzword`);
const app = express();

const PORT = process.env.port || 3005;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/buzzwords',(req, res) => {
  res.send(buzzword.wordBank);
});

app.use(`/buzzwords`, buzzword);

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
})
