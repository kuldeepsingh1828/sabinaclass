/*Question 3: Write a function groupByLength(words) that 
takes an array words containing strings and uses the 
method to group the words by their lengths.
The function should return an object where the keys are the lengths of the 
words and the values are arrays containing the words of that length.
Example usage:
console.log(groupByLength(['apple', 'banana', 'pea', 'kiwis', 'grape'])); 
// Output: { 3: ['pea'], 5: ['apple', 'kiwis', 'grape'], 6: ['banana'] }
*/

//reduce
let arr = ['apple', 'banana', 'pear', 'kiwi', 'grape']
let groupByLength = arr.reduce((obj, element) => {
    if (obj[element.length] == undefined) {
        obj[element.length] = []
    }
    obj[element.length].push(element);
    return obj;
}, {});
console.log(groupByLength)