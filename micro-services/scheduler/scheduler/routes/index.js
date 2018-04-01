var express = require('express');
var router = express.Router();
var scheduler = require('./utils/scheduler');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(scheduler.running+"is running å");
  res.render('index', { title: 'Express' });
});

module.exports = router;
