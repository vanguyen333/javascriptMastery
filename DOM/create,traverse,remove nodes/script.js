document.createElement("h1");
const heading = document.createElement("h1");
const body = document.querySelector("body");
body.appendChild(heading);
heading.innerText = "Hello World";

//Traverse
const subjects = document.querySelector(".subjects");
subjects.firstElementChild;
subjects.lastElementChild;

const favSubject = document.querySelector(".fav-subject");
favSubject;
favSubject.previousElementSibling;
favSubject.nextElementSibling;
favSubject.parentElement;

//Remove element from the DOM
favSubject.remove();
