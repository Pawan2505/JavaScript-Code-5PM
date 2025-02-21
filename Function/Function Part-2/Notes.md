### Default Parameter

- **Definition**: Default parameters allow function parameters to have a default value if no value or `undefined` is passed.
- **Example**:
  ```javascript
  function addition(num1, num2 = 60) {
      console.log(num1 + num2);
  }

  addition(10, 20); // Output: 30
  addition(10); // Output: 70 (num2 defaults to 60)
  ```
- **Explanation**: In the `addition` function, `num2` has a default value of 60. If the second argument is not provided when calling the function, `num2` will automatically be set to 60.

### Arrow Function

- **Definition**: Arrow functions provide a more concise syntax for writing function expressions.
- **Syntax**:
  ```javascript
  () => { }
  ```
- **Example**:
  ```javascript
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
  ```
- **Explanation**: Arrow functions do not have their own `this` context and are generally more suitable for non-method functions. They are shorter and do not require the `function` keyword.

### Immediately Invoked Function Expressions (IIFE)

- **Definition**: IIFEs are functions that are executed immediately after they are defined.
- **Syntax**:
  ```javascript
  (function() {
      // code here
  })();
  ```
- **Example**:
  ```javascript
  (function() {
      console.log("Hello World!");
  })(); // Output: Hello World!
  ```
- **Explanation**: IIFEs are useful for creating a new scope to avoid polluting the global scope. The function is defined and immediately invoked.

### Anonymous Function

- **Definition**: Anonymous functions are functions without a name. They are often used as function expressions.
- **Example**:
  ```javascript
  let value = function() {
      console.log("Hello");
  }

  value(); // Output: Hello
  ```
- **Explanation**: The function assigned to the `value` variable does not have a name. Anonymous functions are commonly used in callback functions and immediately invoked function expressions.

### Closure Function

- **Definition**: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
- **Example**:
  ```javascript
  function makeMultiplier(factor) {
      // The inner function "multiplier" has access to the "factor" variable
      return function(value) {
          return value * factor;
      };
  }

  const multiplierBy5 = makeMultiplier(5);

  console.log(multiplierBy5(3)); // Output: 15
  ```
- **Explanation**: The `multiplierBy5` function retains access to the `factor` variable from the `makeMultiplier` function, even after `makeMultiplier` has finished executing. This is the essence of a closure.

