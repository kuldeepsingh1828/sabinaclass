//types of Variable
//declaration types 
//global
//local
//functional scope
// var keyword
var a = 10; // JS
console.log(a);

var a = 20; //redeclare
a = 20; //reassign
console.log(a);


for (var x = 0; x < 10; x++) {

    console.log("x : ", x);
}
console.log(x);

//REDECLARE REASSIGN GLOBAL


//let keyword -- ES6/Ecmascript 2015
//REASSIGN LOCAL
let s = 1;
console.log(s);
s = 56;
console.log(s);
for (let index = 0; index < 10; index++) {
    console.log("index", index)
}
// console.log(index);

//const keyword
//BLOCK
const C = 120;
console.log(C);
// const C = 67;// REDECLARE NOT ALLOWED SYNTAX ERROR
C = 89; //REASSIGN NOT ALLOWED  TYPE RROR