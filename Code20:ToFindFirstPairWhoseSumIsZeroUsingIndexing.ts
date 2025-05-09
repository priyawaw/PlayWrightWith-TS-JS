function findFirstPairWithSumZeroUsingIndexing (arr : number[]) : [number, number] | null {
    arr.sort((a,b) => a - b)

    let left = 0
    let right = arr.length - 1

    while(left < right) {
        const sum = arr[left] + arr [right]

        if (sum === 0) {
            return [arr[left], arr [right]]
        }
        else if (sum > 0) {
            right--
        }
        else {
            left++
        }
    }
    return null
}
console.log(findFirstPairWithSumZeroUsingIndexing([-3, -2, -1, 0, 5, 2, 3, 1]))