// // Creating an object using an empty object literal
// const obj1 = {}; 

// // Adding properties dynamically
// obj1.name = "Vishawa";  
// obj1.age = 18;  

// // Displaying the entire object
// console.log(obj1);  

// // Accessing object properties using dot notation
// console.log(obj1.name);  

// // Accessing object properties using bracket notation (quotes required for keys)
// console.log(obj1["name"]);  
// console.log(obj1["age"]);  

// // Creating an object with predefined properties
// const person = { name: "Pranav", age: 22, salary: 1000000 };

// // Displaying the entire object
// console.log(person);

// // Accessing a specific property using dot notation
// console.log(person.name);

// // Adding a new property dynamically
// person.graduation = "B.Tech";  
// console.log(person);

// // Deleting a property from the object
// delete person.salary;  
// console.log(person);

// // Updating an existing property
// person.age = 25;  
// console.log(person);

// // Adding a method inside an object
// const personWithMethod = {
//     name: "Pranav",
//     age: 22,
//     salary: 1000000,
//     dob: function() {
//         console.log(`Age: ${this.age}`); // Using 'this' to refer to the object's property
//         console.log(this);  // 'this' refers to the current object
//     }
// };

// // Calling the method
// personWithMethod.dob();

// // Nested Objects: An object within an object
// const personWithCar = {
//     name: "Pranav",
//     age: 22,
//     salary: 1000000,
//     dob: function() {
//         console.log(`Age: ${this.age}`);
//         console.log(this);
//     },
//     car: {  // Nested object
//         car1: "BMW",
//         car2: "Kia",
//         car3: "XYZ"
//     }
// };

// // Accessing a nested object property
// console.log(personWithCar.car.car2);

// // Object Constructor Function
// function Person(fname, age, salary) {
//     this.name = fname;  
//     this.age = age;  
//     this.salary = salary;  
// }

// // Creating instances of the Person constructor function
// const person1 = new Person("Helly", 16, 999999);
// console.log(person1);
// console.log(person1.age);

// const person2 = new Person("Satyam", 30, 78900000000);
// console.log(person2.salary);
// console.log(person2);

// // Using Object.values() to retrieve all property values of an object
// console.log(Object.values(person));



