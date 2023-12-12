// What is synchronous JavaScript?
// Synchronous JavaScript is one in which the code
// is executed line by line and their tasks are completed instanntly
// i.e. there is no time delay in the completion of the tasks for
// those lines of code.

// Synchronous example
const functionOne = () => {
  console.log("Function One");

  functionTwo();

  console.log("Function One, Part 2");
};

const functionTwo = () => {
  console.log("Function Two");
};

functionOne();

// Function One
// Function Two
// Function One, Part 2
