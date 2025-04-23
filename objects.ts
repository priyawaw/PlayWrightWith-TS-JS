// Object - Collection of key and value pair inside the {} : {key: value} - {name : "Raj"}

// ClassName obj = new ClassName()
// let or const  obj = new ClassName()

// 1. Literal Object   - JS/TS
// 2. Inline Type Object - TS
// 3. Using Type aliases - TS
// 4. Using interface - TS
// 5. using class - JS/TS
// 6. Constructor Function - JS/TS
// 7. Factory function - TS/JS - A function which will return an object is known as a factory function

// using optional parameter
// readonly property

// 1. Literal Object
// Syntax:
// let or const  obj = {name: value, function: function}

const person = {
    name1 : "John",
    age : 30,
    isEmployed : true,
    personInfo : function(){
        console.log(`name is :  ${person.name1}, age is ${this.age}, is Employed ${this.isEmployed}`)
    }
}

// this - Refers to an object

// obj.key
console.log(person.name1);
console.log(person.age);
person.personInfo()

// obj["name1"]
//console.log(person["personInfo"]());


class Test{
    name1 
    age
    constructor(a, b) {
        this.name1 = a
        this.age = b
        
    }
}

let test1 = new Test("Rahul", 80)
console.log(test1)







