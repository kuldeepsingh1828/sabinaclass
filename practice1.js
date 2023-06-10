/* Question 1: Write afunction flattenArray(arr) that 
takes an array arr containing nested arrays and uses the r
educe method to flatten it into a single - level array.
 Example: 
 console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
 // Output: [1, 2, 3, 4, 5, 6]
 */
let arr = [1, [56, 78, [2, [3, 4], 565], 5], 6];
// let reduceFun = (a,b)=>
let newarr = [];

function flattenArray(arr) {

    function flat(a, b) {
        if (typeof(b) == "number")
            a.push(b);
        else {
            let barr = b.reduce(flat, [])
            return [...a, ...barr];
        }

        return a;
    }
    return arr.reduce(flat, []);
}
console.log(flattenArray(arr));