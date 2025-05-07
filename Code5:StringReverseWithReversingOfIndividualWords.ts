function withoutReverse(){
    let string = "I love India"
    let result = string.split('').reverse().join('')
    return result
}
console.log(withoutReverse())