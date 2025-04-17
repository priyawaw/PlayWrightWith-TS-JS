// Addition (+)

var z = 20
y = 30
let sum = z + y
console.log(sum)

// Sunstraction (-)

const k = 90
var l = 5
let sub = k - l
console.log(sub)

// Multiplication (*)

let x = 63
var w = 23
var mul = x * w
console.log(mul)

// Division (/)

const j= 89
var n1 = 6
var div = j / n1
console.log(div)

// Modulus (reminder) (%)

a = 11
b = 2
let c = a % b
console.log(c)

// Exponential (Roots) (**)

let d = 32
e = 2
let square = d ** e
console.log(square)

// Post increment (i++)

let t = 12
console.log('post increment', t++)
console.log(t)

for (let t01 = 0; t01<=10; t01++){
    console.log(t01)
}

// Pre increment (++i)

let t1 = 12
console.log('pre increment', ++t1)
console.log(t1)

for (let t01 = 0; t01<10; ++t01){
    console.log(t01)
}

// Post decrement (i--)

for (let s = 5; s-->0;){
    console.log(s)
}

// Pre decrement (--i)

for (let s = 15; --s >0;){
    console.log(s)
}

// Equal to (==)

let o = 25
q = 25
if (o == q){
    console.log("Both nos are equal")
}
else{
    console.log('o is less than q')
}

//Not equal to (!=)

f = 26
let g1 = 21
if (f != g1) {
    console.log('f is not equal to g')
}
else{
    console.log('f is greater than g')
}

// Greater than (>) & Greater than equal to (>=)

let u = 563
m= 563
if (u >= m){
    console.log('u is greater than or equal to m')
}
else{
    console.log('u is smaller than m')
}

// Less than (<) & Less than equal to (<=)

var q = 56
m= 56
if (u <= m){
    console.log('m is less than or equal to q')
}
else{
    console.log('m is greater than q')
}

// Stricly equal to (===)

   let m1 = 52
   var n1 = 52
   if ( m1 === n1){
console.log('m & n are stricly equals to each other')
}
else{
console.log('m & n are not stricly equals to each other')}

// Stricly not equal to (!==)


 let  m01 = 52
var n1 = 5
if (m01 !== n1){
console.log('m1 & n1 are stricly not equals to each other')
}
else{
console.log('m1 & n1 are stricly equals to each other')}

// AND (&&): Return True if both condition matches else false

let a1 = (85 > 10)
let b1 = (62 < 20)
if (a1 && b1) {
    console.log ('True')
}
else{
    console.log('False')
}

// OR (||): Return True if any 1 condition matches else false

let c1 = (85 > 10)
let d1 = (62 < 20)
if (c1 || d1) {
    console.log ('True')
}
else{
    console.log('False')
}

// NOT (!): Return True if any condition not matches else false when condition matches

if ( ! (10 < 5)) {
    console.log ('True')
}
else{
    console.log('False')
}

// Assignment operator (=)

let g = 10
g += 20
console.log(g)

let g01 = 50
g01 -= 10
console.log(g01)

let g02 = 50
g02 *= 5
console.log(g02)

let g03 = 50
g03 /= 5
console.log(g03)