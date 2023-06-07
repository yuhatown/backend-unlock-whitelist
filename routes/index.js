var express = require('express');
var router = express.Router();
const { generateMerkleTree } = require('../controller/merkle');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/merkle', function(req, res, next) {
  generateMerkleTree();
  res.send('ok');
});

module.exports = router;
