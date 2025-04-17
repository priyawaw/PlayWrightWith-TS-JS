// For loop

for (i=0 ; i <= 10; i++){
    console.log(i)
}

// For of loop

let array = [1,2,5,6, 'priya', true, 9,8,false, 'kaivalya']
for ( i=0; i<array.length; i++){
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

let o= 0
while(o <= 10){
   // o = o + 2 //(even nos)
    console.log(o)
    o++
}

// Do While loop

let l = 5
do{
    console.log(l)
    l--
}
while (l < 0)