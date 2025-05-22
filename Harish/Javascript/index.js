
// // Output 

// console.log("Heloo HArish")
// // document.write("Heloo HArish")
// console.warn("Warning")
// console.error("Error")

// // alert("This Page Beloongs to JAvascript")


// // Variables :- Variables are used to store our data. 

// // create a variables (declare a varible)
// x = 10  // integer 

// console.log(x)

// //  names of our variable 
// // alphabets 
// // alphabets + number 
// x10 = 30
// //  underscore 
// _harish = "harish"
// // $dollar
// $kumar = 10
// // camelcase
// harsihKumar = 20
// //  pascal case 
// HarishKumar = 30

// // keywords
// // let ,var, const

// let y = 10
// // let y = 39
// console.log("y is = ", y)
// // re-assignment 
// y = 30

// console.log("y is = ", y)
// // 1. it cannot be re-decalred 
// // 2. it is a block scope 


// {
//     let xy = 10
// }
// // console.log(xy)


// // 2. var 
// // 1. it can be re-decalred 
// // 2. it cannot be  a block scope 


// // 3. const 
// // 1. it cannot be re-decalred 
// // 2. it is a block scope 
// // 3. it cannot be re-assign 


// const a = 10
// // a = 20
// // console.log(a)


// // Operators :- 
// // 1. Arithmetic operators 
// // + 
// // -
// // *
// // /
// // % modulus == remainder 
// // ** expontation
// // ++ increment 
// // -- decrement 

// // let a1 = 10
// // let b = 20
// // let c = a1 + b
// // let d = c * 2

// // console.log(c)
// // console.log("d is ", d)

// // let c1 = 10
// // let c2 = 3
// // console.log(c1 % c2)
// // console.log(c1 ** c2)

// // let x12 = 30
// // // prefix 
// // let inc = ++x12
// // console.log(x12)
// // console.log(inc)

// // // postfix

// // let inc1 = x12++ 
// // console.log(x12)
// // console.log(inc1)

// // 2. Assignment operators
// // = assign operator
// // += 
// // -=
// // *=
// //  /=
// // %=
// // **=

// let a1 = 10
// let b = 20

// let c = a1 + 10
// console.log(c)


// a1 += 10


// console.log(a1)








// // 3. Comparision operators (boolean)
// // == equal value 
// // === equal value and equal type 
// // !== vice versa
// // != vice versa
// // >
// // <
// // >=
// // <=

// let ab = 10
// let aa = 20
// let ac = "20"

// console.log(aa == ac)
// console.log(aa === ac)
// console.log(aa !== ac)
// console.log(ab == ac)
// console.log(ab != ac)




// // 4. logical operators
// // and &&
// //  or ||
// //  not ! 



// console.log(aa == ac)
// console.log(aa === ac)
// console.log(aa !== ac)
// console.log(ab == ac)
// console.log(ab != ac)

// and 
// true && false = false
// true && true = true
// false && true = false
// false && false = false

// or 
// true && false = true
// true && true = true
// false && true = true
// false && false = false


// ! not



let ab = 10
let aa = 20
let ac = "20"
let lg = (aa == ac) && (aa === ac)
let lg1 = (aa == ac) && (aa == ac)
console.log(lg1)


let or = !((aa == ac) || (aa === ac))
console.log(or)


// Condtions 
// If else statements :- it is a block of code which is run when our condtion is true.

//  syntax 
// if (condition){
//     // code to be executed 
// }
// else{
//     // code to be exceuted
// }

// User Input :- Always return a string 
// Convert Prompt string data into integerr p
// parseInt()


let a = parseInt(prompt("Enter a Number"))
let b = 11 

if (a === b) {
    console.log("a is equal to b")
}
else if (a > b) {
    console.log("a is greater than b")
}
else if (a < b) {
    console.log("a is less than b")
}
else {
    console.log("a is not equal to b ")
}

//  Calculator 
// a , b , c 


// 7.	Grade calculator based on marks
// 40 se 60 grade D
// 80 or 90 se jayda grade A 
// 70 or 80 k bich me Grade B
// 60 or 70 k bich me Grade C 

// 9.	Check if a number is divisible by both 3 and 5 


// 6.	Find the largest among three numbers

