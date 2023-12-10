//object is an unordered collection of related data with key & value
const person = {
  firstName: "Brad",
};
person.dog = { name: "Fluffy", age: 2 };
person.age = 26;
person.cat = { name: "bong bong", age: 3 };

//square bracket notation
console.log(person["firstName"]);

const property = "age";

console.log(person[property]);
