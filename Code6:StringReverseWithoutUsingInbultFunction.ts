
function reverseString (input : string) : string {

    let reversed = ''
    for (let i = input.length -1; i >=0; i--) {
        reversed += input[i]
    }

    return reversed

}
console.log(reverseString('I love India'))