let x = 1;
let y = x;
x = 2;
console.log(x, y); //2,1

let first = "Mark";
let second = first;
first = "Na";
console.log(first, second); // Na, Mark

const animals = ["dogs", "cats"];
const otherAnimals = animals;

animals.push("llamas");
console.log(animals, otherAnimals); //['dogs', 'cats', 'llamas'] (3) ['dogs', 'cats', 'llamas']

//Value vs Reference Explanation
// person and otherPerson point to the same location in the memory
const person = {
  firstName: "Jon",
  lastName: "Snow",
};
const otherPerson = person;
person.firstName = "Johnny";
console.log(person, otherPerson); //{firstName: 'Johnny', lastName: 'Snow'} {firstName: 'Johnny', lastName: 'Snow'}

const somebody = { name: "Jon" };
const otherSomebody = { name: "Jon" };
console.log(somebody === otherSomebody); //false cuz somebody and otherSomebody have different locations in memory
