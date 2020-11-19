"use strict";

// task 1
// 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
let str = "987534"
let regExp = /[^а-яА-Я ]/g;
let arr = str.match(regExp);
let sum = 0;
for(let i = 0; i < arr.length; i++){
 sum+= parseInt(arr[i]);
}
console.log(sum);



// 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
let str2 = 'stroka stroka stroka';
let str3 = str2.replace(/o/g, "oo");
console.log(str3);
