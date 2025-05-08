function findLongestWords(input: string): string {
    const words = input.split(' ');
    const longestWord = words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, '');
    return longestWord;
  }
  
console.log(findLongestWords('supriya is a hahahahaha good girl'))