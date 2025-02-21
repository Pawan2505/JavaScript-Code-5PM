### **JavaScript: Objects with Arrays, Object Looping, and Making Quotes**

## **1. Objects with Arrays**
Objects and arrays can be combined in various ways. You can have:

- **An array of objects**
- **An object containing an array as a property**

### **Example 1: Array of Objects**
```javascript
let students = [
    { name: "Amit", age: 22, course: "JavaScript" },
    { name: "Bhavna", age: 21, course: "ReactJS" },
    { name: "Chirag", age: 23, course: "NodeJS" }
];

console.log(students[0].name); // Output: Amit
```
📌 **Use case:** This is useful when dealing with structured data like a list of users, products, or employees.

---

### **Example 2: Object with an Array**
```javascript
let student = {
    name: "Divya",
    age: 20,
    subjects: ["HTML", "CSS", "JavaScript"]
};

console.log(student.subjects[1]); // Output: CSS
```
📌 **Use case:** This is useful when an entity has multiple attributes in list format, like a student with multiple subjects.

---

## **2. Looping Through Objects**
When working with objects, you often need to loop through them to access or modify data.

### **Method 1: Using `for...in` (Looping Over Object Properties)**
```javascript
let person = {
    name: "Esha",
    age: 25,
    city: "Mumbai"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```
📌 **Output:**
```
name: Esha
age: 25
city: Mumbai
```

---

### **Method 2: Looping Through an Array of Objects**
```javascript
let users = [
    { name: "Gaurav", age: 30 },
    { name: "Harini", age: 28 },
    { name: "Ishaan", age: 35 }
];

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});
```
📌 **Output:**
```
Gaurav is 30 years old
Harini is 28 years old
Ishaan is 35 years old
```

---

### **Method 3: Using `Object.keys()`, `Object.values()`, and `Object.entries()`
#### **1. `Object.keys()` - Get All Keys**
```javascript
console.log(Object.keys(person)); // Output: ["name", "age", "city"]
```
#### **2. `Object.values()` - Get All Values**
```javascript
console.log(Object.values(person)); // Output: ["Esha", 25, "Mumbai"]
```
#### **3. `Object.entries()` - Get Key-Value Pairs**
```javascript
console.log(Object.entries(person));
// Output: [["name", "Esha"], ["age", 25], ["city", "Mumbai"]]
```

---

## **3. Make Quotes Using Objects**
Creating quotes dynamically can be done using objects and arrays. Here's how:

### **Example: Random Quote Generator**
```javascript
let quotes = [
    { author: "Mahatma Gandhi", text: "Be the change that you wish to see in the world." },
    { author: "Rabindranath Tagore", text: "You can't cross the sea merely by standing and staring at the water." },
    { author: "Swami Vivekananda", text: "Arise, awake, and stop not till the goal is reached." }
];

// Function to get a random quote
function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    console.log(`"${quote.text}" - ${quote.author}`);
}

getRandomQuote(); 
```
📌 **How It Works:**
- The `quotes` array stores objects with `text` and `author`.
- The `getRandomQuote()` function selects a random quote and logs it.

---

## **4. Object Prototype Concept**
In JavaScript, prototypes can be used to add properties or methods to a constructor function. When objects are created using that constructor, they inherit the properties and methods defined on its prototype.

### **Example: Adding a Method to a Constructor's Prototype**
```javascript
function Person(fname, lname, age, salary) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.salary = salary;
}

Person.prototype.changeName = function(newName) {
    this.firstname = newName;
}

let person1 = new Person("Pawan", "Maurya", 24, 100);

person1.changeName("Anoop");

console.log(person1.firstname); // Output: Anoop
```
📌 **Use case:** This allows for sharing methods across all instances of a constructor function, saving memory and providing a consistent way to add functionality to objects.
