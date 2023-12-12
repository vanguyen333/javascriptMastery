// Asynchronous bất đồng bộ
// Asynchoronous Code

// setInterval
//The setInterval allows you to execute a chunk of code every time a specified amount of milliseconds passes. For example; this code logs "Hello World" every thousand milliseconds:
//every second, print hello world to console, 1s = 1000

const myInterval = setInterval(() => console.log("Hello, World!"), 1000);

// clearInterval: stop the setInterval
// The clear function is especially useful if you only want an interval to execute a certain amount of time, and clear it once a condition (such as a milisecond counter getting to a certain value) is reached.
clearInterval(myInterval);

// setTimeout, wait for a periord of time set before execute the code, in this case 3 seconds
const myInterval1 = setTimeout(() => console.log("Hello, World!"), 3000);
// clearTimeout
clearTimeout(myInterval1);
