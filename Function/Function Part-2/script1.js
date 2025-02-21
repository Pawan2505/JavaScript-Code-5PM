
// Default Parameter
// A default parameter allows a function to have a default value if no value is provided.

function addition(num1, num2 = 60) {
    console.log(num1 + num2);
}

addition(10, 20); // Output: 30
addition(10); // Output: 70 (num2 defaults to 60)

// Arrow Function
// Arrow functions provide a shorter syntax than traditional function expressions.

let greet = () => {
    console.log("Hello World!");
}

greet(); // Output: Hello World!

let a = 10;
console.log(a); // Output: 10

const sum = (a, b) => {
    return a + b;
}

console.log(`Sum of both numbers: ${sum(10, 20)}`); // Output: Sum of both numbers: 30

// Immediately Invoked Function Expressions (IIFE)
// IIFEs are functions that are executed immediately after they are defined.

(function() {
    console.log("Hello World!");
})(); // Output: Hello World!

// Function without name (Anonymous Function)

let value = function() {
    console.log("Hello");
}

value(); // Output: Hello

// Closure Function
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

function makeMultiplier(factor) {
    // The inner function "multiplier" has access to the "factor" variable
    return function(value) {
        return value * factor;
    };
}

const multiplierBy5 = makeMultiplier(5);

console.log(multiplierBy5(3)); // Output: 15
