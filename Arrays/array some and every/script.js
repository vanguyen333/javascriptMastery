// Array Some
const array = [1, 2, 3, 4, 5];

// const greaterThan3 = (number) => number > 3;
// console.log(array.some(greaterThan3)); //true
console.log(array.some((number) => number > 3)); //true

// Array Every => returns true if all elements pass the test
console.log(array.every((num) => num > 0)); //true
