# **📚 Lecture Notes: Storing & Viewing Data in Local Storage in JavaScript**  

## ** Introduction to Local Storage**  
Local Storage is a web storage API that allows websites to store data persistently in a user's browser. This data remains even after the page is refreshed or the browser is closed.  

### **✨ Key Features of Local Storage:**  
✔️ Stores **key-value pairs**.  
✔️ Data persists **until manually deleted**.  
✔️ Storage capacity is around **5MB per domain**.  
✔️ Stores data as **strings** (objects must be converted to JSON).  
✔️ Works only within the **same origin** (protocol + domain + port).  

---

## **🆚 Local Storage vs. Session Storage vs. Cookies**  

| Feature | Local Storage | Session Storage | Cookies |
|---------|-------------|----------------|---------|
| Persistence | Until manually deleted | Until tab/browser is closed | Can have expiration time |
| Storage Limit | ~5MB | ~5MB | ~4KB |
| Accessible By | Same-origin pages | Same-origin pages | Sent with every HTTP request |
| Data Type | String only | String only | String only |

---

## **🛠 How to Store Data in Local Storage**  

### **1️⃣ Storing Data (`setItem`)**  
To store data, use the `localStorage.setItem(key, value)` method.  

```js
// Store a single value
localStorage.setItem("username", "Rajesh");

// Store an object (convert to JSON string)
let user = { name: "Rajesh", city: "Mumbai", age: 28 };
localStorage.setItem("userInfo", JSON.stringify(user));
```

---

### **2️⃣ Retrieving Data (`getItem`)**  
To retrieve stored data, use `localStorage.getItem(key)`.  

```js
// Retrieve a single value
let username = localStorage.getItem("username");
console.log(username); // Output: Rajesh

// Retrieve an object (convert JSON string back to object)
let userData = JSON.parse(localStorage.getItem("userInfo"));
console.log(userData.city); // Output: Mumbai
```

---

### **3️⃣ Removing Data (`removeItem`)**  
To remove a specific key, use `localStorage.removeItem(key)`.  

```js
localStorage.removeItem("username");
```

---

### **4️⃣ Clearing All Data (`clear`)**  
To remove all stored data, use `localStorage.clear()`.  

```js
localStorage.clear();
```

---

## **🔍 Viewing Data from Local Storage**  

### **✅ Method 1: Using JavaScript (`getItem`)**
You can retrieve and display stored data in the browser console.  

```js
let username = localStorage.getItem("username");
console.log("Stored Username:", username);

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log("User Info:", userInfo);
```

---

### **✅ Method 2: Display Data in HTML**
You can dynamically display Local Storage data on a webpage.  

#### **Example: Show Data in a Table**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Local Storage Data</title>
</head>
<body>
    <h2>User Information</h2>
    <p><strong>Name:</strong> <span id="name"></span></p>
    <p><strong>City:</strong> <span id="city"></span></p>
    <p><strong>Age:</strong> <span id="age"></span></p>

    <script>
        let userData = JSON.parse(localStorage.getItem("userInfo"));

        if (userData) {
            document.getElementById("name").textContent = userData.name;
            document.getElementById("city").textContent = userData.city;
            document.getElementById("age").textContent = userData.age;
        } else {
            document.body.innerHTML += "<p>No user data found in Local Storage.</p>";
        }
    </script>
</body>
</html>
```
**🔹 Expected Output:**  
```
User Information  
Name: Rajesh  
City: Mumbai  
Age: 28  
```

---

### **✅ Method 3: Using Browser DevTools**
1️⃣ Open **Developer Tools** → Press `F12` or `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac).  
2️⃣ Go to the **Application Tab**.  
3️⃣ Click on **Local Storage** in the left sidebar.  
4️⃣ Select your **website's domain** to see stored key-value pairs.  
5️⃣ **View, Edit, or Delete data** directly.  

---

## **📍 Practical Use Cases**  
✅ **E-commerce Websites (Flipkart, Amazon India)** → Storing cart items, dark mode settings, and user preferences.  
✅ **Railway Reservation System (IRCTC)** → Saving frequently searched train routes.  
✅ **Food Delivery Apps (Zomato, Swiggy)** → Storing user location preferences for quick delivery.  
✅ **Government Websites (DigiLocker, UMANG App)** → Keeping session details before form submission.  
✅ **Stock Market Portals (NSE, BSE India)** → Remembering favorite stock watchlists.  

---

## **⚡ Best Practices for Using Local Storage**
✔️ **Store only necessary data** to avoid unnecessary storage consumption.  
✔️ **Convert objects to JSON (`JSON.stringify()`)** before storing.  
✔️ **Convert JSON back to objects (`JSON.parse()`)** after retrieving.  
✔️ **Do not store sensitive data** (passwords, banking info, API keys) as Local Storage is accessible via DevTools.  
✔️ **Use `try...catch` for error handling** when parsing JSON.  

```js
try {
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
} catch (error) {
    console.error("Error parsing JSON:", error);
}
```

---

## **🎯Note :**
Local Storage is a powerful feature for storing small amounts of client-side data. It enhances user experience by remembering preferences, settings, and session details. However, it should be used responsibly, avoiding sensitive data storage.  
