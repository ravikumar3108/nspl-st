
// // // Output 

// // console.log("Heloo HArish")
// // // document.write("Heloo HArish")
// // console.warn("Warning")
// // console.error("Error")

// // // alert("This Page Beloongs to JAvascript")


// // // Variables :- Variables are used to store our data. 

// // // create a variables (declare a varible)
// // x = 10  // integer 

// // console.log(x)

// // //  names of our variable 
// // // alphabets 
// // // alphabets + number 
// // x10 = 30
// // //  underscore 
// // _harish = "harish"
// // // $dollar
// // $kumar = 10
// // // camelcase
// // harsihKumar = 20
// // //  pascal case 
// // HarishKumar = 30

// // // keywords
// // // let ,var, const

// // let y = 10
// // // let y = 39
// // console.log("y is = ", y)
// // // re-assignment 
// // y = 30

// // console.log("y is = ", y)
// // // 1. it cannot be re-decalred 
// // // 2. it is a block scope 


// // {
// //     let xy = 10
// // }
// // // console.log(xy)


// // // 2. var 
// // // 1. it can be re-decalred 
// // // 2. it cannot be  a block scope 


// // // 3. const 
// // // 1. it cannot be re-decalred 
// // // 2. it is a block scope 
// // // 3. it cannot be re-assign 


// // const a = 10
// // // a = 20
// // // console.log(a)


// // // Operators :- 
// // // 1. Arithmetic operators 
// // // + 
// // // -
// // // *
// // // /
// // // % modulus == remainder 
// // // ** expontation
// // // ++ increment 
// // // -- decrement 

// // // let a1 = 10
// // // let b = 20
// // // let c = a1 + b
// // // let d = c * 2

// // // console.log(c)
// // // console.log("d is ", d)

// // // let c1 = 10
// // // let c2 = 3
// // // console.log(c1 % c2)
// // // console.log(c1 ** c2)

// // // let x12 = 30
// // // // prefix 
// // // let inc = ++x12
// // // console.log(x12)
// // // console.log(inc)

// // // // postfix

// // // let inc1 = x12++ 
// // // console.log(x12)
// // // console.log(inc1)

// // // 2. Assignment operators
// // // = assign operator
// // // += 
// // // -=
// // // *=
// // //  /=
// // // %=
// // // **=

// // let a1 = 10
// // let b = 20

// // let c = a1 + 10
// // console.log(c)


// // a1 += 10


// // console.log(a1)








// // // 3. Comparision operators (boolean)
// // // == equal value 
// // // === equal value and equal type 
// // // !== vice versa
// // // != vice versa
// // // >
// // // <
// // // >=
// // // <=

// // let ab = 10
// // let aa = 20
// // let ac = "20"

// // console.log(aa == ac)
// // console.log(aa === ac)
// // console.log(aa !== ac)
// // console.log(ab == ac)
// // console.log(ab != ac)




// // // 4. logical operators
// // // and &&
// // //  or ||
// // //  not ! 



// // console.log(aa == ac)
// // console.log(aa === ac)
// // console.log(aa !== ac)
// // console.log(ab == ac)
// // console.log(ab != ac)

// // and 
// // true && false = false
// // true && true = true
// // false && true = false
// // false && false = false

// // or 
// // true && false = true
// // true && true = true
// // false && true = true
// // false && false = false


// // ! not



// let ab = 10
// let aa = 20
// let ac = "20"
// let lg = (aa == ac) && (aa === ac)
// let lg1 = (aa == ac) && (aa == ac)
// console.log(lg1)


// let or = !((aa == ac) || (aa === ac))
// console.log(or)


// // Condtions 
// // If else statements :- it is a block of code which is run when our condtion is true.

// //  syntax 
// // if (condition){
// //     // code to be executed 
// // }
// // else{
// //     // code to be exceuted
// // }

// // User Input :- Always return a string 
// // Convert Prompt string data into integerr p
// // parseInt()


// // let a = parseInt(prompt("Enter a Number"))
// // let b = 11 

// // if (a === b) {
// //     console.log("a is equal to b")
// // }
// // else if (a > b) {
// //     console.log("a is greater than b")
// // }
// // else if (a < b) {
// //     console.log("a is less than b")
// // }
// // else {
// //     console.log("a is not equal to b ")
// // }

// //  Calculator 
// // a , b , c 


// // 7.	Grade calculator based on marks
// // 40 se 60 grade D
// // 80 or 90 se jayda grade A 
// // 70 or 80 k bich me Grade B
// // 60 or 70 k bich me Grade C 

// // 9.	Check if a number is divisible by both 3 and 5 
// // 6.	Find the largest among three numbers

// // Array :- 
// // let arr = [1,2,4,4,5,6,6,7,7]
// // // aaray works on index number (0 to .....)

// // console.log(arr)

// // // array length
// // console.log(arr.length)

// // // Access the values of our array 
// // a = arr[8]
// // console.log(a)

// // // replcae the data 
// // arr[3] = "Harish"
// // console.log(arr)

// // // Methods 
// // // pop() = this method used to remove last value 
// // // push() this method used to add last value 

// // arr.pop()
// // console.log(arr)

// // arr.push("Hello")
// // console.log(arr)

// // // shift()
// // // unshift()
// // arr.shift()
// // console.log(arr)

// // // slice : it is used to cut a new array in the existing array.
// // // splice :- add data and remove data in the specific index number 

// // a = arr.slice(0,5)
// // // note :- last value is not included 
// // console.log(a)

// // // 1. index number 
// // // 2. remove items 
// // // 3. add items 
// // arr.splice(2,3,"h","r","i")
// // console.log(arr)

// // // concat method :- combine one or more aaray 
// // let arr1 = ["12",4,5,6,8,90,]
// // let arr2 = ["120",40,50,60,80,90,]
// // let arr3 = ["1200",400,500,600,800,900,]

// // conc = arr1.concat(arr2,arr3)
// // console.log(conc)

// // delete arr1[3]
// // console.log(arr1)
// // // sort 
// // // reverse
// // arr1.reverse()
// // console.log(arr1)



// // let str = "                                    hii my name is ravi. ravi "
// //  Aceesss our string []
// // length
// //  replace() => 2 parameters = first Exist in your sting  , second = replace by second value 
// //  replaceAll()
// // toUpperCase()
// // toLowerCase()
// // concat() 
// // slice() 
// // trim()
// // trimStart()
// // trimEnd()
// // charAt()


// // Functions :- it is a block of code which is run when our function is call 
// // Create a function 

// function MyFunction() {

//     console.log("funnction runn ")

//     a = 10
//     b = 30
//     console.log(a + b)

// }

// // calling a function 
// MyFunction()


// //  Parameters :- which is declare into the function parenthesis
// // and argumnets :- which is declare into the function calling parenthesis
// // default parameters 


// function MyFunction1(a, b, c = 30) {

//     console.log("funnction runn ")

//     console.log(a + b + c)

// }
// MyFunction1(10, 20, 45)


// // return 

// function MyFunction1(a, b, c = 30) {

//     console.log("funnction runn ")

//     x = a + b + 30
//     return x

// }
// ab = MyFunction1(a = 10, c = 20, b = 45)
// console.log(ab * 10)
// ab * 10




