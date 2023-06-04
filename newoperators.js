// ...  spread/rest

let arr = [1, 2, 3, 4, 5, 6, 7];
let [arr1, arr2] = arr; //Destructing 
let [, , arr3, , , arr6] = arr; //Destructing 
let [...restarr] = arr; //Destructing  + rest
console.log(restarr);


let arrr1 = [1, 2, 3];
let arrr2 = [4, 5, 6, 7];
let arrr3 = [...arrr1, ...arrr2]
console.log(arrr3);

// ?. , ??   NULL/UNDEFINED


let response = { status: 200, resposeObject: { usersCounts: 200, users: [1, 2, 3, 4] } };
// console.log(response.resposeObj.usersCount);
let newCount = ((response?.resposeObj?.usersCount) ?? 0) + 120;
console.log(newCount);
