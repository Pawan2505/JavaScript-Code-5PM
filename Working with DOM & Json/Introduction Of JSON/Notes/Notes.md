# **Lecture Notes: Introduction to JSON**  
---

## **1. What is JSON?**  
JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data. It is easy to read and write for both humans and machines.

### **Key Features of JSON:**  
✔️ Text-based, lightweight, and easy to parse  
✔️ Language-independent (used in many programming languages)  
✔️ Data stored as **key-value pairs**  
✔️ Used for **data exchange between a client and server**  

---

## **2. Why Use JSON?**  
- Used in **RESTful APIs** for sending/receiving data  
- Faster and more compact than XML  
- Supported by almost all modern programming languages  
- Compatible with JavaScript and easy to work with  

---

## **3. JSON Syntax**  
JSON follows a simple key-value structure where:  
- **Keys** must be **strings** enclosed in double quotes (`""`).  
- **Values** can be **strings, numbers, booleans, null, arrays, or objects**.  
- Data is enclosed in **curly braces `{}` for objects** and **square brackets `[]` for arrays**.  

### **Example JSON Object (Using Indian Data):**  
```json
{
  "name": "Amit Sharma",
  "age": 28,
  "isMarried": false,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400001"
  }
}
```

---

## **4. JSON Data Types**  
JSON supports six data types:  
| Data Type  | Example |  
|------------|---------------------------------|  
| **String** | `"name": "Neha Patel"` |  
| **Number** | `"age": 30` |  
| **Boolean** | `"isStudent": false` |  
| **Null** | `"middleName": null` |  
| **Array** | `"languages": ["Hindi", "Gujarati", "English"]` |  
| **Object** | `"address": { "city": "Ahmedabad", "state": "Gujarat" }` |  

---

## **5. JSON vs JavaScript Object**  
Although JSON looks similar to JavaScript objects, there are key differences:  

| Feature | JSON | JavaScript Object |  
|---------|------|-------------------|  
| **Key Format** | Must be in **double quotes** | Can be without quotes |  
| **Data Types** | Only **strings, numbers, booleans, arrays, objects** | Supports functions and undefined values |  
| **Trailing Comma** | ❌ Not allowed | ✅ Allowed |  
| **Methods** | ❌ No methods | ✅ Can have methods |  

### **Example:**  
✅ **JavaScript Object:**  
```js
let person = { name: "Raj", age: 25, greet: function() { return "Namaste!"; } };
```
**JSON Format (Corrected Version):**  
```json
{
  "name": "Raj",
  "age": 25
}
```

---

## **6. Converting JSON to JavaScript and Vice Versa**  
JavaScript provides two built-in methods to handle JSON data:

### **Convert JSON to JavaScript Object** (`JSON.parse()`)  
```js
let jsonData = '{"name": "Aisha", "age": 30}';
let obj = JSON.parse(jsonData);
console.log(obj.name); // Output: Aisha
```

### **Convert JavaScript Object to JSON** (`JSON.stringify()`)  
```js
let student = { name: "Rohan Mehta", age: 21 };
let jsonString = JSON.stringify(student);
console.log(jsonString); // Output: '{"name":"Rohan Mehta","age":21}'
```

---

## **7. JSON in APIs (Practical Example)**  
APIs (Application Programming Interfaces) commonly use JSON to send and receive data.

### **Example: Fetching JSON Data from an API**
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```
✔️ **`fetch()`** makes an HTTP request  
✔️ **`response.json()`** converts JSON to a JavaScript object  
✔️ **`.catch(error)`** handles errors  

---

## **8. JSON File Format & Example**  
A JSON file has a `.json` extension and contains structured data.

### **Example `students.json` file :**  
```json
{
  "students": [
    { "id": 1, "name": "Suresh Kumar", "grade": "A", "city": "Delhi" },
    { "id": 2, "name": "Priya Verma", "grade": "B", "city": "Pune" }
  ]
}
```

---

## **9. Common Mistakes in JSON**  
❌ **Using single quotes instead of double quotes**  
```json
{ 'name': 'Ananya' }  // Incorrect
```
✅ **Correct:**  
```json
{ "name": "Ananya" }
```

❌ **Adding a trailing comma**  
```json
{
  "name": "Arjun",
  "age": 25,   // Incorrect (extra comma)
}
```
✅ **Correct:**  
```json
{
  "name": "Arjun",
  "age": 25
}
```

❌ **Using undefined values (JSON does not support `undefined`)**  
```json
{
  "nickname": undefined  // Incorrect
}
```
✅ **Correct:**  
```json
{
  "nickname": null
}
```

---

## **10. Note : **  
🔹 JSON is a lightweight, human-readable format for data exchange.  
🔹 It consists of **key-value pairs**, supporting **strings, numbers, booleans, arrays, and objects**.  
🔹 JavaScript provides `JSON.parse()` to **convert JSON to an object** and `JSON.stringify()` to **convert an object to JSON**.  
🔹 JSON is widely used in **APIs, databases, and web applications**.  
🔹 Always follow correct **JSON syntax** to avoid errors.  

---

## **11. Hands-on Practice **  
💡 **Task 1:** Create a JSON file to store a list of Indian employees with **name, age, city, and department**.  
💡 **Task 2:** Write a JavaScript function to fetch JSON data from an API and display it in the console.  
💡 **Task 3:** Convert a JavaScript object into a JSON string and log the output.  
