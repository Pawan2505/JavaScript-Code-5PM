# **Lecture Notes: Storing Data in Local Storage in JavaScript**  

## **📌 Introduction to Local Storage**  
Local Storage is a built-in feature in web browsers that allows us to store key-value pairs persistently on a user’s device. It is useful for storing small amounts of data like user preferences, settings, or form data without requiring a backend database.  

### **✨ Key Features of Local Storage:**  
✅ Stores data in **key-value pairs**.  
✅ Data remains even after the browser is closed.  
✅ Has a maximum storage capacity of around **5MB** per domain.  
✅ Only supports **string** data (other types need to be converted).  
✅ Works within the same **protocol + domain + port** (same-origin policy).  

---

## **🆚 Local Storage vs. Session Storage vs. Cookies**  

| Feature | Local Storage | Session Storage | Cookies |
|---------|-------------|----------------|---------|
| Persistence | Until manually deleted | Until tab/browser is closed | Can have an expiration time |
| Storage Limit | ~5MB | ~5MB | ~4KB |
| Accessible By | Same-origin pages | Same-origin pages | Sent with every HTTP request |
| Data Type | String only | String only | String only |

---

## **⚡ Using Local Storage in JavaScript**  

### **1️⃣ Storing Data (`setItem`)**  
We use the `localStorage.setItem(key, value)` method to store data.  

```js
// Storing a single value
localStorage.setItem("username", "Rajesh");

// Storing multiple values (convert object to JSON string)
let user = { name: "Rajesh", city: "Mumbai", age: 28 };
localStorage.setItem("userInfo", JSON.stringify(user));
```

---

### **2️⃣ Retrieving Data (`getItem`)**  
We use `localStorage.getItem(key)` to get stored data.  

```js
// Getting a single value
let username = localStorage.getItem("username");
console.log(username); // Output: Rajesh

// Getting multiple values (convert JSON back to object)
let userData = JSON.parse(localStorage.getItem("userInfo"));
console.log(userData.city); // Output: Mumbai
```

---

### **3️⃣ Removing Data (`removeItem`)**  
We use `localStorage.removeItem(key)` to remove a specific key.  

```js
localStorage.removeItem("username");
```

---

### **4️⃣ Clearing All Data (`clear`)**  
We use `localStorage.clear()` to remove all stored data.  

```js
localStorage.clear();
```

---

### **5️⃣ Checking if a Key Exists (`if condition`)**  
```js
if (localStorage.getItem("username")) {
    console.log("User data found.");
} else {
    console.log("No user data available.");
}
```

---

## **📍 Practical Example: Storing User Preferences (Language Selection)**
### **💡 Use Case:**  
Suppose we are creating a website that allows users to select their preferred language (English, Hindi, Gujarati, Tamil, etc.). We can save their choice using Local Storage.

### **✅ Step 1: Store User Preference**
```js
function setLanguage(lang) {
    localStorage.setItem("language", lang);
    alert("Language saved: " + lang);
}

// Example Usage
setLanguage("Hindi"); // Saves 'Hindi' as the preferred language
```

### **✅ Step 2: Retrieve and Apply Language on Page Load**
```js
// Apply stored language
window.onload = function () {
    let savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
        console.log("Preferred Language:", savedLanguage);
    } else {
        console.log("No language preference found.");
    }
};
```

---

## **💰 Real-Life Use Cases**  
✅ **E-commerce Websites (Flipkart, Amazon India)** → Storing user preferences like cart items, dark mode, and language.  
✅ **Railway Reservation System (IRCTC)** → Saving frequently searched train routes.  
✅ **Food Delivery Apps (Zomato, Swiggy)** → Storing user location preferences for faster delivery.  
✅ **Government Websites (DigiLocker, UMANG App)** → Keeping temporary session details before form submission.  
✅ **Stock Market Portals (NSE, BSE India)** → Remembering favorite stock watchlists.  

---

## **🛡 Best Practices for Using Local Storage**
✅ **Store only necessary data** to optimize performance.  
✅ **Convert objects to JSON (`JSON.stringify()`)** before storing.  
✅ **Convert JSON back to objects (`JSON.parse()`)** when retrieving.  
✅ **Do not store sensitive data** (passwords, banking info, API keys) as Local Storage is accessible via DevTools.  
✅ **Use `try...catch` for error handling** to prevent JSON parsing errors.  

```js
try {
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
} catch (error) {
    console.error("Error parsing JSON:", error);
}
```

