var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/whitelist/add', function(req, res, next) {
  const { address } = req.body;
  console.log(address);
  res.send('ok');
});

module.exports = router;
