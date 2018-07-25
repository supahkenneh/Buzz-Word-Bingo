const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require(`./words`);


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const success = { "success": true };

router.post('/', (req, res) => {
  let newBuzzword = {};
  newBuzzword.word = req.body.buzzword;
  newBuzzword.points = req.body.points;
  newBuzzword.heard = false;
  data.wordBank.push(newBuzzword)
  res.send(success);
});

router.put('/', (req, res) => {
  for (let i = 0; i < data.wordBank.length; i++) {
    if (req.body.buzzword === data.wordBank[i].word) {
      data.wordBank[i].points = parseInt(req.body.points);
      res.send({"success": true});
      return true;
    }
  }
  res.end();
  return false;
});

router.delete('/', (req, res) => {
  for (let i = 0; i < data.wordBank.length; i++) {
    if (req.body.buzzword === data.wordBank[i].word) {
      data.wordBank.splice(i, 1);
      console.log(data.wordBank);
      res.send(success);
      return true;
    }
  }
    res.end();
    return false;
});



module.exports = router;