// loops - Which will execute the same block of code {...} multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)



console.log("***********************");

// 1. for loop 
    // a. for loop - Traditional for loop - If we know how many times we have to run the iteration
    // b. for...of loop - Used to iterate over iterable object. Array, string
    // c. for...in loop - loop through the propeties of an object. - {name :"Rahul"}

// 2. while loop - If we do not know how many times we have to run the iteration
// 3. do...while loop - If we want to execute the loop atleast one time before checking the condition

console.log("***********************");

// 1. for loop - 
// Syntax:
// for(initialization; condition; increment/decrement){ ..... }

// initialization - Initialise the variable to start the execution. Ex: - let i =0
// condition - Condition to check whether the loop should continue or not. Ex: - i<10
// increment/decrement - Increment or decrement the variable after each iteration. Ex: - i++ or i--

// Print 1 to 5

for(let i =1 ; i<=5; ++i){ //1++ = 1+1 =2
    console.log(i) // 1 2 3 4 5
}

console.log("***While loop*************");

// 2. while loop 
// Syntax:

/*
initialization

while(condition){ 
// code to be executed
increment/decrement
}

*/

// Print 10 to 1

let i = 10
while(i<0){
    console.log(i) // 10 9 8 .... 1
    i-- // 1-- // 0
}

console.log("********Do while loop**********");

// 3. do while loop 
// Syntax:
/*

initialization

do{
    // code
    increment/decrement
}while(condition);

*/

let j = 10
do
{
    console.log(j) // 10
    j--  // 9
}while(j<0)