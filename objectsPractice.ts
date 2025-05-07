// Object - Collection of key and value pair inside the {} : {key: value} - {name : "Raj"}

// Literal Object == used to create an object directly

console.log('Literal Object')

let obj = {
    name: 'Priya',
    age: 30,
    city: "Pune"
}
console.log(obj)

// Inline Type Object == used to define the type of the object single time

console.log("Inline Type Object")

let obj2 : {
    name: string,
    age: number,
    city: string
} = {
    name: 'Priya',
    age: 30,
    city: "Pune"
}
console.log(obj2)

// Using Type aliases == used to define the type of the object multiple times by giving a name to the type

console.log("Using Type aliases")

type Person = {
    name: string,
    age: number,
    city: string
}

let obj3 : Person = {
    name: 'Priya',
    age: 30,
    city: "Pune"
}
console.log(obj3)
console.log(obj3.name)

// Interface Type Object == used to define the type of the object multiple times by giving a name to the type and also used for inheritance

console.log("Interface Type Object")

interface PersonInterface {
    name: string,
    age: number,
    city: string,
    salary: number
}

let obj4 : PersonInterface = {
    name: 'Priya',
    age: 30,
    city: "Pune",
    salary: 4000000
}
console.log(obj4)

// Factory function == used to create objects without using the new keyword

console.log("Factory function")

function createPerson(name: string, age: number, city: string, salary: number) {
    return {
        name,
        age,
        city,
        salary
    };
}

let obj5 = createPerson('Priya', 30, "Pune", 4000000);
console.log(obj5);
console.log(obj5.salary)

