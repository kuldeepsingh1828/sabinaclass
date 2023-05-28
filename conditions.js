//if, if else , if-else-if, nested if, switch, continue, break

let age = 23;

// 1 IF Condition
if (age >= 18) {
    console.log("You are eligible to Vote")
}


// 2 IF-ELSE Condition
if (age >= 18) {
    console.log("You are eligible to Vote")
} else {
    console.log("You are NOT eligible to Vote")
}

// 3 IF-ELSE-IF-ELSE Condition
if (age >= 18) {
    console.log("You are eligible to Vote")
} else if (age >= 12) {
    console.log("You are NOT eligible to Vote Because you are a Student")
} else {
    console.log("You are NOT eligible to Vote Because you are a KID")
}

//4 NESTED-IF
if (age > 0) {
    if (age >= 12) {
        if (age >= 18) {
            // ...
            console.log("You can vote");
        }
    }
}

// switch statements
// 1. Tell my name
// 2. Tell my Birth place
// 3. Tell my Mother's birth place
// 4. Tell my Father's birth place
let value = 1;
switch (value) {
    case 1:
        console.log("Kuldeep Singh");
        break;
    case 2:
        console.log("India");
        break;
    case 3:
        console.log("India");
        break;
    case 4:
        console.log("India");
        break;
    default:
        console.log("wrong choice...");
}