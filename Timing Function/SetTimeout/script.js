// Synchronus function :

// How synchronous functions work

// Synchronous functions run in a specific sequence of instructions.
// Each instruction waits for the previous instruction to finish before it can start.
// For example, in JavaScript, you can use the console.log() function to output messages in a sequence.

// console.log("Step-1")
// console.log("Step-2")
// console.log("Step-3")
// console.log("Step-4")

// An asynchronous function is a function that returns a result asynchronously, rather than synchronously. In JavaScript, asynchronous functions are defined using the keywords async and await. This pattern is also known as async/awai

// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.

// console.log("Step-1")
// setTimeout(()=>{
//     console.log("Step-2")
// },2000)
// console.log("Step-3")
// console.log("Step-4")

// let result = setTimeout(()=>{
//     console.log("Step-2")
// },2000)

// clearInterval(result);

// function add(x,y){
//     console.log(x+y);
// }

// setTimeout(add,2000,10,20);


// setInterval(()=>{
//     console.log("Hello World!");
// },1000)



// let count = 0;

// let stopset = setInterval(()=>{

//     count++;

//     if(count == 5){
//         clearInterval(stopset);
//     }

//     console.log("Hello World!");

// },1000)



// let intervalId = setInterval(() => {
//     console.log("Repeating message every 2 seconds.");
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 10000);

setTimeout(() => {
    console.log("Executed later");
}, 0);
console.log("Executed first");