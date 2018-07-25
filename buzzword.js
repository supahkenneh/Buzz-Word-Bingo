const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const wordBank = [];
const success = { "success" : true };


router.post('/', (req, res) => {
  let newBuzzword = {};
  newBuzzword.word = req.body.buzzword;
  newBuzzword.points = req.body.points;
  wordBank.push(newBuzzword)
  console.log(wordBank);
})
  
module.exports = router;