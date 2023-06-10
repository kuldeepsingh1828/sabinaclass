/* Question 2: Write a function capitalizeNames(names) that takes an array 
names containing strings and uses the map method to return a new array where each name is capitalized (first letter uppercase).
 Example usage:
 console.log(capitalizeNames(['john', 'jane', 'mark', 'alice'])); 
 Output: ['John', 'JaNe', 'Mark', 'Alice']
*/

let arr = ['JOHN', 'jaNe', 'mark', 'alice'];
let capitalizeNames = arr.map(element => (new String(element[0]).toUpperCase() + new String(element.toString().substring(1)).toLowerCase()));
console.log(capitalizeNames)