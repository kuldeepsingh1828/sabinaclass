function sumPositiveNumbers(arr) {
    return arr.reduce((a, b) => {
        if (b > 0) return a += b;
        return a;
    }, 0);
}
console.log(sumPositiveNumbers([1, 2, -3, 4, -5, 6])); // Output: 12