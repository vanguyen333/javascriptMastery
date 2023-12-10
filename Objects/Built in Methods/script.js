// Built in Methods with Objects

const dog = {
  name: "Fluffy",
  age: 2,
  listAllProperties: function () {
    console.log(this.name, this.age);
  },
  // myMethod1:function(){

  // },
  // myMethod3(){

  // }
};
dog.listAllProperties();
