// var: Function-level-scope
// let: Block-level-Scope
// const: constant,can't be change(Block-level-Scope)

// function exampleFunction(){
//     if(true){
//         var functionScopevar = "I am function scoped"; //I am function scoped
//     }
//     console.log(functionScopevar);
// }
// exampleFunction();
// console.log(functionScopevar); //Error : functionScopevar is not defined
//var is a function level scope we acn access var inside the function but we can't access var outside the function

// function exampleFunction(){
//     if(true){
//         let functionScopevar = "I am function scoped"; //I am function scoped
//     }
//     console.log(functionScopevar);
// }
// exampleFunction();

// "let" is a block level variable

// //SHADOWING
// //Local variable can "Shadow" global variable with the same name
// //the local variable takes precedence within its scope

// var ShadowedVar = "I am global";
//var ShadowedVar =" I am not global" //can be done
// function exampleFunction(){
//     var ShadowedVar ="I am the local "
//     console.log(ShadowedVar); //"I am the local "
// }
// exampleFunction();
// console.log(ShadowedVar);// "I am global"

// //Hoisting
// // A behaviour where variable and function declaration are moved to the top of their scope during the compilation phase before the execution
// //declaraton can be hoisted but not during initialing

// //Hoisting with "Var"
// // console.log(x);//undefined
// // var x= 5;
// // console.log(x);//5

// //Hoisting with "let" and "const"
// // console.log(x);//Cannot access 'x' before initialization
// // let x= 5;
// // console.log(x);//5

// //Objects Data types

// let person = {
//     name: "Alice",
//     age : 30,
//     isStudent : false,

//     innerPerson : {                //object in object
//         innerPersonName : "HArsh"
//     }

// }

// console.log(person.innerPerson.innerPersonName);
// console.log(person["name"]);

// //Array : We can have different type of data-type data

// let fruit = [1, "banana", "orange"]
// console.log(fruit[0]);

// fruit.push("Apple")
// console.log(fruit);

// //FUNCTION

// function add(a,b){
//     return a+b;
// }
// let x =add(3,5);
// console.log(x);

//DYNAMIC Typing : same variable can hold different data type data

//typeof operator
let x = "HEllo";
console.log(typeof x);
console.log(typeof null); //object

//TYPE COERCION : when operators are used with different data types, values are automatically converted in to  a common type during an operation

let result = 5 + "5";
let result2 = "4" + 4;
let result3 = "3" + "4";
console.log(result); //55
console.log(result2); //44
console.log(typeof result); //string
console.log(typeof result2); //string
console.log(typeof result3); //string

let result4 = "2" + "2" - "2";
let result5 = "2" + "2" + "2";
console.log(result4); //20
console.log(typeof result4); //numbers
console.log(result5); //222
console.log(typeof result5); //string

//Assignment operator

let num = 5;
num += 5; //equivalent to : num = num +5
num -= 5; //equivalent to : num = num -5
num *= 5; //equivalent to : num = num *5
num *= 5; //equivalent to : num = num / 5
