'use strict'
{
// Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;


let a;
let b;

a = parseInt(Math.random()*100) * randomPlusMinus();
b = parseInt(Math.random()*100) * randomPlusMinus();

console.log(`a = ${a}, b = ${b}`);

if (a >= 0 && b >= 0){
  console.log(`a - b = ${a - b}`);
} else if(a < 0 && b < 0) {
  console.log(`a * b = ${a * b}`);
} else if( (a >= 0 && b < 0) || (a < 0 && b >= 0) ) {
  console.log(`a + b = ${a + b}`);
}

/**
 * Функция случайным образом возвращает 1 или -1.
 * @returns {number}
 */
function randomPlusMinus() {
  if (Math.random() > 0.5) return 1;
  return -1;
}

}
