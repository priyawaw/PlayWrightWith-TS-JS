/*variable - storage - store single or multiple values 

1. var = not used in modern JS/TS
2. let = used whenever value of variable can changed
3. const = used to declair const value

JS syntax : keyword (var/let/const) variablename = value

TS syntax : keyword (var/let/const) variablename : datatype (optional)= value

variable type - local and global */

// var : global or function (local / inside function)

var i = 10  // global 

console.log(i)
function test() {
            var j = 20; // local
            console.log(j);
            console.log(i)
        }

        test();

// variable declaired using var can be redeclared and also be reinitialized

