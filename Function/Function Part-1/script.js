
// Normal Function (Function with Name)

// Function definition with parameters (x, y)
function addition(x, y){  
    console.log(x + y);
}

// Function call with arguments
addition(10, 20);   // Output: 30

// Return type function
function subtract(num1, num2){
    let sub = num1 - num2;
    return sub;
}

let result = subtract(30, 10);
console.log(result);  // Output: 20

// Recursion Function

function factorial(num){
    // Base condition
    if(num === 1){
        return 1;
    }
    return num * factorial(num - 1);
}

result = factorial(5);
console.log(result);  // Output: 120

function addition(num){
    // Base condition
    if(num === 10){
        return 10;
    }
    return num + addition(num + 1);  // Recursive call until base condition is met
}

result = addition(1);
console.log(result);  // Output: 55

// Closure Function: remembers the previous value and retains state between function calls

let count = 0;

function outerfunction(){
    return count++;
}

console.log(outerfunction());  // Output: 0

count = 0;

function outerfunction(){
    function innerfunction(){
        console.log(count);
    }
    innerfunction();
    return 0;
}

console.log(outerfunction());  // Output: 0
console.log(outerfunction());  // Output: 0
console.log(outerfunction());  // Output: 0
console.log(outerfunction());  // Output: 0

count = 0;

function outerfunction(){
    function innerfunction(){
        return count++;
    }
    console.log(innerfunction());
}

outerfunction();  
outerfunction();  
outerfunction();  
outerfunction();  

function outerfunction(){
    let count = 0;
    return function innerfunction(){
        return count++;
    }
}

result = outerfunction();  
console.log(result());  // Output: 0
console.log(result());  // Output: 1
console.log(result());  // Output: 2
console.log(result());  // Output: 3

function outerfunction(){
    console.log("Hello world");
}

outerfunction();  // Output: Hello world

let num = 10;

function fun(){
    console.log(num);
}

fun();  // Output: 10

num = 10;

function fun(){
    return 10;
}

console.log(fun());  // Output: 10

function fun1(){
    console.log("fun1 function called..");

    function fun2(){
        console.log("fun2 function called..");
    }

    fun2();
}

fun1();  // Output: fun1 function called..
// Output: fun2 function called..

function fun1(){
    console.log("fun1 function called..");

    function fun2(){
        console.log("fun2 function called..");
    }

    fun2();  // correct
}

fun1();  // Output: fun1 function called..
// Output: fun2 function called..

// fun2();   // incorrect way, will cause an error

// Closure function: remembers previous values

// Step 1: Define an Outer Function
function outer(){
    // Step 2 : Create an Inner Function
    // Step 3 : Return the Inner Function
    let count = 0;
    return function inner(){
        return count++;
    }
}

// Step 4: Call the Outer Function
result = outer();

// Step 5 : Call the Inner Function
// You can now call the inner function from the variable where the outer function's return value is stored.
console.log(result());  // Output: 0
console.log(result());  // Output: 1
console.log(result());  // Output: 2
