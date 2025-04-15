let array01 = [10,25,25, 'ts','js']
console.log(array01[3])

//let i =10;
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
 
 let array1 = [10,20,30,"TS", "JS", "blue", true]
 
 let array3 :any[]= []
 array3[0] = "TS"
 array3[1] = 70
 console.log(array3)
 
 let array2 : number[] = [10,30,50,60,30]
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