// Array literal

console.log('*********Array literal**********')

let arrayl = [1,2,3,4,5]
console.log(arrayl.length)
console.log(arrayl)


// For traditional loop

console.log('*********For traditional loop**********')

for (let i = 0; i < arrayl.length; i++) {
    arrayl [5] = 9
    console.log( i, arrayl[i])
    //console.log(arrayl)
}

// For of loop

console.log('*********For of loop**********')

for (let element of arrayl){
    console.log(element)
    let ele = element + 1
    console.log(ele)
}

// Array Constructor

console.log('*********Array Constructor**********')

let array11 = new Array< any > ('TS', 'JS',10 ,58, 15.8, 'Java')
console.log(array11)
array11 [6] = true
array11 [7] = false
array11 [8] = 12
console.log(array11)
for (let Element of array11){
    console.log(Element)
}

// Method of arrays : lenght == used to measure length of array

console.log('*********lenght**********')

console.log(array11.length)

// push == used to add element to the end of array

console.log('*********push**********')

let array12 = [1,2,3,5,6,'JS', true]
array12.push(false)
console.log(array12)

// pop == used to remove last element of array

console.log('*********pop**********')

let array13 : number[] = [1,5,6,9,6,5,3]
array13.pop()
console.log(array13)

// unshift == add one or more elements at starting of an array

console.log('*********unshift**********')

let array14 = [1,22,55,66,33,'JS', 'Java', true, false, 83.25]
console.log(array14)
array14.unshift(98, 'Pink', 'Red')
console.log(array14)

// shift == used to remove 1st element from an array

console.log('*********shift**********')

array14.shift()
console.log(array14)

// splice == used to add and delete elements of array at a same time of specified index

console.log('*********splice**********')

let array15 = ['orange', 'apple', 1, 89, 452, true, 'purple', false, 6542, 'mango']
console.log(array15)
array15.splice(2,3,'priya',256, 'boolean')
console.log(array15)

// slice == used to return the portion of array

console.log('*********slice**********')

let array16 = [1,2,4,5,9,'orange', 'apple', 1, 89, 452, true, 'purple', false, 6542, 'mango', 89]
array16.slice(5,8)
console.log(array16)
//console.log("Slice(1, 5)", array16.slice(1, 5))

// tostring == used to convert array to string

console.log('*********tostring**********')

console.log('toString' , array14.toString())

// indexof == used to check index of 1st occurance of element

console.log('*********indexof**********')

console.log(array16.indexOf(89))

// lastindexof == used to check index of last occurance of element

console.log('*********lastindexof**********')

console.log(array16.lastIndexOf(89))

// foreach == its will not return anything

console.log('*********foreach**********')

const fruits = ["apple", "banana", "cherry"]
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

let array17 = [1,2,3,4,9,56,85,7,13]
array17.forEach(function(value, index){
    console.log(value,index)
})

array17.forEach((value) => console.log(value, array17))

// map == used to create new array with the result of calling the function on every element of an array

console.log('*********map**********')

let mapresult = array17.map(function(value){
    return value * 2
})
console.log(mapresult)

// filter == used to filter out an array

console.log('*********filter**********')

let filter1 = array17.filter(function(value){
    if (value%2 == 0){
        return false
    }
    else{
        return true
    }
    
})
console.log(filter1)

// reduce == used to perform action on every element of array and return a single value

console.log('*********reduce**********')

let array18 = [1,7,9,6,3,]
let reduced = array18.reduce(function(mul,value){
    return mul * value
},1)
console.log(reduced)

// some == Check whether at least 1 element in the array passes the function then it will return the result as true else false

console.log('*********some**********')

let somed = array18.some(function(element){
    return element % 2 !== 0
})
console.log(somed)

// every == Check whether all the elements in the array passes the function then it will return the result as true else false

console.log('*********every**********')

let everyed = array18.some(function(element){
    return element >  4
})
console.log(everyed)