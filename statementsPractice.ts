// if else statement

if (69 > 50){
    console.log("69 is greater than 50")
}
else {
    console.log("69 is less than 50")
}
console.log('**** end of if else ****')

// if else if statement

let browser1 = 'safari'

if (browser1 === 'chrome'){
    console.log('I am using chrome browser')
}

else if (browser1==='FF'){
    console.log('I am using FF browser')
    }

else{
    console.log('I am using other browser')
}  

let num = 22
if (num === 22){
    console.log('22 is correct number')
}
else if (num > 22){
    console.log('22 is less than provided number')
}
else{
   console.log("22 is greater than provided number")
}
console.log('**** end of if else if ****')

// switch statement

let browser01 = "FF"

switch (browser01) {
    case 'Safari':
        console.log('I am using safari browser')
        break;
    case "Chrome" :
        console.log("Let use chrome browser")
        break
    default:
        console.log('Not using safari or chrome browser')
        break;
}
console.log('**** end of switch ****')