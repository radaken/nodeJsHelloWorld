var fs = require('fs');

// Читаем файл
fs.readFile('text.txt', 'utf8', function(err, data){
  console.log(data);
});
// Создаём
fs.writeFile('some.txt', 'hi, its me', function(err, data){});

console.log("test");
