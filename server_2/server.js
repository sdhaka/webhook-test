var express     = require('express')
  , app         = express()
  , mongoose    = require('mongoose')
  , fs          = require('fs');
  
app.get('/', function(req, res){
  res.send('Hello World:' + process.env.TEST);
});

app.get('/empty', function(req, res){
  var response = '';
  
  if (fs.existsSync('empty')) {
    response += 'directory "empty" exists <br>'
    // Do something
  }
  if (fs.existsSync('empty.txt')) {
    response += 'file "empty.txt" exists'
    // Do something
  }
  
  res.send(response);
});

var server = app.listen(process.env.WEB_PORT || 80, function() {
  console.log('Listening on port %d', server.address().port);
});
