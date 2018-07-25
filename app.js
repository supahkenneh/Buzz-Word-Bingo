const express = require('express');
const bodyParser = require('body-parser');
const buzzword = require(`./buzzword`);
const data = require(`./words`);
const app = express();

const PORT = process.env.port || 3005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/buzzwords',(req, res) => {
  res.send(data.wordBank);
});

app.use(`/buzzwords`, buzzword);

app.post('/reset', (req, res) => {
  console.log('reseting');
  data.wordBank = [];
  data.score = 0;
  res.send({"success" : true});
})

app.post('/heard', (req, res) => {
  for (let i = 0; i < data.wordBank.length; i++) {
    if (req.body.buzzword === data.wordBank[i].word) {
      data.wordBank[i].heard = true;
      data.score += parseInt(data.wordBank[i].points);
      res.send(`{ "success" : true, "totalScore" : ${data.score}}`)
    }
  }
  res.send(`{"Word does not exist in word bank!"}`)
})

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
})
