// A class is a schema for an object that can save many values
class Person {
  constructor(name, age, working) {
    this.name = name;
    this.age = age;
    this.working = working;
  }
}

let user = new Person("John", 24, true);

console.log(user);

// same result for diffirent approach

const createPerson = (name, age, isWorking) => {
  return { name, age, isWorking };
};
const user1 = createPerson("Melissa", 24, true);
console.log(user1);
