var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('inside get request');
  res.end();
});


module.exports = router;
