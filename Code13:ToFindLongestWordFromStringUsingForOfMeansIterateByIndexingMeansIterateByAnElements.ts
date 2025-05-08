function findLongestWord(input: string): string {
    const words = input.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  console.log(findLongestWord('supriya is a hahahahaha good girl'))