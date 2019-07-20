var fs = require('fs');

// Читаем файл
var file_readed = fs.readFileSync('text.txt', 'utf8');

// Создаём  и заполняем файл
var message = "Привет мир! \n" + file_readed;
fs.writeFileSync('someNewFile.txt', message);
