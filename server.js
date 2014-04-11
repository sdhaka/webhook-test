var express     = require('express')
  , app         = express()
  , mongoose    = require('mongoose');
  
app.get('/hello.txt', function(req, res){
  res.send('Hello World:' + process.env.TEST);
});

var server = app.listen(80, function() {
  console.log('Listening on port %d', server.address().port);
});