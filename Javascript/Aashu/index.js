// // // // // .js :- extension
// // // // // javascript is a programing langauge which is used to develop our website.
// // // // // it is a precompiled langauge , scripted and interpted langauge.
// // // // // compiler :- which is convert our code into machine language(Binary number 0,1).
// // // // // Server-Side
// // // // // Output / Input methods .

// // // // console.log("Heloo Aashu \n\n\n");

// // // // // prompt("Enter your name");

// // // // console.warn("Warning");
// // // // console.error("error");

// // // // document.write("hello", "<br>");
// // // // document.write("hello");
// // // // document.write("hello");

// // // // // Variables... :- it is used to store our data.

// // // // // create a variable

// // // // x = -10;
// // // // console.log("x is :", x);

// // // // // keywords :- let , var , const

// // // // // let
// // // // //  1. it is block scope.
// // // // {
// // // //   let a = 20;
// // // //   console.log("a", a);
// // // // }
// // // // // console.log(a)

// // // // // 2. it cannot be re-declared.

// // // // let y = 10;
// // // // console.log(y + 10);
// // // // // re-assign.
// // // // y = 30;
// // // // console.log(y + 20);

// // // // let y1 = 30;

// // // // // Var
// // // // // 1. it can be re-declared
// // // // // 2. it cannot be a block scope
// // // // {
// // // //   var bb = 3;
// // // // }
// // // // console.log(bb);
// // // // var b = 30;
// // // // var b = 40;

// // // // // const :- constant
// // // // // 1. it cannot be re-declared.
// // // // // 2. it cannot be re-assign.
// // // // // 3. it can be a block scope.
// // // // const k = 20;
// // // // // k = 40;

// // // // // Variables names / identifiers
// // // // // 1. Alphabets (a-z)(A-Z)
// // // // // Case-sensitive
// // // // let j = 20;
// // // // let J = 40;
// // // // console.log(j);
// // // // console.log(J);
// // // // // 2. Names
// // // // let aashu = 40;
// // // // // 3. underscore
// // // // let _aashu20 = 30;
// // // // // 4. alphabtes + number
// // // // let a10 = 6;
// // // // let aashhu30 = 3;
// // // // // 5. camelCase
// // // // let javaScriptCss;
// // // // let aashuYadav;
// // // // // 6. Pascal Case
// // // // let AshuYadavv;
// // // // // 7. Snake case
// // // // let aashu_yadav_kumar_;
// // // // let AASHU;

// // // // // Data Types :-

// // // // 1. primitive data types :- which is store single data
// // // // integer
// // // let x = 20;
// // // // string :- string are used to store character values.
// // // // string used into single and double quotes
// // // let y = "aashu";
// // // let y1 = "aashu";

// // // let num = "10a";

// // // // boolean :-
// // // let b = true;
// // // let b1 = false;

// // // // null :-
// // // let x1 = null;

// // // // undefined
// // // let ab;
// // // console.log(ab);

// // // // 2. non-primitive data types :- which is store multiple data
// // // // array :- array is used to store multiple values.

// // // let arr = [1, 2, 4, 4, 5, 67, 8, 9, 9, "data", true, null, {}];
// // // console.log(arr);

// // // // object ;- object used to store multiple used but in key and values.

// // // let obj = {
// // //   id: 1,
// // //   name: "aashu",
// // //   course: "web designing",
// // //   rollno: 20,
// // // };

// // // console.log(obj.name);

// // // Operators
// // // 1. Arithmetic OP
// // // +
// // // -
// // // *
// // // /
// // // ** = expontation (power)
// // // % = modulus (remainder)
// // // ++ increment
// // // -- decrement

// // let num = 10;
// // let num1 = 20;
// // let num2 = "10";

// // let add = num + num1;

// // console.log(num + num1);
// // console.log(num + num2);
// // console.log(add + 20);

// // let x = 21;
// // let y = 3;
// // // 2 ki power 3
// // console.log(x ** y);

// // console.log(x % y);

// // let a = 10;
// // // prefix and postfix
// // let xy = ++a;
// // console.log(xy);
// // console.log(a);

// // // a = 11
// // let yy = a++;
// // console.log(yy);
// // console.log(a);

// // // 2. Assignment OP
// // // =
// // // +=
// // // -=
// // // *=
// // // /=
// // // **=
// // // %=

// // let num3 = 10;
// // // let num4 = num3 + 10;
// // num3 += 20;
// // num3 *= 20;

// // num3 **= 2;

// // // console.log(num4);
// // console.log(num3);

// // // 3. Comparision OP :- true and false
// // == equal value.
// // != vice versa of equal value.
// // === equal value and type
// // !== vice versa equal value and type
// // <
// // >
// // <=
// // >=

// // let x = 10;
// // let y = 10;
// // let z = "10";

// // console.log(x != y);
// // console.log(x == z);
// // console.log(x === z);

// // let num = 40;
// // let num1 = 40;
// // console.log(num >= num1);

// // // 4. Logical OP
// // && and
// // true && true = true
// // true && false = false
// // false && true = false
// // false && false = false

// // || or
// // true || true = true
// // true || false = true
// // false || true = true
// // false || false = false

// // ! vice versa

// // let a = 10;
// // let b = 30;
// // let c = 20;
// // let d = 30;

// // console.log(a >= b || !(a == b && b == c) || c == d);

// // console.log(!(b > a));

// // Statements / condtional statements / if-else statements / conditions :- it is a statment which is run when our condition is true.

// // if (condition) {
// //   // code to be executed
// // }
// // else if (condition) {
// //   // code to be executed
// // }
// // else if (condition) {
// //   // code to be executed
// // }
// // else if (condition) {
// //   // code to be executed
// // }
// // else if (condition) {
// //   // code to be executed
// // }
// // else if (condition) {
// //   // code to be executed
// // }
// // else {
// //   // default condition
// // }

// // Greater number (2 number):-
// let x = 30;
// let y = 30;

// // if (x > y) {
// //   console.log("x is greater than y ", x);
// // } else {
// //   console.log("y is greater than x ", y);
// // }

// if (x > y) {
//   console.log("x is greater than y ", x);
// } else if (y > x) {
//   console.log("y is greater than x ", y);
// } else if (x == y) {
//   console.log("x is equal to y");
// }

// let a = 120;
// let b = 90;
// let c = 40;

// if (a > b && a > c) {
//   console.log("a is greter ", a);
// } else if (b > a && b > c) {
//   console.log("b is greter ", b);
// } else {
//   console.log(" c is greater", c);
// }

// // Age
// // Grade

// let user = "aashu";
// let password = parseInt(prompt("Enter your password"));

// if (user === "aashu" && password === 1234) {
//   console.log("login");
// } else {
//   console.log("invalid details");
// }
// // Input value
// // always return a string
// // ParseInt() :- convert string into integer.
// // let math = parseInt(prompt("Enter your math numbers"));
// // let hindi = parseInt(prompt("Enter your hindi numbers"));
// // let english = parseInt(prompt("Enter your eng numbers"));

// // if (math >= 33 && hindi >= 33 && english >= 33) {
// //   console.log("pass");
// //   console.log(math + english + hindi);
// // } else {
// //   console.log("fail");
// // }

// // Switch Statement

// let week = 2;
// switch (week) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("not match");
// }

// // odd or even
// let num = parseInt(prompt("Enter number odd or even"));
// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// Loops :- It a block of code which is run as well as our condition is true.

// while loop :-
// 1. initialization
// 2. condition
// 3. exit the loop :- increment or decrement

// while (condition) {
//   // code to be executed
// }

// let x = 0;

// while (x <= 10) {
//   console.log(x);
//   x++;
// }

// Do-while loop:- one time run on the false condition.

// let y = 0;
// do {
//   console.log(y);
//   y++;
// } while (y > 10);

// for loop :-

for (let z = 0; z <= 10; z++) {
  console.log(z);
}

// Print numbers from 1 to 10 using a for loop.

// Print all even numbers between 1 and 20.

// Write a loop to calculate the sum of numbers from 1 to 10.

// Use a while loop to print numbers from 10 to 1 (reverse).

// multiplication table on any number.


