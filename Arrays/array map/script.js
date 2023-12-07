// array map
const inventory = [
  {
    price: 5,
    name: "eggs",
  },
  {
    price: 4,
    name: "ham",
  },
  {
    price: 3,
    name: "mayo",
  },
  {
    price: 5,
    name: "bread",
  },
];

const prices = inventory.map((item) => item.price);
console.log(prices);
const names = inventory.map((item) => item.name);
console.log(names);
