// And we're back to logical operators! Remember I've told you that we're going to return to them, I didn't forget! :)

// Let's do a quick recap and then we're going to see some real and more complex examples of all three logical operators.

// Logical operators are used to combine two or more conditions. If you remember correctly, JavaScript includes three logical operators:
// ||
// OR,
// &&
// AND,
// {*!*}
// NOT.

// AND Operator (&&)
// Double ampersand
// &&
// is known as AND operator. It checks whether two operands are truthy values. And if they are truthy, it returns
// true
// , otherwise it returns
// false
// . They are often used as a condition in an if statement, so let's show that in an example.

// Lets say that we want to choose which people may enter our club. To enter, they need to be cool, and they also need to be older than 18.

// const age = 19; // age is represented by a number
// const isCool = true; // isCool is represented by a boolean

// if(isCool && age > 18) { // notice how we didn't say isCool === true
// 		console.log('You may enter.');
// } else {
// 		console.log('You cannot enter.');
// }
// isCool is true, and age is greater than the 18, that means that we're going the if block of code is going to be executed and we'll see
// You may enter
// . in the console.

// Now, the point of this lecture is not an if/else statement. Let's remove that so we can focus purely on the logical operators. The only thing that we're going to keep is the condition. Let's log it to the console:

// const age = 19;
// const isCool = true;

// console.log(isCool && age > 18);
// We got true which is not a surprise. But now, instead of these true boolean values, let's test it with some truthy values.

// console.log('truthy' && 1 && 'test' && 999);
// The output of this is 999, and why is that so? Shouldn't the logical operator AND return a boolean value? Here's how it works.

// The AND
// &&
// operator does the following:

// It evaluates operands from left to right.
// It converts them to a boolean value.
// If the result is
// true
// , it continues to the next value.
// If the result is
// false
// , it stops and returns the original value of that operand.
// If all operands have been evaluated to true, it returns the last operand.
// Now you know why 999 was returned, all the values were truthy and it was the last one on the list.

// What if we change one value to be falsy?

// console.log('truthy' && 0 && 'test' && 999);
// As you can see, if even one falsy value exists, it's going to stop and immediately return that value.

// In other words, AND returns the first falsy value or the last truthy value if no falsy values have been found.

// Now let's move on to the OR operator.

// OR Operator (||)
// The syntax for the OR operator are two straight vertical lines
// ||
// . It checks whether any one of the two operands is a truthy value.

// Lets's see it in action:

// console.log('truthy' || 0 || 'test' || 999);
// We get
// truthy
// , why is that? Well let's see how the OR operator works:

// The OR
// ||
// operator does the following:

// For each operand, it converts it to boolean.
// If the result is
// true
// , it stops and returns the original value of that operand.
// If all operands have been evaluated to falsy returns the last operand.
// In other words, a chain of OR
// "||"
// returns the first truthy value or the last one if no truthy value is found.

// So now, if we change all of the values to be falsy, it is going to return the last one:

// console.log('' || 0 || null || undefined);
// As you can see, we get undefined.

// Not Operator (!)
// An exclamation sign  !

// is known as NOT operator. It reverses the boolean result of the condition.

// The syntax is pretty simple:

// console.log(!true); // false
// The operator accepts a single argument and does the following:

// Converts the operand to boolean type:
// true/false
// .
// Returns the inverse value.
// For instance:

// alert(!true); // false
// alert(!0); // true
// A double NOT !!

// is sometimes used for converting a value to boolean type:

// alert( !!"truthy" ); // true
// alert( !!null ); // false
// That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

// This was a long lecture, so let's try to summarise it and repeat what we've learned.

// JavaScript is lazy. It will want to do the least amount of work possible to get its return value.

// With the AND operator: JavaScript will first try to return the first falsy value. If none were found, it will return the last truthy value.

// And with the OR operator: JavaScript will first try to return the first truthy value. If none were found, it will return the last falsy value.
