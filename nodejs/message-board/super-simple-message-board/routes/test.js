var express = require('express');
var router = express.Router();

/* test with afya project */
router.get('/', function(req, res, next) {
  res.send('index pacientes');
});

router.get('/novo', function(req, res, next) {
  res.send('novos pacientes');
});

router.post('/novo', function(req, res, next) {
  res.send(console.log('post feito'));
});

module.exports = router;
