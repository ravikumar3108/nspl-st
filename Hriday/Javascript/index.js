// // //  create a varibale
// // // Declare a variable
// // x = 10
// // // / KeyWords
// // // let
// // // var

// // let y = 10
// // console.log(y)
// // // re-assignment
// // y = 20
// // console.log(y)

// // // {} = block scope
// // {
// //     let h = 10
// //     console.log(h)

// // }

// // const k = 10

// // // alphabets , name
// // // alpha + number
// // x10 = 30
// // // underscore
// // _iiii
// // // Camel case
// // myVariableFirst;
// // // PAscal Case
// // MyVariable
// // // Snake Case
// // my_variale_


// // Data Types '
// //1... Primitive Data types:- Single data store
// // String "" ''
// let x = "Hriday"
// let y = null
// // Number
// // Bigint
// // Boolean = true and false
// // Undefined =
// // Null
// let c;
// console.log(c)


// //2..... Non-primitive
// // Array
// let arr = [1, 2, 4, 7, 89, 0, 0, "Hhh", "nukk", true, false, null]

// // Object = key and value pair
// let obj = {
//     name: "Hriday",
//     classe: "12th",
//     Rollno: 12
// }

// console.log(obj.name)

// xx11 = 10
// xx11 += 10
// https://www.w3schools.com/js/js_assignment.asp



// Javascript Arithmetic And Assignment Op
// Javascript Comparision And Logical Op


// If else statements
// // Conditional Statements
// // Very often when you write code, you want to perform different actions for different decisions.

// // You can use conditional statements in your code to do this.

// // In JavaScript we have the following conditional statements:

// // Use if to specify a block of code to be executed, if a specified condition is true
// // Use else to specify a block of code to be executed, if the same condition is false
// // Use else if to specify a new condition to test, if the first condition is false
// // Use switch to specify many alternative blocks of code to be executed


// if (condition) {

// } else {

// }



// if (condition) {

// } else if (condition) {

// }
// else {

// }



// let x = 8
// if(x > 10){
//     console.log("X is greater than 10")
// }else if(x < 10){
//  console.log("X is smaller than 10")
// }
// else if (x == 10){

// }
// else{

// }


// array methods
// 1
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(fruits)
// 2
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.length = 2;
// console.log(fruits)
// 3
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[2] = 5;
// console.log(fruits)
// 4
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let x = fruits.join(" * ")
// console.log(x)
// 5
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop()
// console.log(fruits)
// 6
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits)
// 7
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)
// 8
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("lemon");
// console.log(fruits)
// 9
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";
// console.log(fruits)
// 10
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits)
// 11
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren)
// 12
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myDesis = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys , myDesis);
// console.log(myChildren)
// 13
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");
// console.log(myChildren)
// 14
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits)
// 15
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2);
// console.log(fruits)
// 16
// const myArr = [[1, 2], [3, 4], [5, 6]];
// const newArr = myArr.flat();
// console.log(newarr)
// 17
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newarr)
// 18
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)
// 19
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
// console.log(fruits)
// 20
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced)
// 21
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus)
// 22
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)
// 23
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// console.log(citrus)

// Initialise
// condition
// increment / decrement  (exit the loop)


// let x = 0

// // while (x <= 10) {
// //     console.log(x)
// //     x++
// // }

// do {
//     console.log(x)
//     x++

// } while (x > 10)


// for (let y = 0; y < 20; y++) {
//     console.log(y)
// }

// let ex = 1

// switch (ex) {
//     case 1:
//         // code block
//         console.log("x")
//     break;
//     case 2:
//         // code block
//         console.log("y")
//     break;
//     default:
//         console.log("default")
//     // code block
// }

// Function :- it is a block of code which is run when our function is call
// functioon is reusable  

//  create a function 

function App(x, y) {

    console.log(x
        + y)
    console.log("functon running")
}

// Function calling
App(12, 24)
App(10, 48)


// Parameters and argumnets 
// default Parameters and argumnets 


// function App1(x, y = 19) {

//     console.log(x
//         + y)
//     console.log("functon running")
// }

// App1()


// return value 
// function App2(x, y) {
//     return x + y
// }

// let x = App2(122, 2)
// console.log(x * 56)


// USer input  = :- always return a string 
// parseInt()
let y = parseInt(prompt("Enter a Number"))
let z = y + 10
console.log(z)
// document.write(z)