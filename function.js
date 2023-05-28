function sum() { // return undefined f1
    console.log("f1")
    let a, b;
    a = 10;
    b = 56;
    console.log(a + b)
}

function sum(a, b) { // return undefined f2
    console.log("f2")
    console.log(a + b)
}

function sum() { // return undefined f3
    console.log("f3")
    let a, b;
    a = 10;
    b = 56;
    return a + b;
}

function sum(a, b) { // return undefined f4
    console.log("f4")
    return a + b
}

console.log(sum()); //sum(undefined,undefined) - NaN
console.log(sum(12, 6));
console.log(sum());
console.log(sum(12, 61));



//PHASE 1 - Declaration/memory allocation
    // sum(a,b) : prints f4  return a+b

//PHASE 2  - EXECUTION
