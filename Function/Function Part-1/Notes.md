# JavaScript Function Lecture Notes

## Normal Function (Function with Name)

### Function Definition
A function in JavaScript can be defined with a name, and it can take parameters and perform operations using those parameters.

```javascript
function addition(x, y) {
    console.log(x + y);
}
```
- **Function Definition**: The function `addition` takes two parameters `x` and `y`.
- **Function Call**: The function can be called with arguments like `addition(10, 20)`.

### Example
```javascript
addition(10, 20); // Output: 30
```

## Return Type Function

### Function Definition
A function can return a value using the `return` statement.

```javascript
function subtract(num1, num2) {
    let sub = num1 - num2;
    return sub;
}
```
- **Return Value**: The function `subtract` returns the result of `num1 - num2`.

### Example
```javascript
let result = subtract(30, 10);
console.log(result); // Output: 20
```

## Recursion Function

### Function Definition
A recursive function is a function that calls itself until it reaches a base condition.

```javascript
function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
```
- **Base Condition**: The recursion stops when `num === 1`.
- **Recursive Call**: The function calls itself with `num - 1`.

### Example
```javascript
let result = factorial(5);
console.log(result); // Output: 120
```

## Closure Function

### Function Definition
A closure is a function that retains access to its outer scope variables even after the outer function has finished executing.

```javascript
function outer() {
    let count = 0;
    return function inner() {
        return count++;
    }
}
```
- **Outer Function**: The `outer` function initializes a variable `count`.
- **Inner Function**: The `inner` function increments and returns the `count`.

### Example
```javascript
let result = outer();
console.log(result()); // Output: 0
console.log(result()); // Output: 1
console.log(result()); // Output: 2
```

## Nested Functions

### Function Definition
Functions can be nested inside other functions, and the inner functions can access the variables of the outer functions.

```javascript
function fun1() {
    console.log("fun1 function called..");

    function fun2() {
        console.log("fun2 function called..");
    }

    fun2();
}
```
- **Outer Function**: The `fun1` function contains another function `fun2`.
- **Inner Function Call**: The `fun2` function is called inside `fun1`.

### Example
```javascript
fun1(); 
// Output:
// fun1 function called..
// fun2 function called..
```

## Variable Scope

### Function Definition
Variables declared inside a function are local to that function and cannot be accessed outside.

```javascript
let num = 10;

function fun() {
    console.log(num);
}
```
- **Global Variable**: The variable `num` is defined globally.
- **Accessing Global Variable**: The function `fun` can access the global variable `num`.

### Example
```javascript
fun(); // Output: 10
```

### Return Statement
A function can use the `return` statement to return a value.

```javascript
function fun() {
    return 10;
}
```
- **Return Value**: The function `fun` returns the value `10`.

### Example
```javascript
console.log(fun()); // Output: 10
```

## Function Calls

### Function Definition
Functions can call other functions within their body.

```javascript
function fun1() {
    console.log("fun1 function called..");

    function fun2() {
        console.log("fun2 function called..");
    }

    fun2();
}
```
- **Function Call**: The `fun2` function is called inside `fun1`.

### Example
```javascript
fun1(); 
// Output: 
// fun1 function called..
// fun2 function called..
```


For further reading, you can check out this [Medium article](https://medium.com/@pawan2505/javascript-functions-from-basics-to-advanced-concepts-8a52e25df7b0).
