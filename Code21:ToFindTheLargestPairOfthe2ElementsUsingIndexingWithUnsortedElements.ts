function findLargestPair (arr:number[]) : [number, number] | null {
    if (arr.length < 2) return null
    arr.sort((a,b)=> b - a)
    return [arr[0], arr[1]]
}
console.log(findLargestPair([3,5,2,8,7,1]))