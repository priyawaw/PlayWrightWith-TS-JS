function isParlindromeByHalf (input : string | number) : boolean {
    let str = input.toString()
    const len = str.length
    for (let i =0; i < len/2; i++){
        if (str [i] !== str [len - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(isParlindromeByHalf('madam'))
console.log(isParlindromeByHalf(12321))
console.log(isParlindromeByHalf('madaM'))