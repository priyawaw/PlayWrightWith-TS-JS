let array = ['a',1,2,5,1,2,'a', 'b', 'aa','bb','aa']
console.log(array.length)
var uniqueArray = array.filter((value, index, array) => array.indexOf(value)=== index);
console.log(uniqueArray)
console.log(uniqueArray.length)