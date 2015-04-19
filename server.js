var express = require('express');
var cool = require('cool-ascii-faces');


var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/se', function (req, res) {
  res.send('testing');
});


app.get('/cool-ascii-faces', function (req, res) {
    res.send(cool());
});

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

   console.log("Node app is running at localhost:" + app.get('port'));

});
