// .js :- extension
// javascript is a programing langauge which is used to develop our website.
// it is a precompiled langauge , scripted and interpted langauge.
// compiler :- which is convert our code into machine language(Binary number 0,1).
// Server-Side
// Output / Input methods .

console.log("Heloo Aashu \n\n\n");

// prompt("Enter your name");

console.warn("Warning");
console.error("error");

document.write("hello", "<br>");
document.write("hello");
document.write("hello");

// Variables... :- it is used to store our data.

// create a variable

x = -10;
console.log("x is :", x);

// keywords :- let , var , const

// let
//  1. it is block scope.
{
  let a = 20;
  console.log("a", a);
}
// console.log(a)

// 2. it cannot be re-declared.

let y = 10;
console.log(y + 10);
// re-assign.
y = 30;
console.log(y + 20);

let y1 = 30;

// Var
// 1. it can be re-declared
// 2. it cannot be a block scope
{
  var bb = 3;
}
console.log(bb);
var b = 30;
var b = 40;

// const :- constant
// 1. it cannot be re-declared.
// 2. it cannot be re-assign.
// 3. it can be a block scope.
const k = 20;
// k = 40;

// Variables names / identifiers
// 1. Alphabets (a-z)(A-Z)
// Case-sensitive
let j = 20;
let J = 40;
console.log(j);
console.log(J);
// 2. Names
let aashu = 40;
// 3. underscore
let _aashu20 = 30;
// 4. alphabtes + number
let a10 = 6;
let aashhu30 = 3;
// 5. camelCase
let javaScriptCss;
let aashuYadav;
// 6. Pascal Case
let AshuYadavv;
// 7. Snake case
let aashu_yadav_kumar_;
let AASHU;

// Data Types :-
