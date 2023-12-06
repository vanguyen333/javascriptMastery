function square(number) {
  return number * number;
}
const result = square(5);

console.log(result);
//A Function Declaration
function name(parameters) {
  statements;
}
//A Function Expressions
let name = function (parameters) {
  statements;
};

// Arrow Function
const name = (parameters) => {
  statements;
};
//for 2 return keywords, only the first return one is executed
function test() {
  return true;
  return false;
}

test(); // true
// Parameters are used when defining a function,
// they are the names created in the function definition.
// Parameter is like a variable that is only meaningful inside of this function. It won't be accessible outside of the function.

// Arguments are real values passed to the function
// when making a function call.

const sayHi = (firstName) => {
  console.log(`Hi, ${firstName}`);
};

sayHi("Joe"); // Hi Joe
