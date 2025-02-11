# **Lecture Notes : `setTimeout`**  

---

## **Introduction to `setTimeout`**  
JavaScript provides a built-in function, `setTimeout`, which is used to execute a function after a specified delay. It is commonly used for scheduling code execution, creating delays, and handling asynchronous behavior.  

### **Syntax of `setTimeout`**  
```javascript
setTimeout(function, delay, param1, param2, ...);
```
- `function` → The function to execute after the delay.  
- `delay` → The time (in milliseconds) to wait before executing the function.  
- `param1, param2, ...` → Optional parameters that can be passed to the function.  

---

## **Basic Example**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello after 3 seconds!");
}, 3000);

console.log("End");
```
### **Output:**
```
Start
End
Hello after 3 seconds!
```
🔹 **Explanation:**  
- The `setTimeout` function schedules the callback function to execute after 3000ms (3 seconds).  
- Meanwhile, the program continues execution and prints `"End"` before `"Hello after 3 seconds!"`.

---

## **Using Named Functions with `setTimeout`**
Instead of using an inline function, we can use a named function.

```javascript
function greet() {
    console.log("Hello, welcome to JavaScript!");
}

setTimeout(greet, 2000);
```
🔹 Here, the `greet` function will be executed after 2 seconds.

---

## **Passing Arguments to `setTimeout`**
We can pass arguments to the function executed by `setTimeout`.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Pawan");
```
🔹 The function `greet("Pawan")` will execute after 2 seconds.

---

## **Clearing a Timeout using `clearTimeout`**
If you need to cancel a scheduled `setTimeout`, use `clearTimeout`.

```javascript
let timeoutId = setTimeout(() => {
    console.log("This message will not appear!");
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout
```
🔹 Since `clearTimeout(timeoutId)` is called immediately, the scheduled function does not execute.

---

## **Practical Use Cases of `setTimeout`**
### 1️⃣ **Creating a Delayed Message**
```javascript
setTimeout(() => {
    console.log("This message appears after 2 seconds.");
}, 2000);
```

### 2️⃣ **Hiding an Element After a Delay**
```javascript
document.getElementById("myButton").addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("message").style.display = "none";
    }, 3000);
});
```
🔹 This hides an element with `id="message"` after 3 seconds when a button is clicked.

### 3️⃣ **Showing a Modal on Page Load**
```javascript
window.onload = function() {
    setTimeout(() => {
        document.getElementById("modal").style.display = "block";
    }, 5000);
};
```
🔹 A modal appears after 5 seconds when the page loads.

---

## **Difference Between `setTimeout` and `setInterval`**
| Feature        | `setTimeout`                     | `setInterval`                  |
|---------------|--------------------------------|--------------------------------|
| Execution     | Executes once after the delay | Repeats execution at intervals |
| Use Case      | Delayed execution of code     | Running code at regular intervals |
| Stopping      | `clearTimeout(id)`            | `clearInterval(id)` |

Example of `setInterval`:
```javascript
let intervalId = setInterval(() => {
    console.log("Repeating message every 2 seconds.");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);
```
🔹 The message will repeat every 2 seconds and stop after 10 seconds.

---

## **Interview Questions on `setTimeout`**
### **Q1: What is the purpose of `setTimeout`?**  
`setTimeout` is used to execute a function after a specified delay in milliseconds.

### **Q2: Does `setTimeout` pause JavaScript execution?**  
No, JavaScript continues execution while `setTimeout` schedules a function to run later.

### **Q3: How can we stop a `setTimeout` execution?**  
By using `clearTimeout(timeoutId)` where `timeoutId` is the return value of `setTimeout`.

### **Q4: What happens if the delay is `0` in `setTimeout`?**
Even if the delay is `0`, the function will execute after all synchronous code is executed.

Example:
```javascript
setTimeout(() => {
    console.log("Executed later");
}, 0);
console.log("Executed first");
```
🔹 Output:
```
Executed first
Executed later
```
Because `setTimeout` is asynchronous, it executes after synchronous code is done.

---
