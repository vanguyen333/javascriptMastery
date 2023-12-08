//Array Reduce
const groceryItems = [29, 12, 45, 35, 87, 110];

let total = 0;
const sum = groceryItems.forEach((item) => {
  total += item;
});
console.log(total); //318

const sum2 = groceryItems.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum2); //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a = 0, c = 1 => a = 1
// a = 1, c = 2 => a = 3
// a = 3, c = 3 => a = 6
// ...

const sum3 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum3);
