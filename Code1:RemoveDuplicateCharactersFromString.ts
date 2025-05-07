function removeDuplicates (input:string)  {

    const uniquechar = new Set (input)
    return Array.from (uniquechar).join('')

}
console.log(removeDuplicates("priya riya supriya"))