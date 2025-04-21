// Array - 

// let i =10
let str = ["john"]

let array = [10,20,30,40,50] // [0:10, 1:20, 2:30,3:40, 4:50] // 0-4 = 5
console.log(Array.isArray(array))
console.log(array[0]);
// There are 2 ways in which we can declare an array
// 1. Using the Array() constructor
// 2. Using the square brackets [] - Array Literal

// 2. Array Literal 
// Syntax - TS
// let arrayName :datatype[](optional) = [value1, value2 ,...]

let array1 :any = [10,20,30,"TS", "JS", "blue", true]

let array3 :any[]= []
array3[0] = "TS"
array3[1] = 70
console.log(array3)

let array2 : any = [10,30,50,60,30]
console.log(array2)
console.log(array2[2]);
console.log(array2[1]);
console.log(array2[0]);

console.log("********************");

// For traditional 
for(let i = 0; i<array2.length; i++){
    console.log(i, array2[i]);
}

let value 

// for of loop
// Syntax:-
// for (variable of iterable) { ... code}
for(let ele of array2){
    console.log(ele)
}

let array4 : string[] = ["TS", "TS"]

// 2. Array Constructor
// Syntax - TS
// let arrayName = new Array<datatype>(number of elements)


let array5 = new Array<any>("TS", "JS", "blue", 10, 20, 30)
console.log(array5);
console.log(array5[4]);

console.log("****************method of array********************")

let arr = [10, 20, 30, "TS", "JS", "blue", "apple", true, 50]
console.log(arr);

// 1. length - It will return us the total number of elements that are available inside an array
// Syntax:
// arrayName.length
console.log(arr.length);

// 2. push(elements) - Add the elements to the end of an array 
// Syntax:
// arrayName.push(element1, element2 ,.....)
arr.push(90, "orange")
console.log("Push()", arr);

// 3. pop()  - Removes the last element from an array
// Syntax:
// arrayName.pop()
//arr.pop()
arr.pop();
console.log("pop()", arr);

// 4. unshift(elements) - Add the element(s) to the beginning of an array
// Syntax:
// arrayName.unshift(element1, element2 ,.....)
arr.unshift("TS", "JS")
console.log("unshift()", arr);

// 5. shift() - Removes the first element from an array
// Syntax:
// arrayName.shift()
arr.shift()
console.log("shift()", arr);

// 6. splice(startIndex, noOfELementToDelete, ele1, ele2, ele3)
// Syntax:

// arrayName.splice(startIndex, noOfElementToDelete, ele1, ele2, ele3)
// startIndex - The position where you want to add the element
// noOfElementToDelete - The number of elements you want to delete from the array
// ele1, ele2, ele3 - The elements you want to add to the array

// ['JS',10,20,30,'TS','JS','blue', 'apple', true,50,90]

// arr.splice(2, 0, "Java", "Python")
arr.splice(3, 2, "Java", "Python", 12, 13, 14)
console.log("splice()", arr);

// 7. slice(startIndex?, EndIndex?) - Return the portion of an array
// Syntax:
// arrayName.slice(startIndex, EndIndex)
// startIndex - The position where you want to start the slice
// EndIndex (Exclusive) - The position where you want to end the slice
console.log("Slice(1, 5)", arr.slice(1, 5)) // 1 ... 5-1 4
console.log("slice(2)", arr.slice(2)) 
console.log("slice()", arr.slice()) 

// 8. toString() - Convert the array to string
// Syntax:
// arrayName.toString()
console.log("toString()", arr.toString());

// 9. indexOf(element) - The index of first occurances of the element inside an array
// Syntax:
// arrayName.indexOf(element)
console.log("indexOf('JS')", arr.indexOf('JS'));
console.log("indexOf('TS')", arr.indexOf('TS')); // -1

// 10. lastIndexOf(element) - The index of last occurances of the element inside an array
// Syntax:
// arrayName.lastIndexOf(element)
console.log("lastIndexOf('JS')", arr.lastIndexOf('JS'));

let myArray = [11, 12, 13, 14, "TS", "blue", "pink", "orange"]
// forEach(fun), map(fun), filter(fun), reduce(fun), some(fun), every(fun)


// 11. forEach(function) - Will not return anything
// Syntax:
// arrayName.forEach(function(element, index, arrayName){...})

// element - The current element being processed in the array
// index(Optional) - The index of the current element being processed in the array
// arrayName(Optional) - The array the current element belongs to

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i], i)
}

console.log("******************************");

myArray.forEach(function(e, i){
    console.log(e,i)
})

// 12. map(function) - Create a new array with the the result of calling the function on every element on an array 
// Return the array with the exactly same number of element whatever we have in the original array
// Syntax:

// arrayName.map(function(element, index, arrayName){...})

let myArray1 = [100,200,300,400,500]
let er = 0.2
const inrConversion = myArray1.map(function(element){
    let inr = element - element*0.2
    return inr
})
console.log(inrConversion)
console.log(myArray1)

// 13. filter(function) - Create a new array with all elements that pass the test implemented by the provided function.
// Either have the exactly same number of element or less than
// Syntax:
// arrayName.filter(function(element, index, arrayName){...})

const myArray2 = [
    {sales : 100000, product: "Mobile"},
    {sales : 200000, product: "Laptop"},
    {sales : 300000, product: "Women wear"},
]

let sales = myArray2.filter(function(element){
    return element.sales >200000
})
console.log(sales);


//14 . reduce(function, initialValue(optional)) - Function will apply on every element of an array nd return the result as a single value

// Syntax:
// arrayName.reduce(function(accumlator, currentValue, index, arrayName){...}, initialValue)
// accumulator - The value returned by the last call to the function
// currentValue - The current element being processed in the array
// index - The index of the current element being processed in the array
// arrayName - The array the function is being called upon
//initialValue - The initial value of the accumator

let myArray3 = [1,2,3,4,5,6,7]

let total = 0
for(let i=0; i<myArray3.length; i++){
    total = total + myArray3[i] // 0+1 = 1 +2 = 3 
}
console.log(total)

let totalSum = myArray3.reduce(function(total, num){
    return total * num
}, 1)
console.log(totalSum)

// 15. some(function) - Check whether at least 1 element in the array passes the function then it will return the result as true else false
// Syntax:
// arrayName.some(function(element, index, arrayName){...})
// element - The current element being processed in the array
// index - The index of the current element being processed in the array
// arrayName - The array the function is being called upon

let myArray4 = [1,2,3,5,5,9,7]
let some = myArray4.some(function(element){
    return element %2 == 0
})
console.log(some) // true

// 16. every(function) - Check whether all the elements in the array passes the function then it will return the result as true else false

// Syntax:
// arrayName.every(function(element, index, arrayName){...})
// element - The current element being processed in the array
// index - The index of the current element being processed in the array
// arrayName - The array the function is being called upon

let myArray5 = [1,2,3,4,5,6,7]
let every = myArray5.every(function(element){
    return element > 0
})
console.log(every)



