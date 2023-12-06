//Ternary Operator

// if (condition) {
// 	value if true;
// } else {
// 	value if false;
// }

//condition ? value if true : value if false

if (person.age > 18) {
  console.log("You can drive");
} else {
  console.log("You may not drive yet");
}

person.age > 18
  ? console.log("You can drive")
  : console.log("You may not drive yet");

//   Reading from left to right, we first
// have our condition. Following a question
// mark is the expression that is going to
// be executed if the condition evaluates to true.
// And finally, following the colon sign
// is the expression that is going to be executed
// if the condition evaluates to false.

// At beginning, ternary operators may seem a bit
// weird and hard to read. But as you write more
// of them, you'll quickly get better at understanding them.
// They'll quickly become your go to tool
// if you have just a simple true or false question.
