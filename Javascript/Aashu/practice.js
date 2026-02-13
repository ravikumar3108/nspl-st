// largest number
let arr = [1, 2, 3, 4, 5, 6, "arr"];
let ab = [1, 2, 3, 4, 5, 5, 6, "ab"];
let abc = [1, 2, 3, 4, 5, 5, 6, "abc"];
// concat
let con = abc.concat(ab, abc);
console.log(con);

let la = Math.max(...arr);
let small = Math.min(...arr);
// ...arr :- spread operator
console.log(la);
// arrow function
// ()=> {}
let sum = arr.reduce((a, b) => a + b, 0);
// a :- iterable of our aaray.
// b : current aaray
console.log(sum);

let av = sum / arr.length;
console.log(av);

// Check karo koi number array me exist karta hai ya nahi.

let ch = arr.includes(42);
console.log(ch);

// filter

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = arr1.filter((a) => {
  return a % 2 === 0;
});
let odd = arr1.filter((a) => {
  return a % 2 !== 0;
});
console.log(even);
console.log(odd);

// Map method :-
let mul = arr.map((a) => a * 2);
console.log(mul);

// let In = arr1.indexOf(50);
// console.log(In);

let dupl = [1, 2, 3, 2, 4];
console.log(dupl);
dulp2 = [5, 6, 5, 7, 6];
let x = new Set([...dupl]);
let mer = new Set([...dupl, ...dulp2]);
console.log(x);
console.log(mer);

let str = ["aashu", "sahil", "rajesh"];
// convert array into string
console.log(str);
let st = str.join(",");
console.log(st);

let v = "Aashu kumar, aashu , kumar";
let a = v.split(",");
console.log(a);
