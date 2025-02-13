// =======================
// Synchronous Functions
// =======================

// Synchronous functions execute line by line, in a specific order.
// Each statement waits for the previous one to complete before executing the next.

console.log("Step-1");
console.log("Step-2");
console.log("Step-3");
console.log("Step-4");

// Output:
// Step-1
// Step-2
// Step-3
// Step-4
// (Executes in the same order as written)

// =======================
// Asynchronous Functions
// =======================

// Asynchronous functions do not block the execution of the program.
// They allow other tasks to run while waiting for a response or a timer.

// Example using setTimeout():
console.log("Step-1");
setTimeout(() => {
    console.log("Step-2 (Delayed by 2 seconds)");
}, 2000);
console.log("Step-3");
console.log("Step-4");

// Output:
// Step-1
// Step-3
// Step-4
// (After 2 seconds) Step-2 (Delayed by 2 seconds)

// =======================
// Clearing setTimeout
// =======================

// `setTimeout` schedules a function to execute after a delay.
// `clearTimeout` can be used to cancel a scheduled function before it executes.

let timeoutId = setTimeout(() => {
    console.log("This will not execute because it's cleared.");
}, 2000);

// Clearing the timeout before it executes
clearTimeout(timeoutId);

// =======================
// Using setTimeout with Parameters
// =======================

// We can pass arguments to a function inside setTimeout.

function add(x, y) {
    console.log("Sum:", x + y);
}

// Calls `add(10, 20)` after 2 seconds
setTimeout(add, 2000, 10, 20);

// =======================
// setInterval: Repeating Execution
// =======================

// `setInterval` runs a function repeatedly at a given interval.

let intervalId = setInterval(() => {
    console.log("Hello World! (Runs every 1 second)");
}, 1000);

// Stopping the interval after 5 executions

let count = 0;
let stopset = setInterval(() => {
    count++;

    console.log("Hello World! (Repeating)");

    // Stop after 5 repetitions
    if (count === 5) {
        clearInterval(stopset);
        console.log("Interval stopped after 5 repetitions.");
    }
}, 1000);

// =======================
// Stopping setInterval after a specific time
// =======================

// This interval runs every 2 seconds
let repeatingId = setInterval(() => {
    console.log("Repeating message every 2 seconds.");
}, 2000);

// Stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(repeatingId);
    console.log("Interval stopped after 10 seconds.");
}, 10000);

// =======================
// setTimeout with 0ms delay (Event Loop Behavior)
// =======================

// Even with `0ms` delay, this runs after synchronous code due to the event loop.

setTimeout(() => {
    console.log("Executed later (setTimeout with 0 delay)");
}, 0);

console.log("Executed first");

// Output:
// Executed first
// Executed later (setTimeout with 0 delay)
