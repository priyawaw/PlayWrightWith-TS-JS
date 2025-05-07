// An anagram number is a pair of numbers where the digits can be rearranged to form each other.
// For instance, if you have the number 1234 and 4321, these 2 numbers are considered anagrams because you can rearrange the digits of 1234 to get 4321 and vice versa.


let str1 = 'mary'
let str2 = 'army'
let str3 = str1.toLowerCase().split('').sort().join('')
let str4 = str2.toLowerCase().split('').sort().join('')
if (str3 === str4) {
    console.log('True')
}
else{
    console.log('False')
}
