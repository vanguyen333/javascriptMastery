// Filter method for Arrays
const numbers = [-10, 0, -2, 15, -36, 25]; // Array of postitive and negative numbers
const postitiveNumber = numbers.filter((number) => {
  return number >= 0;
});
console.log(postitiveNumber); //[0,25,25]

// A start up wants to reward the employees
// with 7 or more hours of overtime
const employeesData = [
  {
    name: "Sebastian",
    overtime: 5,
  },
  {
    name: "Cardi Vee",
    overtime: 10,
  },
  {
    name: "George Lopez",
    overtime: 12,
  },
];

const employeeReward = employeesData.filter((employee) => {
  //   console.log(employee.overtime >= 7);
  return employee.overtime >= 7;
});
const employeeNames = employeeReward.map((employee) => employee.name);
employeeNames.forEach((name) => console.log(`${name} received the reward`));
