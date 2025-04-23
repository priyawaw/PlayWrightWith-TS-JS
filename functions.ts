// Function - 

// There are 2 types of function in JS/TS
// 1. Named Function 
// 2. Anonymous Function (unnamed function)
// 3. Arrow Function (=>) - used for small functions, one line functions, callback

// 4. IIFE - Immediately invoked function expression
// 5. Function Constructor

// 1. Named Function (Functional Declaration)- A function which will be declared along with the name
// Syntax:- TS
// function functionName(argument :datatype) : returnType{...}

// JS
// function functionName(argument ) {...}

//functionName(parameter)

// parameterised and returning function
function add01(num1, num2) { // num1, num2 - Argument
    return num1 + num2
}

let sum = add("30","40") // parameter
console.log(sum)


// parameterised and non-returning function
function add11(num1:number, num2:number) {
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

// 3. Arrow function - => - ES6 (ECMA SCRIPT 6 - 2015)
// Syntax:- TS/JS
/*

let variable = (argument :datatype(optional)) : returnType(optional) => {...}

*/

let variable = (a,b) => a*b

let result = variable(10000, 20000)
console.log(result) // 30000

let var1 = a => a**2

console.log(var1(5)); // 25

// 4. IIFE 
// Syntax:- TS/JS
/*
(function(argument){
    // code
})
()
*/

(function(){
    console.log("IIFE");
})
()


// 5. Function Constructor

let fun1 = new Function('a', 'b', 'return a+b')
console.log(fun1("TS", "JS")) 


function adds(a,b,c){
    console.log(a+b+c)
}

adds(1,2,5)


// Optional Parameter and default parameter

function adds1(a,b,c="IIT"){
    console.log(a+b);
    console.log(c);
}
adds1(1,2) 

function info(name : string, age? : number){
    if(age != undefined){
        console.log("Name is :", name ,"and age is : ", age)
    }else{
        console.log("Name is :", name)
    }
}

info("Rahul", 40)
info("John")




