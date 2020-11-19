"use strict";

// task 1
// 1. Заданы два массива
// A = [ 12, 4, 3, 10, 1, 20 ]
// B = [-3, -7, -100, -33]
// необходимо их объединить
// в один массив C добавив
// массив B в конец(в начало) A.
let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];
let C = B.concat(A);

console.log(C);



// task 3
//Задан массив  - [12,4,3,10,1,20].
//Удалить из него наименьшее и наибольшее значение.
var D = [12,4,3,10,1,20];
let min = D[0], max = D[0];
for (let i = 1; i < D.length; i++){
	if(D[i] > max) {
		max = D[i];
	} else if (D[i] < min) {
		min = D[i];
	}
}
for (let i = 1; i < D.length; i++){
  if (D[i] === max) {
    delete D[i];
  }
  else if(D[i] === min) {
    delete D[i];
  }
}
console.log(D);
