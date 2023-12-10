// Object.keys() creates an array containing the keys of an object.

// Initialize an object

const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

const position = Object.keys(employees);
console.log(position);

// Object.values() cerates an array containing the values of an object
const session = {
  id: 1,
  time: `26-July-2018`,
  device: "mobile",
  browser: "Chrome",
};
const sessionInfo = Object.values(session);
console.log(sessionInfo);

// Object.entries() creates a nested array of the key/value pairs of an object

const operatingSystem = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Source",
};

const entries = Object.entries(operatingSystem);
console.log(entries);
// Loop through the results:
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  console.log(`${key}: ${value}`);
});
