// // Creating an empty array
// let arr = []; 

// // Checking the type of the array
// console.log(typeof arr); // Output: object

// // Creating an array with multiple data types
// let brr = [12, "Pawan", 34.56, true];

// // Printing the array
// console.log(brr); // Output: [12, "Pawan", 34.56, true]

// // Adding an element to the end of the array
// brr.push(123);

// // Printing the updated array
// console.log(brr); // Output: [12, "Pawan", 34.56, true, 123]

// // Re-declaring and initializing an empty array
// let arr = [];

// // Adding elements to the array one by one
// arr.push(10);
// console.log(arr); // Output: [10]

// arr.push(20);
// console.log(arr); // Output: [10, 20]

// arr.push(30, 40, 50);
// console.log(arr); // Output: [10, 20, 30, 40, 50]

// // Removing the last element from the array
// console.log(arr.pop()); // Output: 50

// // Printing the updated array
// console.log(arr); // Output: [10, 20, 30, 40]

// // Creating a new array
// let brr = [10, 20, 30];

// // Printing the array
// console.log(brr); // Output: [10, 20, 30]

// // Removing the first element from the array
// console.log(brr.shift()); // Output: 10

// // Printing the updated array
// console.log(brr); // Output: [20, 30]

// // Adding multiple elements to the start of the array
// brr.unshift(100, 200, 300);
// console.log(brr); // Output: [100, 200, 300, 20, 30]

// // Using splice to modify the array
// brr.splice(2, 2, 111, 222); // Removes 2 elements from index 2, adds 111 and 222
// console.log(brr); // Output: [100, 200, 111, 222, 20, 30]

// // Using slice to get a portion of the array
// console.log(brr.slice(2, 4)); // Output: [111, 222]

// // Finding the element at a specific index
// console.log(brr.at(3)); // Output: 222

// // Finding the index of a specific value
// console.log(brr.indexOf(300)); // Output: 0 (if 300 is in the array)

// // Demonstrating a callback function with findIndex
// console.log(brr.findIndex((num) => num > 200)); // Finds the first element greater than 200

// // Creating an array with repeated values
// let brr = [11, 11, 11, 2, 3, 4, 5];

// // Finding the index of the first even number
// let even = brr.findIndex((num) => num % 2 == 0);
// console.log(even); // Output: index of the first even number

// // Using forEach to iterate over the array and print each element
// brr.forEach((num) => console.log(num));

// // Using forEach to calculate the sum of all elements
// let sum = 0;
// brr.forEach((num) => {
//     sum += num;
// });
// console.log(sum); // Output: sum of all elements

// // Checking if an element is included in the array
// console.log(brr.includes(4)); // Output: true or false
// console.log(brr.includes(41)); // Output: false

// // Checking if all elements satisfy a condition using every
// let brr = [2, 4, 6, 8, 15];
// let result = brr.every((num) => num % 2 == 0);
// console.log(result); // Output: false

// // Checking if any element satisfies a condition using some
// let brr = [2, 4, 6, 8, 16];
// console.log(brr.some((num) => num % 2 != 0)); // Output: true

// // Creating an array with mixed elements
// let brr = [2, 4, 5, 6, 8, 9, 16];

// // Using filter to get all even numbers
// console.log(brr.filter((num) => num % 2 == 0)); // Output: array of even numbers

// // Using map to create a new array with each element doubled
// console.log(brr.map((num) => num * 2)); // Output: array with each element doubled

// // Printing the length of the array
// console.log(brr.length); // Output: length of the arr