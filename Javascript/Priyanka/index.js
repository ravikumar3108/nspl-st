// // Javascript :- Javascript is a programing language which is used to develop our web page.
// // it is a scripted , interpted and precomplied language.

// // output function

// console.log("Heloo Priyanka");
// console.warn("Warning");
// console.error("Error");

// // alert("Make a Alert")

// // user input
// prompt("Enter Your Name");

// // Loops :- it is a statement which is run as well as our condition is true.(cyclic process)

// // While loop
// // do-while loop
// // for loop

// // Initialise :-
// // condtion
// // increment / decrement
// let x = 0;

// // while (x <= 10) {
// //   console.log(x);
// //   x++;
// // }

// // do {
// //     console.log(x)
// //     x++
// // } while (x > 10);

// for (let y = 1; y > 30; y++) {
//   console.log(y);
// }

// // String :- it is used to store character values.
// String works on index number
// Whitespace is also countable.

let str = "Heloo my name is Neeraj.Heloo";
let str1 = "He   loo";
console.log(str);

console.log(str1.length);
// Strings are generally immutable, meaning they cannot be changed after creation
console.log(str[4]);

// replace or replaceAll
let a = str.replace("Heloo", "Hii");
let a1 = str.replaceAll("Heloo", "Hii");
console.log(a);
console.log(a1);

// Concat or slice

// Uppercase or Lowercase
let b = str.toUpperCase();
let b1 = str.toLowerCase();
console.log(b);
console.log(b1);

// trim and trimStart and TrimEnd

let x = "    Heloo    ";
console.log(x.length);
let tr = x.trim();
let tr1 = x.trimStart();
console.log(tr.length);
console.log(tr1.length);

//
console.log(str.charAt(3));
let cc = str.repeat(3);
console.log(cc);

// Function :- 
// Dom :- 