// Operators - 

// 1. Arithemetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators (=) - let i = 10



// 1. Arithemetic OP
    // 1. Addition (+)
    // 2. Subtraction (-)
    // 3. Multiplication (*)
    // 4. Division (/)
    // 5. Modulus (%) - returns the remainder of a division operation
    // 6. Exponentiation (**)
    // 7. increment (++)
    // 8. decrement (--)



// 1. +  - add the 2 numbers (number), concat (string)

let a = 20
let b = 5
//let c = a+b
console.log(a + b) 
let str1 = "10"
let str2 = "10"
console.log(str1 + str2) 

// 2. - 
console.log(a-b); // 21-5

// 3. * - This will multiple the 2nd with first number
console.log(a*b); // 21*5 = 105

// 4. / - divide the first number by second
console.log(a/b); // 21/5 = 4.2

// 5. % (modulus) - returns the remainder of a division operation
console.log(a % b); // 21%5 = 1

// 6. ** (Exponentiation) // a**b // a^b 2^3 = 8
console.log(5**3); // 5^3// 5*5*5

// 7. ++ (increment) - a++/++a // a+1

// Pre-increment (++a) - Action will be performed after the value will be incremented

let c01  = 10
console.log(c) // 10 

console.log("Pre-increment", ++c) // ++10 // 10+1

// Post-increment (a++) - Action will be performed first and then the value will be incremented

let d01 = 20
console.log(d) 
console.log("Post-increment", d++) // 20++ // 20+1
console.log(d) // 21

// 8.  -- (decrement) - a--/--a // a-1

// Pre-decrement (--a) - Action will be performed after the value will be decremented

let e  = 15
console.log(e) // 15 

console.log("Pre-decrement", --e) // --15 // 15-1

// Post-decrement (a--) - Action will be performed first and then the value will be decremented

let f = 25
console.log(f) // 25
console.log("Post-decrement", f--) // 25-- // 25-1
console.log(f) // 24

console.log("*****************************************");

// 2. Comparison Operation  - It compares the values and return the resut in the form of boolean  (true or false)

/*

    1. Equal To (==)
    2. Not Equal To (!=)
    7. Strictly Equal To (===) - Strict Equality
    8. Strictly Not Equal To (!==) - Strict Inequality
    3. Greater Than (>)
    4. Less Than (<)
    5. Greater Than or Equal To (>=)
    6. Less Than or Equal To (<=)

*/

// 1. Equal To(==) - It checks if the values are equal or not without comparing the data type of the variables
let m = 12
let n = "12" 
c//onsole.log("Eqaul to ", m == n) 

// 2. Not Equal (!=) - It checks if the values are not same without comparing the data type of the variables
//console.log("Not Equal to", m != n)

// 7. Strict Equality (===) -  It checks if the values and data type are equal or not
c//onsole.log("Strict Equality", m === n) 

// 8. Strict Inequality (!==) - It checks if the values and data type are not same
//console.log("Strict Inequality", m !== n)

// 3. Greater than (>)
console.log("Greater than", 10 > 5)
// 4. Less than (<)
console.log("Less than", 10 < 5)
// 5. Greater than or Equal To (>=)
console.log("Greater than or Equal To", 10 >= 10)
// 6. Less Than or Equal To (<=)
console.log("Less than or Equal To", 10 <= 18)
console.log("***************************");

// 3. Logical Operator  - Will try to compare the boolean expression (10>5)
// AND (&&) 
// OR (||)
// NOT (!)

// 1. And (&&)  - It will return true if both of the conditions are true else false

// true && true - true
// true && false - false
// false && true - false
// false && false - false


console.log((10 > 5) && (10 > 6)) // true && true
console.log((10 > 5) && (10 < 6)) // true && false
console.log((10 < 5) && (10 > 6)) // false && true
console.log((10 < 5) && (10 < 6)) // false && false

console.log("*****************************************");

// 2. OR (||) - It will return true if any of the conditions is true else false

// true || true - true
// true || false - true
// false || true - true
// false || false - false

console.log((10 > 5) || (10 > 6)) // true || true
console.log((10 > 5) || (10 < 6)) // true || false
console.log((10 < 5) || (10 > 6)) // false || true
console.log((10 < 5) || (10 < 6)) // false || false

console.log("*****************************************");

// 3. NOT (!) - It will return true if the condition is false else false

console.log(!(10 > 5)) // !true
console.log(!(10 < 5)) // !false

console.log("*******************************");

// 4. Assignment Operator (=)

let x1 = 10;
console.log(x);

// +=, -=, *=, /=
let y = 10
y += 10 // x = x+10 // x = 10+10
console.log(y);

 //let y =23

x -= 5 // x = x-5// x = 20-5
console.log(x);

x *= 2 // x = x*2 // x = 15*2
 console.log(x);
x /= 3 // x = x/3 // x = 30/3
 console.log(x);