// DEEP CLONING

const person = {
  firstName: "Emma",
  car: {
    brand: "BMW",
    color: "blue",
    wheels: 4,
  },
};

// const newPerson = { ...person };
const newPerson = { ...person, car: { ...person.car } };

newPerson.firstName = "Mia";
newPerson.car.color = "red";
// console.log(person.car, newPerson.car);

const stringifiedPerson = JSON.stringify(person);
const newperson = JSON.parse(stringifiedPerson);
console.log(newperson);

newperson.firstName = "Me";
newperson.car.color = "white";
console.log(person);
console.log(newperson);
