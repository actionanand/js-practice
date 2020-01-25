const person = {
    name: 'Anand',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const printName = ({ name }) => {
    console.log(name);
  };
  
  printName(person);
  
  //obj destructuring
  const { name: newName, age } = person;
  console.log(newName, age);
  
 //Array destructuring
  const hobbies = ['Sports', 'Cooking'];
  const [hobby1, hobby2] = hobbies;
  console.log(hobby1, hobby2);
