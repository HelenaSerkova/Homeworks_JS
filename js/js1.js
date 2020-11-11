"use strict";

// задача 1
let a = 15;
let b = 25;
let c = a * b;
let d = 1000;
let vacant = d % c;
let info = `Осталось незанято ${vacant} кв.м.`
console.log(info);

// задача 2
let ovalone = 15;
let ovaltwo = 600;
let ovalonecm = ovalone*100;
let sq = ovalonecm - ovaltwo;
let infotwo = `Площадь кольца равна ${sq} кв.см`
console.log(infotwo)

// задача 3
let e = 11.5;
let f = 12;
let g = 10.3;
let h;
if (e < f) {
  h = e
} else {
  h = f
}
let i;
if (g < h) {
  i = g
} else {
  i = h
}
console.log(i);

// task 4
let m = 8.5;
let n = 11.45;
let j = 10 - m;
let k = 10 - n;
if (j < 0) {
  j = -1 * j
}
if (k < 0) {
  k = -1 * k
}
let l;
if (j < k) {
  l = m
} else {
  l = n
}
console.log (l)

// task 5 (не поняла, если это делать не в js, то в чем?)
let xa = 1;
let ya = 1;
let za = 0;
let xb = 1;
let yb = 5;
let zb = 0;
let xc = 4;
let yc = 1;
let zc = 0;
let valAB;
let valBC;
let valAC;
valAB = ((xa - xb)**2 + (ya - yb)**2 + (za - zb)**2) **0.5;
valBC = ((xb - xc)**2 + (yb - yc)**2 + (zb - zc)**2) **0.5;
valAC = ((xa - xc)**2 + (ya - yc)**2 + (za - zc)**2) **0.5;
let legone;
let legtwo;
let hypoten;
if (valAB < valBC) {
  hypoten = valBC
}
if (valBC < valAB) {
  hypoten = valAB
}
if (valAC > hypoten) {
  hypoten = valAC
}
if (hypoten === valAB) {
  legone = valBC
  legtwo = valAC
}
if (hypoten === valBC) {
  legone = valAB
  legtwo = valAC
}
if (hypoten === valAC) {
  legone = valAB
  legtwo = valBC
}
let answer;
if (hypoten**2 === legone**2 + legtwo**2) {
  answer = `треугольник прямоугольный`
} else {
  answer = `треугольник не прямоугольный`
}
console.log(answer);
