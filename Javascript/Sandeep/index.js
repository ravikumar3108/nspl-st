// JavaScript is the programming language of the web.

// It can update and change both HTML and CSS.

// It can calculate, manipulate and validate data.

// Output Function :- Console.log()

// Javascript is a scripted , interpted and precompiled language.

// Interpted :- which means reads the code line by line and executed.
// compiler :- it is used to convert our code into machine language.(0,1) Binary numbers


console.log("external file code")
console.warn("Warning")
console.error("Error")


// Variables :- Variables are used to store our data.

// Syntax =
// Keywords = Var , let , const 

// Create a variable
// x = varibale name
// = => assignment operator 
// 10 = integer data
let x = 10
console.log(x)


// Variables names :- Identifiers 
// 1. Alphabets / capital and small / names 
let sandeep = 30
console.log(sandeep)
// 2. Alphabets + numbers
let x10 = 30
let sandeep20 = 30

// 3. underscore
let _under = 30
let sandeep_kumar = 30
// 4. Camel case
let sandeepKumar = 30
// 5. pascal case
let SandeepKumar = 20
// 6. Not a number 
// let 10 = 10


// Let :- it cannot be redeclared :- 
let z = 10
// let z = 20
console.log("z is", z)

// Re-assign 
z = 30
console.log("z is", z)

// constant = it cannot be redecalred
const a = 10
// re-assign :- re-assign is not supported.
// a = 30
// console.log(a)


// Data Types:-
// 1. Integer

let num1 = 20
let num2 = 40
console.log(num1 + num2)

// 2. String : - string is used to store character(alphabets) values.
// String data store into single quotes and double quotes "" ''

let name = "kumar"
let name1 = 'kumar'
let numchar = "5"


// 3. bollean
let bl1 = true
let bl2 = false

// 4. null

let nl = null

// 5. undefined
let un;
console.log(un)

// 6. array :- Array is used to store multiple data/values

let arr = [1, 2, 4, 5, 6, 8, 9, "Name", null, undefined, true, false]
console.log(arr)

// 7. object : object is used to store multiple data/values in the form of key and values

let obj = {
    id: 1,
    name: "Sandeep",
    rollno: 21,
    classe: "12th"
}

console.log(obj)
console.log(obj.name)
console.log(obj.classe)
