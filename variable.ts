// variable - Storage - Which store a single value or multiple values

// datatype variablename = value - int i = 10

/*
1. var - In modern JS/TS (ES6 - ECMA SCRIPT 6 -  2015) we do not var
2. let - Whenever we know that the value of the variable can changed
3. const - Which used to declare a constant variable
*/

// Syntax for JS: - 
// keyword(var/let/const) variableName = value

// Syntax for TS: - 
// keyword(var/let/const) variableName : datatype(optional) = value


//const j = 10
//j = 20

// Scope - 1. Global variable , 2. Local variable 
// {...} - block of code

// 1. var 
// 1. Scope  - Global or functional (inside the function)
// 2. Variable declared using var can be redeclared and can also be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration

var num1;

num1 = 59

var num = 10
var num = 20
var num = "TS"
var num = 50
var num = 45435465.456456


var i = 10 // global scope
console.log(i) // 10

function add(){
    var j = 20 // local scope
    console.log(i) // 10
    console.log(j) // 20
}
add()
// console.log(j)




var variable = "Typescript" // Global scope 

if(true){
    var variable = "Javascript" //{...}
}

console.log(variable)


// 2. let
// 1. Scope - Block scope {....}
// 2. Variable declared using let can not be redeclared but can be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration

let num2  //
num2 = 69 
console.log(num2) // 30

function add1(){
   console.log(num2)
   let num3 = 50
   console.log(num3) // 50
}
add1()
//console.log(num3)

let num3 = 100
//let num3 = 300

const var1 = "Typescript" // Global variable

if(true){
    const var1 = "Javascript" // Local variable
    console.log("line # 86- ", var1) // Javascript
}

console.log("line # 89- ",var1) // Typescript


// 3. const
// 1. Scope - Block scope {....}
// 2. Variable declared using const can not be redeclared and can not be reinitialised
// 3. It is mandatory to assign the value of the variable at the time of declaration

const l = 34
//const l = 20 // Error


// 1. var 
// 1. Scope  - Global or functional (inside the function)
// 2. Variable declared using var can be redeclared and can also be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration

// 2. let
// 1. Scope - Global or Block scope {....}
// 2. Variable declared using let can not be redeclared but can be reinitialised
// 3. It is not mandatory to assign the value of the variable at the time of declaration

// 3. const
// 1. Scope - Global or Block scope {....}
// 2. Variable declared using const can not be redeclared and can not be reinitialised
// 3. It is mandatory to assign the value of the variable at the time of declaration







