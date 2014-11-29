var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Duffland', description: 'Centro Cinofilo' });
});

module.exports = router;
