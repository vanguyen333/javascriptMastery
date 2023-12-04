console.log(2 + 4);
//Exponent
result = 3 ** 2;
console.log(result);

//Module: getting remainder

console.log(7 % 3); //1
console.log(4 % 11); //4

//Increment Decrement
result++;
result--;

// == check value
//check value and type ===,strict equality
const a = 10;
const b = "10";
console.log(a == b); //true, loose equality
console.log(a === b); //false

//Strict vs Loose Equality
//strict equality:compares values and data types
//Loose equality: NOT compare Data Types

//The Good Ones: === !==
//The Evil Ones: == != : give unexpected results

console.log("" == "0"); //false
console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(false == "false"); //false
console.log(false == "0"); //true

console.log(true == 1); //true

//Logical Operators
console.log(true && false); //false
console.log(true && true); //true

console.log(true || false); //true

//Assignment Operator
let num = 5;
num += 5;
console.log(num); //10
