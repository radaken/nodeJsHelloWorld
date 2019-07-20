var fs = require('fs');

// Читаем файл
var file_readed = fs.readFileSync('text.txt', 'utf8');

// Создаём / редактируем файл
var message = "Привет мир! \n" + file_readed;
fs.writeFileSync('someNewFile.txt', message);
