var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express, hello world index' });
});


/* GET list page. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'hello world, list page' });
});

module.exports = router;