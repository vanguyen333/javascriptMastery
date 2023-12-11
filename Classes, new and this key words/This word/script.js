// The this keyword
function Sentence(words) {
  this.words = words;
  console.log(this);
}

const firstString = new Sentence("Hello, this is a sentence.");

const person = {
  name: "John",
  getName() {
    console.log(this);
  },
};
person.getName();

function Car(color, brand, wheels) {
  this.color = "color";
  this.brand = "brand";
  this.wheels = "wheels";
  console.log(this);
}
const blueCar = new Car("blue", "BMW", 4);
