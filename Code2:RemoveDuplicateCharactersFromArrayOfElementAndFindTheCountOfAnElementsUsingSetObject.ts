let array = [1,1,2,2,2,66,54,89,63,56,98,98,86,45,54,54,47,77,77,23,12,11,22,62]
console.log(array.length)
const uniquearray = [...new Set (array)]  // The ... syntax is called the spread operator.It is used to spread out elements of an iterable (like an array or object) into individual elements.
console.log(uniquearray)
console.log(uniquearray.length)