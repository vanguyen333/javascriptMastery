// Spread and Rest Operator (...)

//Rest Operator
const add = (...args) => {
  return args.reduce((acc, val) => acc + val);
};
console.log(add(2, 2));

// Spread Operator
const nunbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(numbers);
console.log(newNumbers);

const object = { name: "John", age: 25 };
const object1 = { ...object, name: "Jenny" };
