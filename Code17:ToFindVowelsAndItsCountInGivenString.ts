function findVowelsAndCount (input:string) : {vowels: string[], count: number} {
    const vowels = 'aeiou'
    const foundVowels = input.toLowerCase().split('').filter(char => vowels.includes(char))
    return {vowels:foundVowels, count: foundVowels.length}
}
console.log(findVowelsAndCount('Typescript is awesome'))