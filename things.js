var arrayCounter = function(array) {
  return "В массиве находится " + array.length + " элементов.";
}
var conflict = function() {
  return "Опаньки!";
}
module.exports = {
  conflict:conflict,
  arrayCounter:arrayCounter
}; // Экспортируем функцию (для require() в index.js)
module.exports.multiply = function(x,y) {
  return `${x} умножить на ${y} равно ${x * y}`;
}
let someValue = 45;
module.exports.someValue = someValue;
