# **📚 Lecture Notes: Deleting & Updating Data in Local Storage Using JSON**  

## **🔹 Introduction**  
Local Storage stores data as **key-value pairs** in the browser. Since it only supports strings, we need to **convert objects to JSON** before storing and **parse JSON back** when retrieving.  

✅ In this lecture Notes :  
1. **Updating JSON Data in Local Storage**  
2. **Deleting Specific Data**  
3. **Deleting All Data**  

---

## **🛠 1️⃣ Updating Data in Local Storage**  
### **Example Scenario**  
A user’s profile is stored in Local Storage. We will update their **city** dynamically.  

### **🔹 Step 1: Store Initial Data**
```js
let user = { name: "Amit", city: "Delhi", age: 30 };
localStorage.setItem("userInfo", JSON.stringify(user));

console.log("Initial Data:", JSON.parse(localStorage.getItem("userInfo")));
```
🔹 **Stored Data in Local Storage:**  
```json
{"name": "Amit", "city": "Delhi", "age": 30}
```

---

### **🔹 Step 2: Update City in Local Storage**
```js
// Get stored user data
let userData = JSON.parse(localStorage.getItem("userInfo"));

// Update city
userData.city = "Mumbai";

// Store the updated data
localStorage.setItem("userInfo", JSON.stringify(userData));

console.log("Updated Data:", JSON.parse(localStorage.getItem("userInfo")));
```
🔹 **Updated Data in Local Storage:**  
```json
{"name": "Amit", "city": "Mumbai", "age": 30}
```

---

## **🛠 2️⃣ Deleting Specific Data in Local Storage**
### **🔹 Remove a Specific Key (`removeItem`)**  
If we only want to remove a specific key (e.g., `userInfo`), use:  
```js
localStorage.removeItem("userInfo");
console.log("After Deletion:", localStorage.getItem("userInfo")); // null
```
✅ **Only `userInfo` is removed. Other data remains.**  

---

## **🛠 3️⃣ Deleting a Specific Property from JSON in Local Storage**
Sometimes, we want to delete a **single property** inside a stored object **without removing the entire object**.  

### **🔹 Example: Remove Age from `userInfo`**
```js
// Retrieve stored data
let userData = JSON.parse(localStorage.getItem("userInfo"));

// Remove 'age' property
delete userData.age;

// Save updated object
localStorage.setItem("userInfo", JSON.stringify(userData));

console.log("After Removing Age:", JSON.parse(localStorage.getItem("userInfo")));
```
🔹 **Updated JSON in Local Storage:**  
```json
{"name": "Amit", "city": "Mumbai"}
```
✅ **Only the `age` property is removed, `userInfo` still exists.**  

---

## **🛠 4️⃣ Clearing All Data in Local Storage**
To completely **remove all stored data**, use `clear()`:  
```js
localStorage.clear();
console.log("All Data Cleared:", localStorage.length); // 0
```
✅ **This will delete everything stored in Local Storage.**  

---

## **📌 Summary**
✅ **Update JSON in Local Storage** → Retrieve, modify, and store back.  
✅ **Remove a Specific Key** → `localStorage.removeItem(key)`.  
✅ **Delete a Property from JSON** → Use `delete obj.property` and update storage.  
✅ **Clear All Data** → `localStorage.clear()`.  

---

## **💡 Real-World Applications **
- **E-commerce (Flipkart, Amazon India)** → Update user preferences dynamically.  
- **IRCTC (Indian Railways)** → Remove old search history from Local Storage.  
- **Swiggy/Zomato** → Update the last delivery address or remove saved cards.  
- **Stock Market Apps (NSE, BSE)** → Delete a single stock from watchlist.  
