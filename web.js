

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var index = fs.readFileSync('index.html');

var buffer = new Buffer(index,"utf-8");

var output = buffer.toString("utf-8");

app.get('/', function(request, response) {
  response.send(output);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
