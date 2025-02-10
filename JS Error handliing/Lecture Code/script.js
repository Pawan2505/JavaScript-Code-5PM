// ✅ 1. SYNTAX ERROR - Occurs when there is a mistake in the syntax of the code
// console.log("Hello"   // ❌ SyntaxError: missing ) after argument list
// The missing closing parenthesis will cause a SyntaxError and prevent execution.


// ✅ 2. REFERENCE ERROR - Occurs when accessing an undefined variable
try {
    console.log(num); // ❌ ReferenceError: num is not defined
} catch (error) {
    console.log(error.message); // Logs: "num is not defined"
}

// console.log(num); // ❌ ReferenceError: num is not defined


// ✅ 3. USING `FINALLY` - The `finally` block executes regardless of an error
try {
    console.log(num); // ❌ ReferenceError
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Cleanup.."); // ✅ Always runs
}


// ✅ 4. CUSTOM ERROR HANDLING WITH `THROW`
function clearRound(marks) {
    if (marks < 90) {
        // ❌ Custom Error - Throwing an error if marks are below 90
        throw new Error("Sorry, You are not eligible for the next round!");
    }
}

let marks = 60;

try {
    clearRound(marks);
} catch (error) {
    console.log(`Error: ${error.message}`); // Logs: Sorry, You are not eligible for the next round!
}


// ✅ 5. SUCCESSFUL EXECUTION WITHOUT ERROR
function clearRound(marks) {
    if (marks < 90) {
        throw new Error("Sorry, You are not eligible for the next round!");
    } else {
        console.log("Success"); // ✅ Executes when marks >= 90
    }
}

let marks2 = 90;

try {
    clearRound(marks2); // ✅ Prints "Success"
} catch (ex) {
    console.log(`Error: ${ex.message}`);
}


// ✅ 6. ARRAY BEHAVIOR & DYNAMIC GROWTH
let arr = new Array(5); // Creates an array of length 5

arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);

console.log(arr); // ✅ Prints array with elements added

arr.push(60); // ✅ Arrays in JavaScript are dynamic, can grow beyond initial size

console.log(arr); // ✅ Now contains 6 elements

// ❌ INVALID ARRAY LENGTH ERROR
try {
    let arr2 = new Array(-4); // ❌ RangeError
} catch (ex) {
    console.log(ex.message); // Logs: "Invalid array length"
}


// ✅ 7. ACCESSING UNDEFINED OBJECT PROPERTIES
let person = { name: "Pawan", age: 25 };

console.log(person); // ✅ Prints the object

console.log(person.salary); // ✅ Undefined (property does not exist)

// ❌ ACCESSING PROPERTY OF AN UNDEFINED OBJECT
let person2;

console.log(person2?.salary); // ✅ `?.` prevents error, logs undefined


// ✅ 8. HANDLING TYPEERROR WITH TRY-CATCH
try {
    let person3 = { name: "Pawan", age: 25 };
    console.log(person3.salary); // ✅ Undefined, but no error
} catch (ex) {
    console.log(ex.message); // Won't execute, because undefined property access is not an error
}


// ✅ 9. UNDEFINED VARIABLES
let a;
console.log(a); // ✅ Undefined, but no error


// ✅ 10. PREVENTING INFINITE LOOPS
try {
    let maxIterations = 10; // Safety limit
    for (let i = 1; i > 0; i++) {
        console.log(i);
        if (i >= maxIterations) {
            throw new Error("Loop stopped to prevent infinite execution"); // ❌ Custom Error
        }
    }
} catch (ex) {
    console.log("Error:", ex.message);
} finally {
    console.log("Cleanup.."); // ✅ Always runs
}


// ✅ 11. TRY-CATCH WITHOUT BREAKING CODE EXECUTION
console.log("Hello world");

try {
    console.log(num); // ❌ ReferenceError
} catch (ex) {
    console.log(ex.message);
}

console.log("Hello Class!"); // ✅ Continues execution


// ✅ 12. HANDLING TYPE ERROR WITH `instanceof`
try {
    let obj = null;
    console.log(obj.name); // ❌ TypeError: Cannot read properties of null
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type Error Occurred:", error.message); // ✅ Specific error handling
    } else {
        console.log("Unknown Error:", error.message);
    }
}

// Note: `instanceof TypeError` is optional but helps to handle specific error types


// ✅ 13. CALLING A NON-FUNCTION (TYPEERROR)
try {
    let num = 5;
    num(); // ❌ TypeError: num is not a function
} catch (error) {
    console.log("Type Error Occurred:", error.message);
}


// ✅ 14. USING `instanceof TypeError` (OPTIONAL)
if (error instanceof TypeError) {
    console.log("Type Error Occurred:", error.message);
}

// `instanceof TypeError` helps in handling specific errors but is not mandatory.
