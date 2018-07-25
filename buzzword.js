const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const data = require(`./words`);


router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const success = { "success" : true };

router.post('/', (req, res) => {
    let newBuzzword = {};
    newBuzzword.word = req.body.buzzword;
    newBuzzword.points = req.body.points;
    newBuzzword.heard = false;
    data.wordBank.push(newBuzzword)
    res.send(success);
})
  
module.exports = router;