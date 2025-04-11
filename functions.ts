// Function - 

// There are 2 types of function in JS/TS
// 1. Named Function 
// 2. Anonymous Function (unnamed function)
// 3. Arrow Function (=>) - used for small functions, one line functions, callback


// 1. Named Function (Functional Declaration)- A function which will be declared along with the name
// Syntax:- TS
// function functionName(argument :datatype) : returnType{...}

// JS
// function functionName(argument ) {...}

//functionName(parameter)

// parameterised and returning function
function add(num1, num2) { // num1, num2 - Argument
    return num1 + num2
}

let sum = add("30","40") // parameter
console.log(sum)


// parameterised and non-returning function
function add1(num1:number, num2:number) {
    let sum = num1+num2
    console.log(sum)
}

add1(10,90)

// Non parameterised and non returning function

function greet(){
    console.log("Welcome to TypeScript")
}
greet()

// non-parameterised and returning function

function greets(){
    return "Welcome to Playwright"
}
let greetings = greets() //"Welcome to Playwright" 
console.log(greetings)


console.log("*********************************");


// 2. Anonymous function (Function Expression) -  A fucntion which will not have any name
// Syntax:- TS
/*

let variable = function(argument :datatype) : returnType{...}

variable(parameter)

*/

//let i :number = 10

let addition  = function(a:number, b:number)  {
    return a+b // console.log(a+b)
}

console.log(addition(34, 46))

// 3. Arrow function
