
//Подключение библиотеки для работы с файловой системой
var fs = require('fs');

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
