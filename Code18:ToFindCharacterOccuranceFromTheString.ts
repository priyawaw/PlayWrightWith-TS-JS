function findCharOccurrence(input: string): { [key: string]: number } {
    const charCount: { [key: string]: number } = {};
  
    for (const char of input) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return charCount;
  }
  console.log(findCharOccurrence('hello world'));
  console.log(findCharOccurrence('typescript'));