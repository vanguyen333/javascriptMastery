// ECMAScript 6 or ES6
// const and let
var age = 27;
console.log(age); // 27
var age = 28;
console.log(age); // 28

let age = 27;
console.log(age); // 27
let age = 28;
console.log(age); // SyntaxError

const password = "123123";
password = "123456"; // TypeError: Assignment to a constant variable

let password1 = "123123";
password = "123456"; // Allowed
// Arrow Functions
function multiply(x) {
  return x * x;
}
// ... to:

const multiply = (x) => {
  return x * x;
};

// Default Parameters
// With default parameters, you do add default values to your parameters.
// For example, if a function has arguments x, y, and z, and when you call
//  this function, you do not mention the value of z, ES6 assumes its default value which has been given
// while creating function.
const add = (x = 1, y = 2, z = 10) => {
  return x + y + z;
};
// These are the default argument values which
//  will be used if no value is specified while calling the function.

add(10, 3); // 23

// x = 10;
// y = 3;
// z = 10; (since it is not defined)

// Template Strings
const customer = "John";

const order = {
  name: "iPad",
  price: 1400,
};

// the old way ... ugly
const message =
  "Hello" +
  customer.name +
  "," +
  "do you want to buy " +
  order.product +
  " for" +
  order.price +
  "bucks?";

// the new way
const message1 = `Hello ${customer.name}, do you want to buy an ${order.product} for ${order.price} bucks?`;

// That is so simple!
