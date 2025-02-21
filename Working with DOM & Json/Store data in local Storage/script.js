// localStorage.setItem()
// localStorage.getItem()
// JSON.stringfy()

// JSON.parse()

// delete -> property of object

// remove()

// clear()


// update -> parameter -> setItem() -> string



// data set -> localStorage

// let first = "pranav";

// localStorage.setItem("user",JSON.stringify(first));

// let value = JSON.parse(localStorage.getItem("name"))

// console.log(value)


// let person = {
//     "name":"Helly",
//     "age":21,
//     "id":11
// }

// localStorage.setItem("Person1",JSON.stringify(person))

// let arr = localStorage.getItem("Person1");

// console.log(arr.name)
// console.log(arr.age)
// console.log(arr.id)

// console.log(arr);

// let p = JSON.parse(arr)

// console.log(p);

// console.log(p.name)
// console.log(p.age)
// console.log(p.id)


// // update data

// person.name = "shyam"

// // console.log(person)

// localStorage.setItem("Person1",JSON.stringify(person))

// let brr = localStorage.getItem("Person1")

// let p1 = JSON.parse(brr)

// console.log(p1);


// // delete data from local storage


// delete person.name


// localStorage.setItem("Person1",JSON.stringify(person))

// let crr = localStorage.getItem("Person1")

// let p2 = JSON.parse(crr)

// console.log(p2);

// localStorage.removeItem("name")

// localStorage.clear()


// // https://www.youtube.com/watch?v=La5cL2jNoVw



// // ==============================
// // Local Storage in JavaScript
// // ==============================

// // Store data in localStorage using setItem()
// let first = "pranav";
// localStorage.setItem("user", JSON.stringify(first)); // Convert to string before storing

// // Retrieve data from localStorage using getItem()
// let value = JSON.parse(localStorage.getItem("user")); // Convert string back to original type
// console.log(value); // Output: pranav

// // ==============================
// // Storing an Object in localStorage
// // ==============================

// let person = {
//     name: "Helly",
//     age: 21,
//     id: 11
// };

// // Save object to localStorage
// localStorage.setItem("Person1", JSON.stringify(person));

// // Retrieve object from localStorage
// let arr = localStorage.getItem("Person1");
// console.log(arr); // Output: JSON string

// let p = JSON.parse(arr); // Convert JSON string to object
// console.log(p); // Output: Object

// // Access object properties
// console.log(p.name); // Output: Helly
// console.log(p.age);  // Output: 21
// console.log(p.id);   // Output: 11

// // ==============================
// // Updating Data in localStorage
// // ==============================

// person.name = "Shyam"; // Modify object property

// // Store updated object
// localStorage.setItem("Person1", JSON.stringify(person));

// let updatedData = JSON.parse(localStorage.getItem("Person1"));
// console.log(updatedData); // Output: { name: "Shyam", age: 21, id: 11 }

// // ==============================
// // Deleting Data from localStorage
// // ==============================

// // Delete a specific property from object
// delete person.name; 

// // Save updated object
// localStorage.setItem("Person1", JSON.stringify(person));

// let afterDeletion = JSON.parse(localStorage.getItem("Person1"));
// console.log(afterDeletion); // Output: { age: 21, id: 11 }

// // Remove a specific item from localStorage
// localStorage.removeItem("user");

// // Clear all data from localStorage
// localStorage.clear();