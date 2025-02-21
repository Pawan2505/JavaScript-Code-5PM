# Switch Case and Function in JavaScript

## Switch Case

The `switch` statement evaluates an expression and matches the expression's value against a series of `case` clauses. The `switch` statement is often used as an alternative to `if...else if...else` statements when comparing a single expression to multiple values.

### Example:

```javascript
let num1 = 10;
let num2 = 5;
let op = "*";

switch(op) {
    case "+":
        console.log(`Addition : ${num1 + num2}`);
        break;
    case "-":
        console.log(`Subtract : ${num1 - num2}`);
        break;
    case "*":
        console.log(`Multiplication : ${num1 * num2}`);
        break;
    case "/":
        console.log(`Divide : ${num1 / num2}`);
        break;
    case "%":
        console.log(`Remainder : ${num1 % num2}`);
        break;
    default:
        console.log("Invalid Operator!");
}
```

### Explanation:
- `let num1 = 10;` and `let num2 = 5;` define two numbers to be operated on.
- `let op = "*";` sets the operator for the `switch` statement.
- The `switch` statement evaluates the value of `op` and executes the corresponding `case` block.
- Each `case` block ends with a `break` statement to prevent fall-through.
- The `default` case executes if no matching `case` is found.

## Function for Addition

Functions in JavaScript are blocks of code designed to perform a particular task. They are executed when something invokes (calls) them.

### Example:

```javascript
function addition() {
    let num1 = document.getElementById('input-num1').value;
    let num2 = document.getElementById('input-num2').value;

    let result = parseInt(num1) + parseInt(num2);
    // let result = parseInt.num1 + parseInt.num2;  // not ok

    document.getElementById('answer').innerText = `Addition : ${result}`;
}
```

### Explanation:
- `function addition()` defines a function named `addition`.
- `let num1 = document.getElementById('input-num1').value;` retrieves the value of the first input field.
- `let num2 = document.getElementById('input-num2').value;` retrieves the value of the second input field.
- `let result = parseInt(num1) + parseInt(num2);` converts the input values to integers and adds them.
- `document.getElementById('answer').innerText = `Addition : ${result};` displays the result in the element with the ID 'answer'.

### Additional Concepts:

1. **parseInt() Function**:
   - The `parseInt()` function parses a string and returns an integer. It is used to convert string input values to integers.
   - Example: `parseInt("10")` returns `10`.

2. **document.getElementById()**:
   - The `document.getElementById()` method returns the element that has the ID attribute with the specified value.
   - Example: `document.getElementById('input-num1').value` retrieves the value of the input field with the ID 'input-num1'.

3. **Template Literals**:
   - Template literals are enclosed by backticks (\`) and allow embedded expressions.
   - Example: `` `Addition : ${result}` `` includes the value of `result` in the string.

4. **Break Statement**:
   - The `break` statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

By understanding these concepts, you will have a better grasp of how to use the `switch` statement and functions to handle various operations and user inputs in JavaScript.
