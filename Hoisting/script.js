//Hosting in JavaScript
// What is hoisting?
// Hoisting is a JavaScript mechanism where
// variables and function declarations are moved to the top of their scope before code execution.

// This means that no matter where functions and variables
// are declared, they are moved to the top of their
// scope regardless of whether their scope is global or local.

// Basically, when Javascript compiles all of your code,
//all variable declarations using var are hoisted/lifted
//to the top of their functional (if declared inside
//a function) or to the top of their global scope
//(if declared outside of a function) regardless
//of where the actual declaration has been made.
//This is what we mean by “hoisting”.

// Variable Hoisting
// In JavaScript, an undeclared variable is
// assigned the value undefined at execution and
//is also of type undefined.

// Variable Hoisting
// In JavaScript, an undeclared variable is
//assigned the value undefined at execution
// and is also of type undefined.

console.log(tyepof name); // undefined
//In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.
console.log(name); // ReferenceError: name is not defined

// Key thing to note in regards to hoisting is that 
//the only thing that gets moved to the top is the variable declaration, not the actual value given to the variable.
console.log(myString); // undefined
var myString = 'test';
var myString;
console.log(myString); // undefined
myString = 'test';

// Example 1:
var hoist;

console.log(hoist); // undefined

hoist = 'The variable has been hoisted.'

// Example 2:
function hoist() {
  var message;

  console.log(message);

  message='Hoisting is cool!'
}

hoist(); // undefined

// Only declarations are hoisted
// JavaScript only hoists declarations, not initialisations. 
// If a variable is declared and initialised after using it, the value will be undefined. 
// For example:
function hoist() {
    var message = 'Hoisting is cool!'
  
    return message;
  }
  
  hoist(); // Hoisting is cool!

  console.log(myVarString); // undefined
var myVarString = 'var';

console.log(myLetString); // ReferenceError
let myLetString = 'let';

console.log(myConstString); // ReferenceError
const myConstString = 'const';

//function hosting
hoisted(); // 'This function has been hoisted.'

function hoisted() {
  console.log('This function has been hoisted.');
};
//Function expressions

functionExpression(); // ReferenceError

const functionExpression = () => {
  console.log('Will this work?');
}