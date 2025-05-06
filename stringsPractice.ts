// single quote string

console.log("single quote string")

let fname = 'Priya '
let lname = 'Bhopale'
console.log(fname + lname)

// double quote string

console.log("double quote string")

let mname = "Nandkishor "
console.log(fname + mname + lname)

// backtick quote string

console.log("backtick quote string")

let fullname = `My name is ${fname} ${mname} ${lname}`
console.log(fullname)

// string properties

// lenght == used to check no of characters available in a string

console.log("length of string")

console.log(fullname.length)

// charAt(index) == used to check character  available at specified index 

console.log("chrat of string")

console.log(fname.charAt(4))

// concat(str) == used to join two or more strings
        
console.log("concat of string")
        
console.log(fname.concat(mname,lname))

// includes(str) == used to check if the string contains specified string or not
        
console.log("includes of string")
        
console.log(fullname.includes("kaivalya"))
console.log(fname.includes('Priya '))

// stratsWith(str) == used to check if the string starts with specified string or not
        
console.log("startsWith of string")
        
console.log(fullname.startsWith('My'))
console.log(fname.startsWith('riya'))

// endsWith(str) == used to check if the string ends with specified string or not
        
console.log("endsWith of string")
        
console.log(fullname.endsWith('is'))
console.log(fname.endsWith('ya '))

// indexOf(str) == used to return the index of the first occurence of specified string

console.log("indexOf of string")

console.log(fullname.indexOf(`${fname}`))

// lastindexOf(str) == used to return the index of the last occurence of specified string
        
console.log("lastindexOf of string")

console.log(fullname.lastIndexOf('Kaivalya'))
console.log(fname.indexOf('ya'))

// replace(str, newStr) == used to replace 1st occurences of a specified string with another string
        
console.log("replace of string")

console.log(fullname.replace('P', 'p'))
console.log(fname.replaceAll('Priya', 'Priyanka'))

// slice(start, end) == user to return a part of string as per provided start and end index

console.log("sliceof string")

console.log(fullname.slice(0, 5))

// substring(start, end) == user to return a part of string as per provided start and end index

console.log("substring of string")

console.log(fullname.substring(0, 9)) 

// toLowerCase() == used to convert string into lowercase

console.log("toLowerCase of string")

console.log(fullname.toLowerCase())


// toUpperCase() == used to convert string into uppercase

console.log("toUpperCase of string")

console.log(fullname.toUpperCase())

// trim() == used to remove whitespace from both sides of stringconsole.log("trim of string")

console.log("trim of string")

let str = "   Hello World!   ";
console.log(str.trim());

// trimStart() == used to remove whitespace from the start of string

console.log("trimStart of string")

let str1 = "   Hello World!   ";
console.log(str1.trimStart());

// trimEnd() == used to remove whitespace from the end of string

console.log("trimEnd of string")

let str2 = "   Hello World!   ";
console.log(str2.trimEnd());

