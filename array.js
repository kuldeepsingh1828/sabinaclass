//array is single or multidimensional
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Homogenous
let arr2 = [1, 2, "Kuldeep", 4, 5, true, 7, 23.4232, 9, 10]; //Hetrogenous

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


//object key : value pair

let person = { name: 'Person name', age: 25, address: 'Pathankot, Punjab' };


//for...in
for (let key in person) {
    console.log("Person " + key + " has value : " + person[key]);
}