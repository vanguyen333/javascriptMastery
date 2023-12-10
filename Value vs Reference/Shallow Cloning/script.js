// Cloning Arrays
// 1st way: Spread Operator

const numbers = [1, 2, 3, 4, 5];

// console.log(...numbers);

const newNumbers = [...numbers];
const copiedNumbers = numbers;
console.log(newNumbers);
console.log(numbers === newNumbers); //false
console.log(numbers === copiedNumbers); //true

numbers.push(6);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(copiedNumbers); //[1, 2, 3, 4, 5, 6]
console.log(newNumbers); //[1, 2, 3, 4, 5]

// 2nd way array.slice(): get different location in memory
const newNums = numbers.slice();
console.log(newNums); //[1, 2, 3, 4, 5, 6]

// CLONING OBJECTS
// 1st way: spread operator ...

const pet = { name: "bong bong", age: 3 };
const otherPet = { ...pet };
pet.age = 2;
console.log(pet, otherPet); // {name: 'bong bong', age: 3}

// 2nd way: Object.assign()
const flower = { name: "Rose", age: 1 };
const flower1 = Object.assign({}, flower);
flower.age = 3;
console.log(flower); //{name: 'Rose', age: 3}
console.log(flower1); // {name: 'Rose', age: 1}
