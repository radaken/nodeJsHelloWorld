<<<<<<< HEAD
console.log("Hello World!"); //Вывод в консоль
=======
var fs = require('fs');

//Удаление файлов & папки

fs.unlink('./new-one/some_new.txt', function () {
  fs.rmdir('new-one', function () { console.log("Srabotalo!"); });
});

//Создание папки & файлов

// fs.mkdir('new-one', function() {
//   fs.writeFile('./new-one/some_new.txt', 'Hello world!', function() {
//     console.log("Всё сработало!");
//   })
// })
>>>>>>> workingWithDirectory
