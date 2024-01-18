const add = (a,b)=>{
    return a+b;
}

const sub = (a,b) => {
    return a-b;

}

const mul = (a,b)=> {
    return a*b;
}

const name ="Harshit"


// console.log(add(5,3));
// console.log(sub(4,2));


module.exports = add;  //exporting modules to use in another file
                      // we can export variable also

module.exports.sub= sub;
module.exports.mul = mul;

// module.exports = {add, sub, mul, name};  Another way


