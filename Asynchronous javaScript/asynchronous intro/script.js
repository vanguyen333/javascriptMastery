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

// Asynchronous JavaScript is a one in which some lines of code
// take time to run.
// These tasks are run in the background
// while the JavaScript engine keeps executing other lines of code
// When the result of the asynchronous tasks gets available,
// is then used in the program.

const functionMot = () => {
  console.log("Function Mot"); // 1

  functionHai();

  console.log("Function One, Part hai"); // 2
};

const functionHai = () => {
  setTimeout(() => {
    console.log("Function hai");
  }, 3000); // 3
};

functionOne();

// Function Mot
// Function One, Part hai
//(after 3 seconds delay)
// Function hai
