// Object Destructuring
const person = {
  firstName: "Gary",
  lastName: "Vee",
  car: {
    color: "red",
    wheels: 4,
  },
  animals: {
    dog: {
      name: "Fluffy",
      age: 3,
    },
    cat: {
      name: "Kitty",
      age: 3,
    },
  },
};

// Destructuring
const {
  firstName,
  lastName,
  car: { color, wheels },
  animals: { cat, dog },
} = person;

console.log(firstName);
console.log(car.color);
console.log(animals.cat);

// Node
const test = (req, res) => {
  const { body, params } = req;
};

// React
const Component = ({ keys }) => {};

//Array Destructuring
const introduction = ["Hello", "I", "am", "Sarah"];
// const greeting = introduction[0];
// const name = introduction[3];
// console.log(greeting, name);
const [greeting, , , name] = introduction; //hello Sarah
