// Create an object with properties
const person = {name: "satayam", age: 21, salary: 99};

// Log the entire object
console.log(person);

// Log the values of the object properties
console.log(Object.values(person));

// Log the keys of the object properties
console.log(Object.keys(person));

// Log the entries (key-value pairs) of the object
console.log(Object.entries(person));

// Iterate over the object properties using for-in loop
for(let key in person){
    console.log(` ${key} : ${person[key]}`);
}

// Array of numbers
let arr = [12, 34, 5, 6, 7, 8, 89, 9];

// Iterate over the array using for-in loop
for(let index in arr){
    console.log(`Index : ${index}  -> Value : ${arr[index]}`);
}

// Array of objects
const persons = [
    {name: "Priyank", age: 17, salary: 999999},
    {name: "helly", age: 18, salary: 10000},
    {name: "pranav", age: 22, salary: 1000},
    {name: "sataym", age: 20, salary: 44444}
];

// Log the entire array of objects
console.log(persons);

// Log the first object in the array
console.log(persons[0]);

// Log the name property of the first object
console.log(persons[0].name);

// Another object with an array property
const student = {
    name: "Priyank",
    age: 17,
    salary: 999999,
    course: ["HTML", "CSS", "JS", "React", "DSA"]
};

// Log the entire student object
console.log(student);

// Log the age property of the student
console.log(student.age);

// Log the fourth course
console.log(student.course[3]);

// Constructor function to create student objects
function Student(name, age){
    this.name = name;
    this.age = age;
}

// Create a new student object
let s1 = new Student("Pawan", 25);

// Log the new student object
console.log(s1);

// Add a method to the Student prototype to change the name and age
Student.prototype.changeName = function(newName, myAge){
    this.name = newName;
    this.age = myAge;
};

// Change the name and age of the student object
s1.changeName("Pranav", 23);

// Log the updated student object
console.log(s1);

// Array of quote objects
const quotes = [
    { author: "Mahatma Gandhi", text: "Be the change that you wish to see in the world." },
    { author: "Rabindranath Tagore", text: "You can't cross the sea merely by standing and staring at the water." },
    { author: "Swami Vivekananda", text: "Arise, awake, and stop not till the goal is reached." }
];

// Function to generate a random quote
function generateQuote(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    console.log(`${quote.text}  - ${quote.author}`);
}

// Call the function to generate a quote
generateQuote();

// Example of using Math.floor to remove decimal places
let value = 25.7;
let num = Math.floor(value);
console.log(num);

// Examples of generating random numbers
let randomValue = Math.floor(Math.random());  // between 0 and 1
randomValue = Math.floor(Math.random() * 100);  // between 0 and 99
console.log(randomValue);

// Array of user objects
let users = [
    { name: "Gaurav", age: 30 },
    { name: "Harini", age: 28 },
    { name: "Ishaan", age: 35 }
];

// Iterate over the user objects using forEach
users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old`);
});