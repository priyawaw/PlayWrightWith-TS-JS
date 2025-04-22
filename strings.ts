// string -  Combination of characters - this, javascript


/*
1. Single  Quote ('') - String Literal 
2. Double Quote ("") - String Literal
3. backtick (``) - Template Literal - Wehe ever we try to use a variable inside another string -      ${variable}

*/

let sq :string  = 'c' // Type annotation
let dq  = "Javascript" // Type Inference
let bt = `language` // Template Literal 

let age1  = 40

let greet2 = `You are of age : ${age1}`
console.log(greet2);


console.log("************************************");

// 1. length - Return the number of characters available inside a string
// Syntax:
// stringName.length
// Example:
 let str1 = "Hello, World!"; //0 -12
 console.log(str1.length); // Output: 13

// 2. charAt(index) - Return the character that are available at specified index
// Syntax:
// stringName.charAt(index)
// Example:
console.log(str1.charAt(10))
console.log(str1.charAt(100))

// 3. concat(string, ....) - Joins 2 or more string and return us the new string
// Syntax:
// StringName.concat("JS", "TS", ....)
console.log(str1.concat(" Hello", " JS"))
console.log(str1);

// 4. includes(searchString, position) - true or false
// Syntax:
// StringName.includes(searchString, index)

//  let str1 = "Hello, World!"; //0 -12
console.log(str1.includes("o", 9))

// 5. startsWith(SearchString, index) - Check if a string is starting with the specified char or string and it returns either true or false
// Syntax:
// stringName.startsWith(string)

console.log(str1.startsWith("w", 7))

// 6. endsWith(SearchString, index)
// SYntax:
// stringName.endsWith(string)


// 7. indexOf(string or char, position) - Return the index of FIRST ocuurances of a specified value
// 8. lastIndexOf() - array

// 9 . replace(oldString, newString)
// Syntax:
// StringName. replace(oldString, newString)

let str2 = "This is a string"
console.log(str2.replace("s", "a"))
console.log(str2.replaceAll("s", "a"))

// 10 . slice(startIndex, endIndex)
// Syntax:
// stringName. slice(startIndex, endIndex)
console.log(str2.slice(6,2));



// 11. substring(startIndex, endIndex)
// Syntax:
// stringName. substring(startIndex, endIndex)
console.log(str2.substring(6,2));

// 12. toLowerCase() - It converts all the characters to lower case
// Syntax:
// StringName.toLowerCase()
console.log(str2);
console.log(str2.toLowerCase());

// 13. toUpperCase() - It converts all the characters to upper case
// Syntax:
// StringName.toUpperCase()
console.log(str2.toUpperCase());

// 14. trim() - Removes the whitespace from beginning and the end of a string
// Syntax:
// stringName.trim()
let str3 = "   This is a Javascript   "
console.log(str3.length);
console.log(str3.trim().length);

// 15. trimStart()
// Syntax:
// stringName.trimStart()
console.log(str3.trimStart());

// 15. trimEnd()
// Syntax:
// stringName.trimEnd()
console.log(str3.trimEnd().length);











