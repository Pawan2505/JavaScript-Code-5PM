# **Lecture Notes : JavaScript Objects**  

## **Introduction to Objects in JavaScript**  
In JavaScript, objects are fundamental data structures used to store and manage data. They allow us to group related data (properties) and behaviors (methods) together.  

---

## **1. Creating an Object**  
There are multiple ways to create objects in JavaScript. The simplest way is using an **empty object literal** `{}`.  

### **Example: Creating an Empty Object**  
```javascript
const obj1 = {};  // Empty object
```
At this point, `obj1` is an empty object with no properties.

---

## **2. Adding Properties to an Object Dynamically**  
You can add properties to an object after it has been created.  

### **Example: Adding Properties**  
```javascript
obj1.name = "Vishawa";  
obj1.age = 18;  
console.log(obj1);
```
### **Output:**  
```javascript
{ name: "Vishawa", age: 18 }
```
Here, properties `name` and `age` are added dynamically.

---

## **3. Accessing Object Properties**  
There are two ways to access properties of an object:  
1. **Dot notation (`.`)**  
2. **Bracket notation (`["key"]`)**

### **Example: Accessing Properties**  
```javascript
console.log(obj1.name);   // Using dot notation
console.log(obj1["name"]); // Using bracket notation
console.log(obj1["age"]);  
```
> **Note:** In bracket notation, the key **must be inside quotes**.

---

## **4. Creating an Object with Predefined Properties**  
Instead of adding properties dynamically, you can define them directly while creating the object.  

### **Example: Creating an Object with Properties**  
```javascript
const person = { name: "Pranav", age: 22, salary: 1000000 };
console.log(person);
```
### **Output:**  
```javascript
{ name: "Pranav", age: 22, salary: 1000000 }
```

---

## **5. Modifying an Object**  
### **Adding a New Property**
```javascript
person.graduation = "B.Tech";  
console.log(person);
```
> This dynamically adds a new property `graduation`.

### **Deleting a Property**
```javascript
delete person.salary;  
console.log(person);
```
> This removes the `salary` property from the object.

### **Updating an Existing Property**
```javascript
person.age = 25;  
console.log(person);
```
> This updates the `age` property to `25`.

---

## **6. Adding Methods to an Object**  
Objects can have **methods** (functions inside objects) to perform actions.

### **Example: Adding a Method**
```javascript
const personWithMethod = {
    name: "Pranav",
    age: 22,
    salary: 1000000,
    dob: function() {
        console.log(`Age: ${this.age}`); // 'this' refers to the current object
        console.log(this);
    }
};

// Calling the method
personWithMethod.dob();
```
### **Output:**  
```javascript
Age: 22
{ name: "Pranav", age: 22, salary: 1000000, dob: [Function] }
```
> **Key Concept:**  
- The `this` keyword refers to the current object.  
- We use `this.age` to access the `age` property inside the method.  

---

## **7. Nested Objects (Objects Inside Objects)**  
An object can have another object as a property.  

### **Example: Nested Object**
```javascript
const personWithCar = {
    name: "Pranav",
    age: 22,
    salary: 1000000,
    dob: function() {
        console.log(`Age: ${this.age}`);
        console.log(this);
    },
    car: {  // Nested object
        car1: "BMW",
        car2: "Kia",
        car3: "XYZ"
    }
};

// Accessing a nested object property
console.log(personWithCar.car.car2);
```
### **Output:**  
```javascript
Kia
```
> **Key Concept:**  
- The `car` object is a **nested object** inside `personWithCar`.
- We access `car2` using `personWithCar.car.car2`.

---

## **8. Object Constructor Function**  
JavaScript allows you to create multiple objects using a constructor function.

### **Example: Creating Objects Using a Constructor**
```javascript
function Person(fname, age, salary) {
    this.name = fname;
    this.age = age;
    this.salary = salary;
}

// Creating new objects using the constructor function
const person1 = new Person("Helly", 16, 999999);
const person2 = new Person("Satyam", 30, 78900000000);

console.log(person1);
console.log(person1.age);
console.log(person2.salary);
console.log(person2);
```
### **Output:**  
```javascript
Person { name: 'Helly', age: 16, salary: 999999 }
16
78900000000
Person { name: 'Satyam', age: 30, salary: 78900000000 }
```
> **Key Concept:**  
- The `Person` constructor function creates **multiple instances** of an object.
- The `new` keyword creates a new object and assigns properties dynamically.

---

## **9. Extracting Object Values**  
You can retrieve all values of an object as an array using `Object.values()`.

### **Example: Using `Object.values()`**
```javascript
console.log(Object.values(person));
```
### **Output:**  
```javascript
["Pranav", 22, "B.Tech"]
```
> **Key Concept:**  
- `Object.values()` returns an **array** containing only the values of an object.

---

## **Summary of Key Concepts**
| Concept | Explanation | Example |
|---------|------------|---------|
| **Object Creation** | Create an empty object | `const obj = {};` |
| **Adding Properties** | Assign values dynamically | `obj.name = "John";` |
| **Accessing Properties** | Use dot or bracket notation | `obj.name` / `obj["name"]` |
| **Updating Properties** | Change existing values | `obj.age = 30;` |
| **Deleting Properties** | Remove a property from an object | `delete obj.salary;` |
| **Adding Methods** | Define functions inside objects | `obj.greet = function() {...}` |
| **Nested Objects** | Objects inside objects | `obj.car.model = "BMW";` |
| **Constructor Function** | Create multiple object instances | `function Person() {...}` |
| **Extracting Values** | Get all values of an object | `Object.values(obj)` |

---

## **Note : **
JavaScript objects provide a flexible and powerful way to store and manage data. By understanding object creation, modification, methods, nesting, and constructors, you can efficiently handle real-world data structures in JavaScript.

### **Practice Questions**
1. Create an object representing a **book** with properties like `title`, `author`, and `year`. Add a method to display the book details.
2. Create an object representing a **student** with `name`, `age`, and an array of `subjects`. Access the second subject.
3. Write a constructor function to create multiple **employees** with `name`, `designation`, and `salary`.
