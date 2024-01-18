const mod = require('./05_creating_modules.js');

console.log(mod(4,7));


const  mod2 = require("./05_creating_modules.js")


console.log(mod2);
//OUTPUT = [Function: add] { sub: [Function: sub], mul: [Function: mul] }

console.log(mod2.mul(10,10));
console.log(mod2.sub(9,3));





const {mul, sub} = require("./05_creating_modules.js")
console.log(sub(9,1));
console.log(mul(9,9));
