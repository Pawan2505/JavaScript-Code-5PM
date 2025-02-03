### **JavaScript: Objects with Arrays, Object Looping, and Making Quotes**

## **1. Objects with Arrays**
Objects and arrays can be combined in various ways. You can have:

- **An array of objects**
- **An object containing an array as a property**

### **Example 1: Array of Objects**
```javascript
let students = [
    { name: "Alice", age: 22, course: "JavaScript" },
    { name: "Bob", age: 21, course: "ReactJS" },
    { name: "Charlie", age: 23, course: "NodeJS" }
];

console.log(students[0].name); // Output: Alice
```
📌 **Use case:** This is useful when dealing with structured data like a list of users, products, or employees.

---

### **Example 2: Object with an Array**
```javascript
let student = {
    name: "David",
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
    name: "Eve",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```
📌 **Output:**
```
name: Eve
age: 25
city: New York
```

---

### **Method 2: Looping Through an Array of Objects**
```javascript
let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Mike", age: 35 }
];

users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});
```
📌 **Output:**
```
John is 30 years old
Jane is 28 years old
Mike is 35 years old
```

---

### **Method 3: Using `Object.keys()`, `Object.values()`, and `Object.entries()`**
#### **1. `Object.keys()` - Get All Keys**
```javascript
console.log(Object.keys(person)); // Output: ["name", "age", "city"]
```
#### **2. `Object.values()` - Get All Values**
```javascript
console.log(Object.values(person)); // Output: ["Eve", 25, "New York"]
```
#### **3. `Object.entries()` - Get Key-Value Pairs**
```javascript
console.log(Object.entries(person));
// Output: [["name", "Eve"], ["age", 25], ["city", "New York"]]
```

---

## **3. Make Quotes Using Objects**
Creating quotes dynamically can be done using objects and arrays. Here's how:

### **Example: Random Quote Generator**
```javascript
let quotes = [
    { author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { author: "Isaac Newton", text: "If I have seen further, it is by standing on the shoulders of giants." },
    { author: "Steve Jobs", text: "Stay hungry, stay foolish." }
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
