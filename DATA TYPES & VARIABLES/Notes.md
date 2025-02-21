
# JavaScript Data Types and Variables

## Constants

Constants in JavaScript are declared using the `const` keyword and must be initialized at the time of declaration. They cannot be reassigned.

```javascript
const firstname = "Pawan Maurya";

// firstname = "Pranav"; // Error: Assignment to constant variable

console.log(firstname); // Output: Pawan Maurya

// const num; // Error: Missing initializer in const declaration
const num1 = 10;
console.log(num1); // Output: 10

// const num1 = 20; // Error: Identifier 'num1' has already been declared

{
    const num1 = 20;
    console.log(num1); // Output: 20
}
```

## Data Types

JavaScript has both primitive and reference data types. The `typeof` operator is used to determine the type of a variable.

### Primitive Data Types

1. **Number**
    ```javascript
    let x = 10;
    console.log(x); // Output: 10
    console.log(typeof x); // Output: "number"
    ```

2. **String**
    ```javascript
    let ch = 'a';
    console.log(ch); // Output: 'a'
    console.log(typeof ch); // Output: "string"
    ```

3. **BigInt**
    ```javascript
    let y = 1234567890987654n;
    console.log(typeof y); // Output: "bigint"
    ```

4. **Boolean**
    ```javascript
    const isAvailable = true;
    console.log(isAvailable); // Output: true
    console.log(typeof isAvailable); // Output: "boolean"
    ```

5. **Undefined**
    ```javascript
    let num2;
    console.log(typeof num2); // Output: "undefined"
    ```

6. **Null**
    ```javascript
    let num3 = null;
    console.log(typeof num3); // Output: "object" (this is a known bug in JavaScript)
    ```

7. **Symbol**
    ```javascript
    let num4 = Symbol("Hello");
    console.log(num4);
    console.log(typeof num4); // Output: "symbol"
    ```

### Reference Data Types

1. **Object**
    ```javascript
    const obj = {name: "Pawan Maurya", age: 24, salary: 11};
    console.log(obj); // Output: Object { name: "Pawan Maurya", age: 24, salary: 11 }
    console.log(typeof obj); // Output: "object"
    ```

2. **Array**
    ```javascript
    let arr = [12, 34, 567, "Pawan", 'aw'];
    console.log(arr); // Output: Array [ 12, 34, 567, "Pawan", "aw" ]
    console.log(typeof arr); // Output: "object"
    ```

## Type Coercion

JavaScript performs type coercion when using the `+` operator with different data types.

```javascript
let num5 = 12 + 15;
console.log(num5); // Output: 27

let num6 = 12 + "13";
console.log(num6); // Output: "1213"
console.log(typeof num6); // Output: "string"
```

## Comparison

JavaScript uses both loose (`==`) and strict (`===`) equality comparisons.

```javascript
let p = 10;
let q = "10";

if (p == q) {
    console.log("Successful"); // Output: Successful (Type coercion occurs)
} else {
    console.log("Unsuccessful");
}

if (p === q) {
    console.log("Successful");
} else {
    console.log("Unsuccessful"); // Output: Unsuccessful (No type coercion)
}
```

## Examples of `typeof` Operator

```javascript
console.log(typeof 42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof null); // Output: "object" 
console.log(typeof undefined); // Output: "undefined"
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object"
```

## Variable Declarations

JavaScript allows variable declarations using `var`, `let`, and `const`.

- **Using `var` (ES5)**
    ```javascript
    var myVar = "Hello";
    console.log(myVar); // Output: Hello
    ```

- **Using `let` (ES6)**
    ```javascript
    let myLet = 10;
    console.log(myLet); // Output: 10
    ```

- **Using `const` (ES6)**
    ```javascript
    const myConst = true;
    console.log(myConst); // Output: true
    ```

## Data Type Examples

- **Number**
    ```javascript
    let age = 25;
    console.log(age); // Output: 25
    ```

- **String**
    ```javascript
    const name = "Alice";
    console.log(name); // Output: Alice
    ```

- **Boolean**
    ```javascript
    var isStudent = true;
    console.log(isStudent); // Output: true
    ```

- **String and Number Addition**
    ```javascript
    let result = "5" + 1;
    console.log(result); // Output: "51" (String concatenation)
    ```

- **Comparison**
    ```javascript
    let isEqual = "5" == 5;
    console.log(isEqual); // Output: true (Type coercion occurs)
    ```

## Read more on Medium

For a detailed explanation, read the full article on Medium: [Understanding JavaScript Variables and Data Types](https://medium.com/@pawan2505/understanding-javascript-variables-and-data-types-d0e4ad171bab)

