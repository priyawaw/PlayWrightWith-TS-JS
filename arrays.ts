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

let value01 

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

// 5. shift() - Removes the first element fro an array
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

// 9. indexOf(element) - 
// Syntax:
// arrayName.indexOf(element)
console.log("indexOf('JS')", arr.indexOf('JS'));
console.log("indexOf('TS')", arr.indexOf('TS')); // -1

// 10. lastIndexOf(element) - 
// Syntax:
// arrayName.lastIndexOf(element)
console.log("lastIndexOf('JS')", arr.lastIndexOf('JS'));

// forEach(fun), map(fun), filter(fun), reduce(fun), some(fun), every(fun)





