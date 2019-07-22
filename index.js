//Подключение библиотеки для работы с файловой системой
var fs = require('fs');

//Подключаем библиотеку для HTTP-сервера
var http = require('http');

/*Удаление файлов & папки

fs.unlink('./new-one/some_new.txt', function () {
  fs.rmdir('new-one', function () { console.log("Srabotalo!"); });
});
*/

//Создание папки & файлов

// fs.mkdir('new-one', function() {
//   fs.writeFile('./new-one/some_new.txt', 'Hello world!', function() {
//     console.log("Всё сработало!");
//   })
// })

// Чтение и запись файлов потоками
// 
// var myReadShort = fs.createReadStream(__dirname + '/big.txt');
// var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');
//
// myReadShort.on('data', function(chunk) {
//   console.log("Hoвые данные получены:");
//   myWriteShort.write(chunk);
// });

// ****************ЗАПУСКАЕМ СЕРВЕР С МАРШРУТИЗАЦИЕЙ*******************
//
// var server = http.createServer(function(req, res) {
//   console.log("URL страницы:" + req.url);
//   if ((req.url === '/index') || (req.url === '/') || (req.url === '/style.css')) {
//   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//   fs.createReadStream(__dirname + '/index.html').pipe(res);
// } else if (req.url === '/about') {
//   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//   fs.createReadStream(__dirname + '/about.html').pipe(res);
// } else {
//   res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
//   fs.createReadStream(__dirname + '/404.html').pipe(res);
// }
// })
//
// server.listen(3000, '127.0.0.1');
// console.log("Мы отслеживаем порт 3000");

//Заходить на 127.0.0.1:3000
