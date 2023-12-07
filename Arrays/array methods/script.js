const names = ["Jon", "Bob", "David", "Mark"];

// Array Push - Adds a new value to the end of the array.
names.push("Dean");

// Array Pop - Deletes the last element of an array
names.pop();

// Array Shift - Deletes the first element of an array
names.shift();

// Array Unshift - Adds a new value to the start of an array
names.unshift("Dean");

// Array Splice - It adds/removes values from any position of an array
names.splice(2, 2);
names.splice(2, 0, "van", "ngoc"); //add van and ngoc from position 2 without deleting any item

// Array Slice - Copies certain parts of an array into a newely created array
const noOneLikesJon = names.slice(1); //new array starts from 1 element, the 0th element is omitted
const sliceNames = names.slice(1, 3);
