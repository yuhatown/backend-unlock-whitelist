const { readWhitelist, addWhitelist, putWhitelist, deleteWhitelist } = require('../controller');

router.get('/', function(req, res, next) {

    readWhitelist();
  
    res.send('ok');
  });
  
  router.post('/add', function(req, res, next) {
    const { name, address } = req.body;
  
    addWhitelist(name, address);
  
    res.send('ok');
  });
  
  router.put('/', function(req, res, next) {
    const { id, name, address } = req.body;
  
    putWhitelist(id, name, address);
  
    res.send('ok');
  });
  
  router.delete('/', function(req, res, next) {
    const { id } = req.body;
  
    deleteWhitelist(id);
  
    res.send('ok');
  });

module.exports = router;
