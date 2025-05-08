function longest() {
    let str ="Priya is a good girl and having hardworking skills"
    let words = str.split(' ');
    let longest = ''; 
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i]; 
      }
    }
    return longest;
  }
console.log(longest())