// // // // Javascript :- Javascript is a programing language which is used to develop our web page.
// // // // it is a scripted , interpted and precomplied language.

// // // // output function

// // // console.log("Heloo Priyanka");
// // // console.warn("Warning");
// // // console.error("Error");

// // // // alert("Make a Alert")

// // // // user input
// // // prompt("Enter Your Name");

// // // // Loops :- it is a statement which is run as well as our condition is true.(cyclic process)

// // // // While loop
// // // // do-while loop
// // // // for loop

// // // // Initialise :-
// // // // condtion
// // // // increment / decrement
// // // let x = 0;

// // // // while (x <= 10) {
// // // //   console.log(x);
// // // //   x++;
// // // // }

// // // // do {
// // // //     console.log(x)
// // // //     x++
// // // // } while (x > 10);

// // // for (let y = 1; y > 30; y++) {
// // //   console.log(y);
// // // }

// // // // String :- it is used to store character values.
// // // String works on index number
// // // Whitespace is also countable.

// // let str = "Heloo my name is Neeraj.Heloo";
// // let str1 = "He   loo";
// // console.log(str);

// // console.log(str1.length);
// // // Strings are generally immutable, meaning they cannot be changed after creation
// // console.log(str[4]);

// // // replace or replaceAll
// // let a = str.replace("Heloo", "Hii");
// // let a1 = str.replaceAll("Heloo", "Hii");
// // console.log(a);
// // console.log(a1);

// // // Concat or slice

// // // Uppercase or Lowercase
// // let b = str.toUpperCase();
// // let b1 = str.toLowerCase();
// // console.log(b);
// // console.log(b1);

// // // trim and trimStart and TrimEnd

// // let x = "    Heloo    ";
// // console.log(x.length);
// // let tr = x.trim();
// // let tr1 = x.trimStart();
// // console.log(tr.length);
// // console.log(tr1.length);

// // //
// // console.log(str.charAt(3));
// // let cc = str.repeat(3);
// // console.log(cc);

// // // Function :- it is a block of code which is run when our function is call.
// // Function is reusable.

// // Create a function
// function MyFunction() {
//   console.log("Code to be Executes...");
// }

// // Call the function
// MyFunction();
// MyFunction();
// MyFunction();
// MyFunction();
// MyFunction();

// // function AddData() {
// //   let a = 10;
// //   let b = 4;
// //   console.log(a + b);
// // }

// // AddData();
// // AddData();
// // AddData();
// // AddData();

// // Arguments :- it is declare into the function calling parenthesis
// // Parameters :-it is declare into the create function  parenthesis

// // function AddData(a, b) {
// //   console.log(a + b);
// // }

// // AddData(10, 20);
// // AddData(101, 20);
// // AddData(102, 20);
// // AddData(103, 20);
// // // AddData(102);

// // Default parameters :- it is decalre always into the last
// function AddData(a, b = 10) {
//   console.log(a + b);
// }

// AddData((b = 10), (a = 39));

// // default argumnets

// // Return value
// // Default values

// function MultplyData(a, b) {
//   let c = a * 10;
//   return c;
// }

// let d = MultplyData(1, 3);
// let e = d * 10;
// console.log(d);
// console.log(e);

// Dom :- Document Object Model (Real Dom or Virtual Dom)

// Selectors:-
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.getElementsById()

let main = document.getElementById("main");

// TO write something into our elements:-
main.innerHTML = "My name is Priyanka";

// let main = document.getElementsByClassName("main")[0]
// let main = document.getElementsByTagName("h1")[0]

// Create Elements :-
let h = document.createElement("h1");
// Append

let div = document.getElementsByClassName("pp")[0];

div.appendChild(h);

// remove child
// div.removeChild(h)

// Create an Attributes

div.setAttribute("id", "maddd");
div.removeAttribute("id");

// Styling :-
document.getElementById("main").style.backgroundColor = "red";
document.getElementById("main").style.color = "green";
document.getElementById("main").style.padding = "10px";
