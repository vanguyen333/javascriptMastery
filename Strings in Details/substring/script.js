const exampleString = "I love ducks, he said, ducks are great!";

exampleString.indexOf("ducks"); // 7
exampleString.indexOf("Ducks"); // -1

exampleString.indexOf("ducks", 8); // 23

exampleString.lastIndexOf("ducks"); // 23

exampleString.includes("ducks"); // true

exampleString.startsWith("I"); // true
exampleString.endsWith("ducks"); // false

//Getting the substring with slice(,)
const exampleString1 = "hotdog";

exampleString1.slice(3, 6); // dog
