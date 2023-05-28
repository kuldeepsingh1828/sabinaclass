let sum = function () { // return undefined f1
    console.log("f1")
    let a, b;
    a = 10;
    b = 56;
    console.log(a + b)
}
sum();

sum = function (a, b) { // return undefined f2
    console.log("f2")
    console.log(a + b)
}
sum(12, 6);

sum = function () { // return undefined f3
    console.log("f3")
    let a, b;
    a = 10;
    b = 56;
    return a + b;
}
console.log(sum());

sum = function (a, b) { // return undefined f4
    console.log("f4")
    return a + b
}

console.log(sum(12, 61));



//PHASE 1 - Declaration/memory allocation
    // sum : sum f1

//PHASE 2  - EXECUTION
