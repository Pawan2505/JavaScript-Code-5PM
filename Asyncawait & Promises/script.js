// 1. Simple function without async/await
// function myrequest() { }
// console.log(myrequest())

// 2. Function using async but without returning a value
// async function myrequest() { }
// console.log(myrequest());

// 3. Async function returning a value
// async function myrequest() {
//     return "Hello World";
// }
// console.log(myrequest());

// 4. Async function returning a value, with .then() to handle the promise
// async function myrequest() {
//   return "Hello World";
// }
// console.log(myrequest())
// myrequest().then((data) => {
//     console.log(data)
// })

// 5. Async function with error handling
// async function myrequest(num) {
//     if (num < 0) {
//         throw new Error("Error in my Program!");
//     }
//     return num;
// }
// console.log(myrequest(10));

// myrequest(10)
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })

// 6. Fetching data with an API (successful request)
// async function myrequest() {
//     console.log("Data Getting...")
//     let URL = "https://dummyjson.com/products";
//     let responce = await fetch(URL);
//     console.log(responce);
//     let data = await responce.json()
//     console.log(data);
// }
// myrequest();

// 7. Fetching data with an API (request with delay)
// async function myrequest() {
//     console.log("Data Getting...");
//     let URL = "https://dummyjson.com/productsrge/?sleep=5000";  // Invalid URL, used for simulating delay
//     let responce = await fetch(URL);
//     console.log(responce);
//     let data = await responce.json();
//     console.log(data);
// }
// myrequest();

// 8. Basic Promise usage (resolve)
// let responce = new Promise((resolve, rejected) => {
//     resolve("Successfull");
// })
// console.log(responce);

// 9. Basic Promise usage (reject)
// let responce = new Promise((resolve, rejected) => {
//     rejected("Successfull");
// });
// console.log(responce);

// 10. Handling Promise with conditional logic (even/odd check)
let checkEven = new Promise((resolve, reject) => {
  let number = 5;
  if (number % 2 === 0) {
    resolve("The number is even!");
  } else {
    reject(new Error("The number is odd!"));
  }
});
checkEven
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));

// 11. Using Promise.all() to handle multiple promises
// Promise.all([
//   Promise.resolve("Task 1 completed"),
//   Promise.resolve("Task 2 completed"),
//   // Promise.reject("Task 3 failed"), // Uncomment to simulate rejection
// ])
//   .then((results) => console.log(results))
//   .catch((error) => console.error(error));

// 12. Using Promise.allSettled() to handle all promises (both resolved and rejected)
Promise.allSettled([
  Promise.resolve("Task 1 completed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed"),
]).then((results) => console.log(results));

// 13. Using Promise.race() to handle the first resolved/rejected promise
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Task 1 finished"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task 2 finished"), 500)),
]).then((result) => console.log(result));

// 14. Using Promise.any() to return the first resolved promise (ignores rejections)
Promise.any([
  Promise.reject("Task 1 failed"),
  Promise.reject("Task 2 completed"),
  Promise.resolve("Task 3 completed"),
])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 15. Using Promise.resolve() for immediate success
Promise.resolve("Immediate success").then((value) => console.log(value));

// 16. Using Promise.reject() for immediate failure
Promise.reject("Immediate failure").catch((error) => console.error(error));

// 17. Handling promise with finally (cleanup action)
Promise.resolve("Task completed")
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Cleanup completed"));

// 18. Chaining promise handlers to modify values
Promise.resolve(5)
  .then((value) => value * 2) // Multiplies by 2
  .then((value) => value + 3) // Adds 3
  .then((finalValue) => console.log(finalValue)); // Logs: 13

// Note: Additional resources for Promise handling
// https://www.geeksforgeeks.org/javascript-promise/
