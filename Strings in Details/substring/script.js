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

//SPLIT A STRING
const words = "dog";
console.log(words.split("")); //['d','o','g']
const sentence = "the quick dog runs around.";
const word = sentence.split(" ");
console.log(word); //split each word separately

//Reverse A STRING
const exampleString2 = "test";
const reversedString = exampleString2.split("").reverse(); //reverse() is an array method
console.log(reversedString); //['t', 's', 'e', 't']

//REPEAT

const dogSays = "woof";
console.log(dogSays.repeat(3));

//trim()
const email = " contact@gmail.com     ";
console.log(email.trim(" "));

//EXERCISES
//guests
const guestList = "Our guests are: emma, jacob, isabella, ethan";

//get a length
console.log(guestList.length); //44
//upper case the enter string
console.log(guestList.toUpperCase());
//check weather "ETHAN" is on the uppercasedGuestList
//store the answer in a variable called isEthanOnTheList
const uppercasedGuestList = guestList.toUpperCase();
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
isEthanOnTheList ? console.log("true") : console.log("false");

//create a substring that only contains the following:
//'EMMA, JACOB, ISABELLA, ETHAN'
const substringGuests = uppercasedGuestList.slice(16, guestList.length);
console.log(substringGuests);

//out of the substring u just created, create an array of names
// of people that are on the list
//store that array in a variable called guests
const guests = substringGuests.split(" ");
console.log(guests);
