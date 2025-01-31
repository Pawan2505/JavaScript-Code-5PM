
// // create object

// const obj1 = {};

// obj1.name = "Vishawa";
// obj1.age = 18;

// console.log(obj1);

// console.log(obj1.name);
// // or
// console.log(obj1["name"]);  // double quote required
// console.log(obj1["age"]);  


// const person = {name : "pranav", age:22, salary: 1000000};

// // display

// console.log(person);

// // access


// console.log(person.name);


// // insert

// person.graduation = "B.tech";

// console.log(person);


// // delete

// delete person.salary;

// console.log(person);


// // update

// person.age = 25;


// console.log(person);


// const person = {
//     name : "pranav",
//     age:22,
//     salary: 1000000,
//     dob : function(){
//         console.log(`Age : ${this.age}`);
//         console.log(this);
//     }
// };

// person.dob();

// Nested Object


// const person = {
//     name : "pranav",
//     age:22,
//     salary: 1000000,
//     dob : function(){
//         console.log(`Age : ${this.age}`);
//         console.log(this);
//     },

//     car : {
//         car1 : "BMW",
//         car2 : "Kia",
//         car3 : "xyz"
//     }
       
    
// };


// console.log(person.car.car2);



// object constructor


// const person = {
//     name : "pranav",
//     age:22,
//     salary: 1000000,
//     dob : function(){
//         console.log(`Age : ${this.age}`);
//         console.log(this);
//     }
// };



// function person(fname, age, salary){
//     this.name = fname,
//     this.age = age,
//     this.salary = salary    
// }

// const person1 = new person("Helly",16,999999);

// console.log(person1);

// console.log(person1.age);

// const person2 = new person("saytam", 30, 78900000000);

// console.log(person2.salary);

// console.log(person2);



// const person = {
//     name : "pranav",
//     age:22,
//     salary: 1000000,
//     dob : function(){
//         console.log(`Age : ${this.age}`);
//         console.log(this);
//     }
// };

// // // Using Object.values() to get an array of property values


// console.log(Object.values(person));


