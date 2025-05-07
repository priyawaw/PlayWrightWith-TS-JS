// Note: Array of elements can be reverse with reverse() method  
// but for string it is won't possible so required to split and then join().

/*function reverseString(str) {  // this for both reversing string and words
  if (!str) {
    return "";
  }

  return str.split("").reverse().join("");
}
console.log(reverseString('India is my country')) */

/*function reverseStringWithoutReversingWords (input:string) : String {

    return input.split('').reverse().join('')

}
console.log(reverseStringWithoutReversingWords("I love India"))*/


function reverseStringWithoutReversingWords(input: string): string {
    return input.split(' ').reverse().join(' ');
  }
  console.log(reverseStringWithoutReversingWords('I love India')); 