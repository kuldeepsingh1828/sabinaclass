//break -- STOP THE LOOP ITERATION AND MOVES TO NEXT LINE AFTER LOOP/SWITCH

// console.log("LOOP STARTS ...");

// default execution is 1 to 9
// for (let i = 1; i < 10; i++) {
//     console.log(i);
//     if (i <= 5)
//         break;
// }
// console.log("LOOP ENDS ...");


// contine - Stop current iteration and move to next iteration
console.log("LOOP STARTS ...");

// default execution is 1 to 9
for (let i = 1; i < 5; i++) {
    console.log(i);
    if (i <= 2)
        break;
    console.log(i);
}
console.log("LOOP ENDS ...");