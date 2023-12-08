//Array Includes

const array1 = [1, 2, 3];
console.log(array1.includes(1)); //true

const pets = ["cat", "dog", "sheep"];
console.log(pets.includes("cat")); //true

var bookshelf = [
  "Moby Dick",
  "Little Women",
  "The Great Gatsby",
  "Pride And Prejudice",
];
// Here's the array, do note that the .includes() method is case sensitive.

if (bookshelf.includes("Moby Dick")) {
  console.log("the book you were looking for was found");
} else {
  console.log("couldn't find the book, sorry. :c");
}
