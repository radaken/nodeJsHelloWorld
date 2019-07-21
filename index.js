var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  console.log("URL страницы:" + req.url);
/*Вывод HTML
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadShort.pipe(res);
  */
  //Вывод JSON
  res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
  var obj = {
    model: 'Audi',
    speed: '234',
    wheels: 4
  };
  res.end(JSON.stringify(obj));
})


server.listen(3000, '127.0.0.1');
console.log("Мы отслеживаем порт 3000");
//Заходить на 127.0.0.1:3000
