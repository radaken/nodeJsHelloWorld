var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/big.txt');
var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(chunk) {
  console.log("Hoвые данные получены:");
  myWriteShort.write(chunk);
})
