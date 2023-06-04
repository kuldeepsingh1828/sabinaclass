let arr = [1, 2, 31, 5, 6, 5, 35, 32, 45, 4]
//forEach - Iterrates over the array elements

// arr.forEach((element, index) => {
//     console.log(`Array element at index ${index} is ${element}`)
// })

//filter
let oddNumbers = arr.filter(element => element % 2)
console.log(oddNumbers)

//map
let newArr = arr.map(element => element ** 2)
console.log(newArr)

//sort
let sortArr = arr.sort((element1, element2) => element1 - element2); // -1, 0, +1 
console.log(sortArr);

// let sum = 0;
// arr.forEach(element => {
//     sum += element;
// });
// console.log(sum);

[1, 2, 3, 4, 5]
//reduce
let sum = arr.reduce((a, b) => {
    console.log(a, b)
    return a + b
}, 0);
console.log(sum);

//some
//find if array contains some odd number or not
let result = arr.some(element => (element % 10 == 0))
console.log(result)
//every
result = arr.every(element => element % 10)
console.log(result)

//find
let divideBy3 = arr.find(element => element % 3 == 0) //return a first matching value
console.log(divideBy3)
//findIndex
let divideBy3Index = arr.findIndex(element => element % 3 == 0) //return a first matching index
console.log(divideBy3Index)