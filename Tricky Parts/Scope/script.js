// Global Scope
//When you start writing in a JavaScript document, you're already in the Global scope.

const name = "Adrian";
//Variables written inside the Global scope can be accessed by and altered in any other scope.

const logName = () => {
  console.log(name);
};

logName();

// Local Scope
// Variables defined inside a function are in the local scope.

// Global Scope

const someFunction = () => {
  // Local Scope #1

  const anotherFunction = () => {
    // Local Scope #2
  };
};
if (true) {
  // this 'if' conditional block doesn't create a scope

  // name is in the global scope because of the 'var' keyword
  var name = "Adrian";
  // likes is in the local scope because of the 'let' keyword
  let likes = "Coding";
  // skills is in the local scope because of the 'const' keyword
  const skills = "JavaScript and PHP";
}

console.log(name); // logs 'Adrian'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined
