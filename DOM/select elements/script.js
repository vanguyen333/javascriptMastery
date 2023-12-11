const el = document.getElementById("element-below-input");
const sb = document.getElementsByClassName("test");
const elm = document.querySelectorAll(".test"); //all elements with class of 'test'
//and so on...

//Elements Properties and Methods
var element = document.getElementById("div1");

console.log(element.classlist); // ["div1", "div2", value: "div1 div2"]

console.log(element.className); // "div1 div2"

console.log(element.id); // "div1"

console.log(element.innerHtml); // "<span>hello</span>"

const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("You clicked on the button");
});
button.hasAttribute("type"); //true
