"use strict";

// задача 1
let mounth = "3";
switch (mounth) {
  case "1":  case "2":  case "12":
    console.log("Winter");
    break;
  case "3":  case "4":  case "5":
    console.log("Spring");
    break;
  case "6":  case "7":  case "8":
    console.log("Summer");
    break;
  case "9":  case "10":  case "11":
    console.log("Autumn");
    break;
  default:
    console.log("This's not a number of mounth");
}

 //task 2
 let leng = 3;
 let itemone = 5;
 let result;
  if (itemone === 1) {
   leng*= 0.1
 }
 else if (itemone === 2) {
  leng*= 1000
}
else if (itemone === 3) {
 leng*= 1
}
else if (itemone === 4) {
 leng*= 0.001
}
else if (itemone === 5) {
 leng*= 0.01
}
 result = `длина ${leng} метров`
 console.log(result);

 //task 3
 // Дано целое число, лежащее в диапазоне от -999 до 999.
 //    Вывести строку - словесное описание данного числа вида
 //    "отрицательное двузначное число",
 //    "нулевое число",
 //    "положительное однозначное число" и т.д.


let num = 15;
let words;
if (num > -1000 && num < -99) {
	words = "отрицательное трехзначное число";
}
else if (num > -99 && num < -9) {
	words = "отрицательное двузначное число";
}
else if (num > -9 && num < 0) {
	words = "отрицательное однозначное число";
}
else if (num === 0) {
	words = "нулевое число";
}
else if (num > 0 && num < 10) {
	words = "положительное однозначное число";
}
else if (num > 9 && num < 100) {
	words = "положительное двузначное число";
}
else if (num > 99 && num < 1000) {
	words = "положительное трехзначное число";
}

console.log(words);

// task4
// Вывести через console.log все числа от 1 до 100, с двумя исключениями.
//     Для чисел, нацело делящихся на 3, она должна выводить ‘Three’,
//     а для чисел, делящихся на 5 (но не на 3) – ‘Five’.
//     Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 != 0) {
    console.log("three");
  }
  else if (i % 5 === 0 && i % 3 != 0) {
    console.log("five");
  }
  else if (i % 3 != 0 || i % 5 != 0 || i % 15 != 0) {
    console.log(i)
  }
  else if (i % 15 === 0) {
    console.log("three five")
  }
}
// task 5*. Пользователь вводит год, необходимо определить
//     является ли он високосным. Примеры данных для тестирования:
//     1) '2000' – високосный год
//     2) '1800' – не високосный год
var number = prompt("Введите год");
if (number % 4 === 0 && number % 100 != 0) {console.log("Это високосный год");}
else if (number % 400 === 0) {console.log("Это високосный год");}
else {
  console.log("Это обычный год");
}
// Task 6*. Задать количество тарелок и количество моющего средства.
//     Моющее средство расходуется из расчета 0,5 на одну тарелку.
//     В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
//     В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
var plate = 5;
var soap = 15;
let x = 0;
let y = 0;
while (x < plate && y < soap) {
  x+= 1
  y+=0.5;
console.log(x, (soap - y));
}
console.log(`Тарелок осталось ${(plate - x)} средства осталось ${(soap - y)}`);
