// Named function

function add (num1, num2){
    return num1 + num2
}
let add1 = add (25,85)
console.log(add1)

function sub (n1 , n2) : void {
    let sub1 = n1 - n2
    console.log(sub1)
}
sub (56,2.5)

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
const mul = multiply (25 , 8)
//console.log(multiply(23,5))
console.log(mul)

let greed = function() {
    return 'Hello, how are you'
}
let greeds = greed()
console.log(greeds)


var equalto = function(k1 , k2){
    if (k1 != k2){
        console.log("both nums are not equal to each other")
    }
    else{
        console.log("both nums are equal to each other")
    }
}
equalto(12, 12)