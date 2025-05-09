function findFirstPairWithSumZero(arr: number[]): [number, number] | null {
    const seen = new Set<number>();
  
    for (const num of arr) {
      const target = -num;
      if (seen.has(target)) {
        return [target, num];
      }
      seen.add(num);
    }
  
    return null;
  }
console.log(findFirstPairWithSumZero([-3, -2, -11, 0, 1, 22, 3, 4]))