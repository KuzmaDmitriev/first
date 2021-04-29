//alert("Hello");

//result = prompt(title, []);

//let age = prompt("How old are you?", 100);

//alert(`Тебе ${age} лет!`);

//let test = prompt("Test", "");

//alert(test);

//result = confirm(question);

//let isBoss = confirm("Do you command here?");

//alert(isBoss);

//let money = prompt("How much money do you have?");

//alert(money);

//let name = prompt("What your name?");

//alert(name);

//let value = true;
//alert(value);

//alert(Boolean(1));
//alert(Boolean(0));

//alert(Boolean("Hello"));
//alert(Boolean(""));

//alert(Boolean("0"));
//alert(Boolean(" "));

//Унарный операнд, применяется к одному операнду

//let x = 1;

//x = -x;

//alert(x);

//Бинарный операнд, применяется к двум операндам

//let y = 1, z = 3;

//alert(z - y);

//alert(5 % 2); //остаток от деления 1
//alert(8 % 3); //остаток от деления 2

//alert(2 ** 2); //2 в степени 2
//alert(2 ** 3); //2 в степени 3

//alert(4 ** (1 / 2)); // 4 в степени 1/2 - эквивалентно взятию квадратного корня
//alert(8 ** (1 / 3)); // 8 в степени 1/3 - эквивалентно взятию кубического корня

//let s = "my" + "string";
//alert(s);

//let v = "1" + 2;
//alert(v);
//alert(typeof(v));

//alert(2 + 2 + "1");

//alert(6 - "2");

//alert("6" / "2");

//Не влияет на число

//let x = 1;
//alert(+x);

//let y = -2;
//alert(+y);

//let t = true;
//alert(+t);
//alert(typeof +t);

//alert(+"");

//let apples = "2";
//let oranges = "3";

//alert(apples + oranges);

//alert(+apples + +oranges);

//alert(Number(apples) + Number(oranges));

//let x = 2 * 2 + 1;
//alert(x);

//let a = 1;
//let b = 2;
//let c = 3 - (a = b + 1);

//alert(a);
//alert(c);

//let n = 2;

//n *= 3 + 5;

//alert(n);

//let counter = 2;
//counter--;
//alert(counter);

//let counter = 1;
//let a = ++counter;
//alert(a);

//let counter = 1;
//let a = counter++;
//alert(a);

//let counter = 1;
//alert(2 * ++counter);

//let counter = 1;
//alert(2 * counter++);

//let counter = 1;
//alert(2 * counter);

//let a = (1 + 2, 3 + 4);

//alert(a);

//let a = 1, b = 1;

//let c = ++a;

//alert(c);

//let d = b++;

//alert(d);

/*let a = 2;
let x = 1 + (a *=2);
console.log(a);
console.log(x);*/

/*console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log("2" * "3");
console.log(6 / "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);*/

//1)
//let a = +prompt("First number", 1);
//let b = +prompt("Second number", 2);
//alert(a + b);
//2
//let a = prompt("First number", 1);
//let b = prompt("Second number", 2);
//a = Number(a);
//b = Number(b);
//alert(a + b);
//3
//let a = prompt("First number", 1);
//let b = prompt("Second number", 2);
//alert(+a + +b);

// Операторы сравнения

//a > b, a < b;
//a >= b, a <= b;
//a = b; // a присвоить b
//a == b; // a равно b
//a != b; // a не равно b

//alert(2 > 1);
//alert(2 == 1);
//alert(2 != 1);

//let result = 5 > 4;
//alert(result);

//alert("Я" > "А");
//alert("Коты" > "Кода");
//alert("Сонный" > "Сон");

//alert("a" > "A");

//alert("2" > 1);
//alert("01" == 1);

//alert(true + false);

/*let a = 0;
alert(Boolean(a)); //false

let b = "0";
alert(Boolean(b)); //true

alert(a == b);
*/

//alert(0 == false);
//alert("" == false);

//alert(0 === false);
//alert(null === undefined);
//alert(null == undefined);

//alert(null > 0); //false
//alert(null == 0); //false
//alert(null >= 0); //true

//alert(undefined > 0); //false
//alert(undefined < 0); //false
//alert(undefined == 0); //false

//alert(5 > 4);
//alert("ананас" > "яблоко");
//alert("2" > "12");
//alert(undefined == null);
//alert(undefined === null);
//alert(null == "\n0\n");
//alert(null === +"\n0\n");

/*let year = prompt("В каком году опубликована ECMAScript-2015", "");

//if (year == 2015) alert("Вы правы!");

if (year == 2015) {
  alert("Правильно!");
  alert("Вы такой умный!");
} else {
  alert("Неправильно!");
}*/

/*let year = prompt("В каком году опубликована ECMAScript-2015", "");

if (year < 2015) {
  alert("Рановато");
} else if (year > 2015) {
  alert("Поздновато");
} else {
  alert("Верно!");
}*/

/*let accessAllowed;
let age = prompt("Сколько Вам лет", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);*/

//let accessAllowed = (age > 18) ? true : false;

//let age = prompt("Сколько тебе лет?", "");
//let accessAllowed = age > 18 ? true : false;
//alert(accessAllowed);

//let age = prompt("Сколько тебе лет?", "");
//let accessAllowed = age > 18;
//alert(accessAllowed);

/*let age = prompt("Возраст", 18);

let message = (age < 3) ? "Здравствуй, малыш":
(age < 18) ? "Привет!":
(age < 100) ? "Здравствуйте!":
"Какой необычный возраст!"

alert(message);*/

/*let age = prompt("Возраст", 18);

if (age < 3) {
  alert("Привет, малыш!");
} else if (age < 18) {
  alert("Привет!");
} else if (age < 100) {
  alert("Здравствуйте!");
} else {
  alert("Какой необычный возраст");
}*/

/*let company = prompt("Какая компания создала JS?", "");
if (company == "Netscape") {
  alert("Yes!");
} else {
  alert("No");
}*/

/*if (0) {
  alert("Привет");
}*/

/*let name = prompt("What official name for JS?", "");

if (name == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Неверно!");
}*/

let number = prompt();

