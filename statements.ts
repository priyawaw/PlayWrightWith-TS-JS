// Statement or conditional st

/*

1. if statement
2. if else statement
3. if else if statement
4. switch statement
5. Nested if else statement - 

*/

// 1. if statement -
// Syntax:-
/*

 if(condition){
    // code
}
*/

if(0>1){
    console.log("5 is greater than 1");
}
console.log("******************");

// 2. if else statement
// Syntax:-
/*

if(condition)
{
    // code
}
else
{
    // code
}

*/

// Definition:
// If the condition is true, then the code inside the IF block will be executed. If the
// condition is false, then the code inside the ELSE block will be executed.

if(10>15){
    console.log("Condition is true");
}else{
    console.log("Condition is false");
}

console.log("********************");

// 3. if else if statement
// Syntax:-

/*
if(condition1)
{
// if block of code
}else if(condition2){
    // block
}else if(condition3){
// block
}
else if(condition4){
}
else
{
// block
}
*/

let browser = "opera"

if(browser === "chrome"){ // "opera" === "chrome"
    console.log("Browser is chrome")
}else if(browser === "firefox"){
    console.log("Browser is firefox")
}else if(browser === "safari"){
    console.log("Browser is safari")
}else{
    console.log("Browser is not supported")
}

// Ranges - marks >90 , sales > 100000
// Data types are different
// Logical


console.log("*************************");

// 4. switch statement
// Syntax:-
/*

switch(expression){
    case value: 
    // code to be executed if expression matches value
    break;
    case value:
        // code to be executed if expression matches value
        break;
    case value: 
    // code to be executed if expression matches value
    break;
    default:
        // code to be executed if expression does not match any value
        break;
}

*/

let broserName = "safari"

switch(broserName){ // switch("safari")
    case "chrome":
        console.log("Browser is chrome")
        break; // 
    case "firefox":
        console.log("Browser is firefox")
        break;
    case "safari":
        console.log("Browser is safari")
        break;
    case "edge":
        console.log("Browser is edge")
        break;
    default:
        console.log("Browser is not supported")
}



