
function isPalindrome (input : string | number) : boolean {
    const str = input.toString ()
    const reverse = str.split('').reverse().join('')
    return str === reverse
}
console.log(isPalindrome('madam'))
console.log(isPalindrome(121))
console.log(isPalindrome('Madam'))