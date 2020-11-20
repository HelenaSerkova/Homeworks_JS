"use strict";
// Task 1. Написать функцию сравнения двух массивов. Функция принимает на вход два массива,
// сравнивает их и возвращает true, если массивы равны и false, если не равны.


function comparet (arr_1, arr_2){
  if (arr_1.length != arr_2.length){ //условие если длины массивов не равны
    console.log(false);
  }
  if (arr_1.length == arr_2.length){ //условие если длины массивов равны
    console.log(true);
  }
}
  let arr1 = [1, 5, 7, 4, 8];
  let arr2 = [1, 5, 7, 4];
  comparet (arr1, arr2);

  // Task 2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
  // третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
  // Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
  // Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].

  function range (arg1, arg2, arg3=1) {
    let arr = [];
    for (let i = arg1, y=0; i <= arg2; i+=arg3, y++) {
      arr[y] = i;
    }
    console.log(arr);
  }
range (1, 10, 2);


// Task 3. Построить объект студент со свойствами:
// Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// Написать отдельную функцию, которой передается объект студент,
// а она выводит его содержимое.
let Student = {name: 'Nick', surname: 'Ivanov', age: 21, interests: ['chess',
'books', 'travels', 'science'], education: 'ITMO' };
function getStudent (anyobject) {
  for (let prop in anyobject) {
    console.log(prop + ": " + anyobject[prop]);
  }
}
getStudent (Student);
