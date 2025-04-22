// For loop

for (let i=0 ; i <= 10; i++){
    console.log(i)
}

// For of loop

let array = [1,2,5,6, 'priya', true, 9,8,false, 'kaivalya']
for (let i=0; i<array.length; i++){
    console.log(array[i])
}

// For in loop

let object = {name : 'priya', age : 30, city : 'pune', pin : 411028}
for (let key in object){
    //console.log(key)
    //console.log(object)
    console.log(key +  ': ' + object[key])
}

// While loop

let o1= 0
while(o1 <= 10){
   // o1 = o1 + 2 //(even nos)
    console.log(o1)
    o1++
}

// Do While loop

let ll = 5
do{
    console.log(ll)
    ll--
}
while (ll < 0)