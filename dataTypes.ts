// Data Type : Define what kind of data a variable is storing
// Primitive Data Types: Numbers, Strings, Booleans, Null, Undefined, Any , Union 
// Non-Primitive Data Types: Objects, Arrays

// Type annotation: 
// Type interferance:

// Data type - Which defines what kind of data a variable is storing

// 2 types of Data Type
// 1. Primitive Data Type - Only one value
     // 1. number
     // 2. string
     // 3. boolean
     // 4. null
     // 5. undefined


     // 6. any
     // 7. union


// 2. Non-Primitive Data Type - 
        // - Array
        // - Object - {key : value}
        // - Function

// 1. Primitive Data Type - Only one value
     
// 1. number - number repesents both integer(-123, 123) and floating point value (180.0987676)

// Keyword(var/let/const) variableName : datatype (optional) = value



let data1  = 10.545
data1 = 10


// Type Annotation
 let data2 : number = 10.545
 //data2 = "TS"

// Type Inference
let data3 = "10.545"
//data3 = 10

// 2. string - Combination of characters - Hello

/*
1. Single  Quote ('') - String Literal 
2. Double Quote ("") - String Literal
3. backtick (``) - Template Literal - Wehen ever we try to use a variable inside another string -     ${variable}
*/

let singleQuote :string = 'This is a single quote string'
console.log(typeof singleQuote);
let doubleQuote = "This is a double quote string"

let templateLiteral = `This is a string`

let age  = 40

let greet = `You are of age : ${age}`
console.log(greet);

let name1  = "John"

let greet1 = `Welcome,  ${name1}`
console.log(greet1);

// 3. boolean - true -1/false -0
let isAdmin : boolean = true
console.log(isAdmin);

let bool = 10>50  
console.log(bool);

// 4. null  - No value
let data4 :null  = null

// if(obj ==null){
//     new obj()
// }

// 5. undefined - No value - No assignment - No initialization
let data5 :undefined
console.log(data5); // undefined

// 6. any (Special datatype)

let data6 : any = 10
data6 = "10"
data6 = true
data6 = null
data6 = undefined

// 7. union - Allows a variavle to holds multiple data types 
let data7 : number | string = 10
data7 = "10"
//data7 = true







