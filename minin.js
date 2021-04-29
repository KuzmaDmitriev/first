// 1 Переменные
//var name = "Dmitriy";
//const lastName = "Kuzmenkov";
//let age = 26;

//name = "Dima";
//console.log(name);
// 6 Условные операторы
/*const courseStatus = "fail"; // ready, fail, pending

if (courseStatus === "ready") {
  console.log("Курс уже готов");
} else if (courseStatus === "pending") {
  console.log("Курс находится в процессе разработки");
} else {
  console.log("Курс не получился");
}*/

//const num1 = 42; //number
//const num2 = "42"; //string
//console.log(num1 === num2);

//const isReady = true;

/*if (isReady) {
  console.log("Всё готово!");
} else {
  console.log("Всё не готово");
}*/
//isReady ? console.log("Всё готово") : console.log("Всё не готово"); //Тернарное выражение

// 7 Булевая логика
// 9 Массивы

//const cars = ["Mazda", "Mercedes", "Ford"];

//console.log(cars.length);

//const cars = new Array ("Mazda", "Mercedes", "Ford");

/*console.log(cars[1]);
console.log(cars[0]);
console.log(cars[3]);

cars[0] = "Porsche";

console.log(cars);

cars[cars.length] = "Mazda";

console.log(cars);*/

// 10 Циклы

/*const cars = ["Mazda", "Mercedes", "Ford"];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log(car);
}*/

//console.log(0.4 + 0.2);

//console.log(4 / 10 + 2 / 10);

//console.log(+(0.4 + 0.2).toFixed(1));

//console.log(parseFloat((0.4 + 0.2).toFixed(1)));

// BigInt

//console.log(900719925474099199999n - 90071992547409919999n);
//console.log(-900719925474099199999n);
//console.log(-900719925474099199999.99n);// error

//console.log(10n - 4);// error

//console.log(parseInt(10n) - 4);

//console.log(10n - BigInt(4));

//console.log(5n / 2n);

// Math

/*console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));

console.log(Math.pow(5, 3));

console.log(Math.abs(-42));

console.log(Math.max(42, 12, 23, 11, 422));

console.log(Math.min(42, 12, 23, 11, 422));

console.log(Math.floor(42.6));

console.log(Math.ceil(42.6));

console.log(Math.round(42.6));//возвращает ближайшее целое

console.log(Math.trunc(42.6));//отсекает дробную часть

console.log(Math.random());

console.log(Math.sin(30));*/

// Example

/*function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomBetween(10, 42);

console.log(getRandomBetween(10, 42));*/

// Параметры по умолчанию

//const sum = (a, b = a * 2) => a + b;

//console.log(sum(40));

/*function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(3400, 4500, 2000);

console.log(res);*/

// Замыкания

/*function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Vladilen");

console.log(logWithLastName);

console.log(logWithLastName(" Minin"));
console.log(logWithLastName(" Kuzmenkov"));*/

// Массивы

/*const cars = ["Mazda", "Ford", "BMW", "Mercedes"];

console.log(cars);

const fib = [1, 1, 2, 3, 5, 8, 13];

console.log(cars.includes("Yamaha"));

const upperCaseCars = cars.map((car) => {
  return car.toUpperCase();
});

console.log(upperCaseCars);

console.log(cars);

const pow2Fib = fib.map(num => num **2);

console.log(pow2Fib);
sumAll*/

//const heading2 = document.querySelector(".h2-class");
//const heading2 = document.querySelector("#sub-hello");//Всегда возвращает 1 элемент
const heading2 = document.querySelector("h2");
//console.dir(heading2);
//console.log(heading2);

//const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll("h2");
console.log(h2List);
const heading3 = h2List[h2List.length - 1];
//console.log(heading3);

const heading = h2List[h2List.length - 2];

setTimeout(() => {
  addStylesTo(heading2, "JS");
}, 1500);

/*const link = heading3.querySelector("a");

link.addEventListener("click", () => {
  console.log("click on link");
});*/

setTimeout(() => {
  addStylesTo(heading3, "Yo!", "yellow");
}, 3000);

setTimeout(() => {
  addStylesTo(heading, "is awesome", "blue", "50px");
}, 4500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.background = "black";
  node.style.width = "100%";
  node.style.display = "block";
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

heading2.onclick = () => {
  if (heading2.style.color === "red") {
    heading2.style.color = "#000";
    heading2.style.backgroundColor = "#fff";
  } else {
    heading2.style.color = "red";
    heading2.style.backgroundColor = "#000";
  }
};

heading.addEventListener("dblclick", () => {
  if (heading.style.color === "blue") {
    heading.style.color = "#000";
    heading.style.backgroundColor = "#fff";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "#000";
  }
});
