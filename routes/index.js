var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let model = { 
    title: 'pesTest',
    msg: process.env.MSG || 'This is dev'
  };
  res.render('index', model);
});

module.exports = router;
