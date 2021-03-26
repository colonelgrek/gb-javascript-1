'use strict'
{
// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
// Обязательно использовать оператор return.
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.
let number1 = +prompt("Введите первое число");
let number2 = +prompt("Введите второе число");
let operator = prompt("Введите математический оператор (+, -, /, *)");

mathOperation(number1, number2, operator);

function mathOperation(arg1, arg2, operation){
  switch (operation) {
    case '+' :
      alert(addition(arg1, arg2));
      break;
    case '-' :
      alert(subtraction(arg1, arg2));
      break;
    case '/' :
      alert(division(arg1, arg2));
      break;
    case '*' :
      alert(multiplication(arg1, arg2));
      break;
    default:
      alert( "Следует вводить один из следующих математических операторов: +, -, /, *" );
  }
}

function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}


}
