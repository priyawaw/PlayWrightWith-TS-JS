/*function largestPairSumOfTwo (num) {
    return num[num.length - 1] + [num.length - 2]
}
const result = largestPairSumOfTwo([1,2,6,4,3,5,44,12])
console.log(result)*/

function findLargestPairInSortedArray(arr: number[]): [number, number] | null {
    if (arr.length < 2) return null;
  
    // Since the array is sorted, the two largest elements are at the end
    return [arr[arr.length - 2], arr[arr.length - 1]];
  }
  
  // Example usage:
  console.log(findLargestPairInSortedArray([1, 2, 3, 5, 7, 8,22,45])); // [7, 8]
  console.log(findLargestPairInSortedArray([-5, -3, -1, 0, 2, 4])); // [2, 4]
  console.log(findLargestPairInSortedArray([1])); // null