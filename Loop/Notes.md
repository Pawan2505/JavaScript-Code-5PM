# Mastering JavaScript Loops

Loops are fundamental in programming, allowing the execution of a block of code multiple times based on a condition. JavaScript supports various types of loops: `for`, `while`, and `do...while`.

## For Loop

The `for` loop is commonly used when the number of iterations is known.

### Basic Structure:

```javascript
for (initialization; condition; increment/decrement) {
    // code to be executed
}
```

### Examples:

1. **Counting from 1 to 10:**

    ```javascript
    for (let num = 1; num <= 10; num++) {
        console.log(num);
    }
    ```

2. **Using a variable declared outside the loop:**

    ```javascript
    let num;
    for (num = 1; num <= 10; num++) {
        console.log(num);
    }
    ```

3. **Initialization outside the loop:**

    ```javascript
    let num = 1;
    for (; num <= 10; num++) {
        console.log(num);
    }
    ```

4. **Omitting the increment statement in the loop header:**

    ```javascript
    let num = 1;
    for (; num <= 10;) {
        console.log(num);
        num++;
    }
    ```

5. **Counting down from 10 to 1:**

    ```javascript
    for (let num = 10; num >= 1; num--) {
        console.log(num);
    }
    ```

6. **Using pre-decrement:**

    ```javascript
    for (let num = 10; num >= 1; --num) {
        console.log(num);
    }
    ```

### Finding Numbers Divisible by 3 and 5:

1. **Numbers between 1 and 30 divisible by both 3 and 5:**

    ```javascript
    for (let num = 1; num <= 30; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log(num);
        }
    }
    ```

2. **Numbers between 1 and 30 divisible by either 3 or 5:**

    ```javascript
    for (let num = 1; num <= 30; num++) {
        if (num % 3 == 0 || num % 5 == 0) {
            console.log(num);
        }
    }
    ```

### Infinite Loop:

```javascript
for (let num = 1; num > 0; num++) {
    console.log(num);
}
```

## While Loop

The `while` loop is used when the number of iterations is not known beforehand. It continues to execute as long as the specified condition is true.

### Basic Structure:

```javascript
while (condition) {
    // code to be executed
}
```

### Example:

**Counting from 1 to 10:**

```javascript
let num = 1; // initialization
while (num <= 10) {  // condition
    console.log(num);
    num++;  // increment
}
```

**Program to Count Number of Digits in a Number:**

```javascript
let num = 12345;
let count = 0;

while (num > 0) {
    num = Math.floor(num / 10);
    count++;
}

console.log(`count: ${count}`);
```

## Do...While Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the code block is executed at least once.

### Basic Structure:

```javascript
do {
    // code to be executed
} while (condition);
```

### Examples:

1. **Condition is not met initially:**

    ```javascript
    let num = 11;

    do {
        console.log(num);
    } while (num <= 10);
    ```

2. **Counting from 9 to 10:**

    ```javascript
    let num = 9;

    do {
        console.log(num);
        num++;
    } while (num <= 10);
    ```

3. **Counting from 1 to 10:**

    ```javascript
    let num = 1;

    do {
        console.log(num);
        num++;
    } while (num <= 10);
    ```

By understanding these different types of loops, you can effectively control the flow of your program based on various conditions.

For more detailed explanations, refer to the [Medium article](https://medium.com/@pawan2505/mastering-javascript-loops-1687e359c8e5).
