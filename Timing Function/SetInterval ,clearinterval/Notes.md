# **Lecture Notes : `setInterval` and `clearInterval`**  

---

## **What Will You Learn in This Lecture?**  
In this class, we will cover:  

✅ What is `setInterval` and `clearInterval`?  
✅ How to use `setInterval` for repeated actions?  
✅ How to stop `setInterval` using `clearInterval`?  
✅ Real-life examples and hands-on exercises  

---

## **🔹 What is `setInterval`?**
- `setInterval` is a **JavaScript function** that repeatedly executes a task after a fixed time.  
- It continues to run **until stopped manually** using `clearInterval()`.  

### **Syntax:**  
```javascript
setInterval(function, time_in_milliseconds);
```
- `function`: The task that will be repeated.  
- `time_in_milliseconds`: The time gap between repetitions (**1000ms = 1 second**).  

### **💡 Example: Print a Message Every 2 Seconds**
```javascript
setInterval(() => {
    console.log("Hello! I am running every 2 seconds.");
}, 2000);
```
🔹 This prints **"Hello! I am running every 2 seconds."** every 2 seconds.

---

## **🔹 How to Stop `setInterval`? (`clearInterval`)**
- **Problem:** `setInterval` runs **forever** if not stopped.  
- **Solution:** Use `clearInterval(intervalID)`.  

### **Example: Stop After 5 Times**
```javascript
let count = 0;
let intervalID = setInterval(() => {
    count++;
    console.log(`Message ${count}`);

    if (count === 5) {
        clearInterval(intervalID); // Stops after 5 times
        console.log("Interval Stopped!");
    }
}, 2000);
```
🔹 The message will print **5 times**, then stop.

---

## **🔹 Real-Life Examples of `setInterval`**
1️⃣ **Digital Clock** – Updating time every second.  
2️⃣ **Image Slideshow** – Automatically switching images.  
3️⃣ **Countdown Timer** – Displaying remaining time in exams.  
4️⃣ **Notifications** – Showing alerts at intervals.  
5️⃣ **Typing Animation** – Showing text letter by letter.

---
