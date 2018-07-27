var express = require('express');
var router = express.Router();

const app = express();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('inside get request of members');
  res.end();
});

router.post('/', function(req, res, next) {
    res.send('inside the post request of members')
  });

  router.put('/', function(req, res, next) {
    res.send('inside the put request of members')
  });

  router.delete('/', function(req, res, next) {
    res.send('inside the delete request of members');
  });

module.exports = router;
