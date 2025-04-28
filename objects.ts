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
    name : "John",
    age : 30,
    isEmployed : true,
    personInfo : function(){
        console.log(`name is :  ${person.name1}, age is ${this.age}, is Employed ${this.isEmployed}`)
        console.log(`name is :  ${person.name}, age is ${this.age}, is Employed ${this.isEmployed}`)
    }
}

// this - Refers to an object

// obj.key
console.log(person.name1);
person.name = "Rahul"
console.log(person.name);
console.log(person.age);
person.personInfo()

// obj["name1"]
//console.log(person["personInfo"]());



// 2. Inline Type Object - TS

const person1 : {name1: string, age1: number, isEmployed: boolean, personInfo : Function} = 

{
    name1 : "John",
    age1 : 30,
    isEmployed : true,
    personInfo : function(){
        console.log(`name is :  ${this.name1}, age is ${this.age}, is Employed ${this.isEmployed}`)
    }
}

console.log(person1.name1);
console.log(person1.age1);
person1.personInfo()

// 3. Using Type aliases - TS

// Syntax:
// type variableName = {key:value}

type human = {
    name : string,
    age: number,
    city : string, 
    person? : Function
}


let person2 : human = {name : "Jay", age : 34, city : "Delhi"}
let person3 : human = {name : "Ajay", age : 30, city : "NY"}

console.log(person2.name);
console.log(person2.age);

// 4. interface 
// Syntax:
// interface name {key:value}

interface Employee {
    name: string
    age : number
    role : string
    salary?: number
}

interface Company extends Employee{
    dept : string
}

let person4 : Employee = {name : "Ajay", age : 30, role : "SE", salary : 100000}
let person5 : Company = {name : "Ajay", age : 30, role : "SE", salary : 100000, dept : "IT"}



//6. Factory function - A function which will return an object is known as a factory function
// Syntax:

/*
function functionName(agr){
   // .....
   return object
}
*/

function Car(model, year, seat){
    // .....
    return {
        model1: model,
        year1 : year,
        seat1 : seat
    }
}

let car = Car("BMW", "i7", 5)
console.log(car.model1);







class Test{
    name1 
    age
    constructor(a, b) {
        this.name1 = a
        this.age = b
        
        this.name1 = a 
        this.age = b 
    }

}


let test1 = new Test("Rahul", 80)
console.log(test1)
console.log(test1.name1)



// 5. Class style