'use strict'
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)

let num1 = +prompt('Введите число из диапазона [0, 999]');

function numberToObject(number) {
  if (number < 0 || number > 999 || !Number.isInteger(number)) {
    console.log('Ваше число вне [0, 999] диапазона, не целое число или вообще не число!');
    return {};
  }

  return {
    units: number % 10,
    tens: Math.floor(number / 10) % 10,
    hundreds: Math.floor(number / 100) % 10
  }
}

console.log(num1);
console.table(numberToObject(num1));

// 1.1 Сделайте в стиле es5, а затем в стиле es6, конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип.

//es5
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = (Math.floor((this.price * 0.75) * 10)) / 10;
};

let product1 = new Product('Хлеб', 29.9);
console.table(product1);

product1.make25PercentDiscount();
console.table(product1);

//es6
class ProductSame {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  make25PercentDiscount() {
    this.price = (Math.floor((this.price * 0.75) * 10)) / 10;
  }
}

let product2 = new ProductSame('Кофе', 1099.9);
console.table(product2);

product2.make25PercentDiscount();
console.table(product2);

// 1.2 Сделайте в стиле es5, а затем в стиле es6,
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.

//es5
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (newText) {
  this.text = newText;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

let post1 = new AttachedPost('Сергей', 'Мой крутой текст.', new Date());
console.table(post1);

post1.edit('Этот текст ещё лучше.');
post1.makeTextHighlighted();
console.table(post1);

//es6
class PostSame {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(newText) {
    this.text = newText;
  }
}

class AttachedPostSame extends PostSame {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let post2 = new AttachedPostSame('Миша', 'Его текст.', new Date());
console.table(post2);

post2.makeTextHighlighted();
post2.edit('Этот текст, скажем прямо, не лучше прошлого.');
console.table(post2);
