// Named function

function add (num1, num2){
    return num1 + num2
}
let add1 = add (25,85)
console.log(add1)

function sub01 (n1 , n2) : void {
    let sub1 = n1 - n2
    console.log(sub1)
}
sub01 (56,2.5)

function compare (A,B) {
    if ( A === B){
        console.log('A and B are same number')
    }
    else{
        console.log('A and B are diff number')
    }

}
compare(5,25)

// Anonymous Function

let multiply = function( m1 , m2 ){
    return (m1 * m2)
}
const mul01 = multiply (25 , 8)
//console.log(multiply(23,5))
console.log(mul01)

let greed = function() {
    return 'Hello, how are you'
}
let greeds = greed()
console.log(greeds)


let equalto = function(k1 , k2){
    if (k1 != k2){
        console.log("both nums are not equal to each other")
    }
    else{
        console.log("both nums are equal to each other")
    }
}
equalto(12, 12)

// Arrow function => fat arrow

let doubled = (dd,cc) => {
    if (dd >= cc) {
        console.log("dd is greater than cc")
    }
    else {
        console.log('cc is greater than dd')
    }

}
doubled (25,231)


let var02 = (aa , bb) => aa * bb
let mul02 = var02 (26 , 2)
console.log(mul02)

// Optional parameters and default parameters
function mul05 (q1, q2, q3 = 2) {
    console.log (q1 * q2 * q3)
}
mul05 (10, 26);

// IIFE function

(function () {
    console.log ('IIFE')
}
)

// Function constructor

let fun11 = new Function('a', 'b', 'return a+b')
console.log(fun11("TS", "JS")) 

let total = new Function ( 'j1' , 'j2' , 'return j1 + j2')
console.log (total (25 ,86))