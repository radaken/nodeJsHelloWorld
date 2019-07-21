var http = require('http');

var server = http.createServer(function(req, res) {
  console.log("URL страницы:" + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Привет мир!');
})

server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000");
//Заходить на 127.0.0.1:3000
