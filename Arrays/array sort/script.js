//Array Sort =.alphabetically,

const names = ["Anne", "Carl", "Bob", "Dean"];

console.log(names.sort());

const numbers = [1, 4, 2, 6, 3, 9, 13, 39, 23];
//sorting ascending order
console.log(numbers.sort((a, b) => a - b));
//sorting descending order
console.log(numbers.sort((a, b) => b - a));
