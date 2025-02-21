# Mastering JavaScript Conditional Statements

Conditional statements are used to perform different actions based on different conditions. JavaScript supports `if`, `else`, and `else if` conditional statements.

## Topic: if-else

The `if-else` statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

### Example:

```javascript
let age = 10;

if (age < 18) {
  console.log("You are not eligible!");
} else {
  console.log("You are eligible!");
}
```

### Explanation:
- `let age = 10;` declares a variable `age` and assigns it a value of 10.
- The `if` statement checks if the `age` is less than 18.
- If the condition is true, it prints "You are not eligible!".
- If the condition is false, it prints "You are eligible!".

## Topic: else-if

The `else if` statement can be used to specify a new condition to test if the first condition is false.

### Problem: Calculate Grade

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Sorry");
}
```

### Explanation:
- `let marks = 85;` declares a variable `marks` and assigns it a value of 85.
- The first `if` statement checks if `marks` is greater than or equal to 90. If true, it prints "Grade A".
- The `else if` statements check if `marks` is greater than or equal to 80 or 70, and print the corresponding grade.
- If none of the conditions are true, the `else` statement prints "Sorry".

## Topic: Password Validation

```javascript
let oldpassword = 12345;

let password = parseInt(prompt("Enter Password: "));

if (oldpassword === password) {
    console.log("Successful!");
} else {
    console.log("Error");
}
```

### Explanation:
- `let oldpassword = 12345;` declares a variable `oldpassword` and assigns it a value of 12345.
- `let password = parseInt(prompt("Enter Password: "));` prompts the user to enter a password and converts it to an integer.
- The `if` statement checks if `oldpassword` is equal to `password`. If true, it prints "Successful!".
- If the condition is false, it prints "Error".

## Nested if-else

You can nest `if-else` statements within each other to create more complex conditions.

### Example:

```javascript
let marks = 82;

if (marks >= 80) {
    if (marks >= 90) {
        console.log("Grade A+");
    } else {
        console.log("Grade A");
    }
} else {
    console.log("Please enter valid marks");
}
```

### Explanation:
- The outer `if` statement checks if `marks` is greater than or equal to 80.
- If true, the nested `if` statement checks if `marks` is greater than or equal to 90.
- Depending on the conditions, it prints the appropriate grade.

## Multiple if Conditions

When using multiple `if` conditions, each condition is evaluated independently.

### Example:

```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
}
if (marks >= 80) {
    console.log("Grade B");
}
if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Sorry");
}
```

### Explanation:
- Each `if` condition is checked independently.
- If `marks` is greater than or equal to 80, it prints "Grade B" even if it has already printed "Grade A".

## Logical AND (&&) and OR (||) Operators

The `&&` operator (logical AND) combines two conditions and returns true if both conditions are true. The `||` operator (logical OR) returns true if one of the conditions is true.

### Example:

```javascript
let a = 100;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log("Greater A than both!");
} else if (b > c && b > a) {
    console.log("Greater B than both!");
} else {
    console.log("Greater C than both!");
}
```

### Explanation:
- The `if` statement checks if `a` is greater than both `b` and `c` using the `&&` operator.
- If true, it prints "Greater A than both!".
- The `else if` statement checks if `b` is greater than both `c` and `a`.
- If none of the conditions are true, the `else` statement prints "Greater C than both!".

By understanding these concepts, you can effectively use conditional statements in JavaScript to control the flow of your program based on different conditions.

For more detailed explanations, refer to the [Medium article](https://medium.com/@pawan2505/mastering-javascript-conditional-statements-abd73fb65088).
