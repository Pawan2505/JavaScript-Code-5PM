
# JavaScript Operators and Data Manipulation

## Introduction

This document explains various JavaScript concepts including variable declarations, comparison operators, logical operators, document manipulation, arithmetic operations, unary and assignment operators, and swapping variables.

## Variable Declarations and Comparisons

```javascript
let pranav_age = parseInt(prompt("Enter Age : "));
let saytam_age = prompt("Enter Age : ");

console.log("pranav_age : ", pranav_age);
console.log("saytam_age : ", saytam_age);

console.log(`pranav_age > saytam_age : ${pranav_age > saytam_age}`);
console.log("pranav_age < saytam_age" + (pranav_age < saytam_age));

/*console.log("pranav_age <= saytam_age" + (pranav_age <= saytam_age));
console.log("pranav_age >= saytam_age" + (pranav_age >= saytam_age));
console.log("pranav_age === saytam_age" + (pranav_age === saytam_age));
console.log("pranav_age == saytam_age" + (pranav_age == saytam_age));
console.log("pranav_age != saytam_age" + (pranav_age != saytam_age));
console.log("pranav_age !== saytam_age" + (pranav_age !== saytam_age));*/
```

- `parseInt()` is used to parse a string and return an integer.
- Comparison operators (`>`, `<`, `<=`, `>=`, `===`, `==`, `!=`, `!==`) are used to compare values.

## Logical Operators

```javascript
let num1 = parseInt(prompt("Enter Num1 : "));
document.write(`Num1 : ${num1} <br/>`);
let num2 = parseInt(prompt("Enter Num2 : "));
document.write(`Num2 : ${num2} <br/>`);
let num3 = parseInt(prompt("Enter Num3: "));
document.write(`Num3 : ${num3} <br/>`);

let result1 = (num1 < num2) && (num1 > num3);
let result2 = (num1 < num2) || (num1 > num3);
let result3 = !((num1 < num2) || (num1 > num3));

document.getElementsByClassName('heading1')[0].innerHTML = `(num1 < num2) && (num1 > num3) :  ${result1} <br/>`;
document.getElementsByClassName('heading2')[0].innerHTML = `(num1 < num2) || (num1 > num3) :  ${result2} <br/>`;
document.getElementsByClassName('heading3')[0].innerHTML = `!((num1 < num2) || (num1 > num3)) :  ${result3} <br/>`;
```

- Logical operators (`&&`, `||`, `!`) are used to combine conditional statements.

## Document Manipulation

```javascript
document.writeln("Hello World ");
document.writeln("Hey, How are you?");
```

- `document.write()` and `document.writeln()` are used to write content to the document. Note that `document.writeln()` adds a newline character after each line.

## Arithmetic Operators

```javascript
let num1 = prompt("Enter Number1 :");
let num2 = prompt("Enter Number2 :");

let addition = parseInt(num1) + parseInt(num2);
let subtract = parseInt(num1) - parseInt(num2);
let multiply = parseInt(num1) * parseInt(num2);
let divide = parseInt(num1) / parseInt(num2);
let remainder = parseInt(num1) % parseInt(num2);

document.write(`<h1>Addition : ${addition} </h1>`);
document.write("\nSubtract : " + subtract);
document.write("\nMultiply : " + multiply);
document.write("\nDivide : " + divide);
document.write("\nRemainder : " + remainder);
```

- Arithmetic operators (`+`, `-`, `*`, `/`, `%`) are used to perform arithmetic on numbers.

## Unary Operators

```javascript
let x = 10;
console.log(x++); // 10
console.log(x); // 11

let y = 10;
y++;  
console.log(y); // 11

let d = 20;
console.log(++d); // 21
console.log(d);  // 21

console.log(h--); // 10
console.log(h);   // 9
console.log(--h); // 8
```

- Unary operators (`++`, `--`) are used to increment or decrement a variable by one.

## Assignment Operators

```javascript
let a = 10;
a += 20;
console.log(a); // 30

a -= 20;
console.log(a); // -10

a *= 20;
console.log(a); // 200

a /= 20;
console.log(a); // 10

a %= 20;
console.log(a); // 10
```

- Assignment operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`) are used to assign values to variables.

## Swapping Variables

```javascript
let num1 = 10;
let num2 = 20;

let num3 = num1;
num1 = num2;
num2 = num3;

console.log(`Num1 : ${num1}`);
console.log(`Num2 : ${num2}`);
```

- Swapping values of two variables using a temporary variable.

For more detailed explanations, refer to the [Medium article](https://medium.com/@pawan2505/understanding-javascript-operators-0b5e39859ed3).
