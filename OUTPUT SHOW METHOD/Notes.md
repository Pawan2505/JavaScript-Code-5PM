
# [JavaScript Output Methods Explained](https://medium.com/@pawan2505/javascript-output-methods-explained-7ba67a0bba62)

## JavaScript Basics

---

### Logging to Console

```javascript
console.log(25 + 9);
console.log("Hello World");
```
The console.log() method is used to print messages or values to the browser's console. It can be very useful for debugging purposes.

### Document Manipulation and Display

#### Writing to Document

```javascript
document.write("Hey, How are you?");
```
The document.write() method writes directly to the HTML document. This method is rarely used in modern JavaScript as it can overwrite the entire document if used after the page has loaded.

#### Alert Message

```javascript
alert("Please pay Attention!");
```
The alert() method displays an alert box with a specified message and an OK button. It is often used to ensure the user acknowledges the message before proceeding.

### DOM Manipulation

#### Manipulating Elements by ID

```javascript
document.getElementById('heading-2').innerHTML = "Hello Bhailog!";
document.getElementById("heading-2").innerText = `<i>Hello Bhai Log</i>`;
document.getElementById("heading-2").innerHTML = `<i>Hello Bhai Log</i>`;
```
The document.getElementById() method returns the element with the specified ID.
.innerHTML sets or returns the HTML content of the element.
.innerText sets or returns the text content of the element.
Using backticks (`\`) within .innerText will display the tags as plain text, whereas using them within .innerHTML interprets them as HTML tags, creating italicized text.

#### Manipulating Elements by Class Name

```javascript
document.getElementsByClassName('dom-class')[0].innerHTML = "Hello Bhailog!";
document.getElementsByClassName('dom-class')[1].innerHTML = "<i>All of you looking handsome and beautiful!</i>";
```
The document.getElementsByClassName() method returns a collection of elements with the specified class name.
You can access individual elements in the collection using an index, e.g., [0] for the first element, [1] for the second, etc.
This example demonstrates how to modify the content of elements with a certain class name.

### Additional Concepts

#### Variables and Identifiers

```javascript
var fistname = "Pawan Maurya";
console.log(fistname);

fistname = "pranav";
console.log(fistname);

let first_name = "Pawan";
console.log(first_name);

let $num1 = 10;
console.log($num1);

let num = 12;
let Num = 20;
console.log(num);
console.log(Num);
```
Variables in JavaScript can be declared using `var`, `let`, or `const`. Identifiers should start with a letter, underscore (_), or dollar sign ($). They cannot start with a number or be a reserved keyword.

#### Block Scope

```javascript
let y = 10;
console.log(y);  //10

{
    let y = 20;
    console.log(y);  //20
}

console.log(y); //10

{
    let z = 30;
    console.log(z);  //30
}

// console.log(z); // undefined
```
Variables declared with `let` or `const` have block scope, meaning they are only accessible within the block they are defined in.

#### Global and Local Variables

```javascript
let a = 50; // global variable

{
    let b = 30; // local variable
    console.log(a); // 50
    console.log(b); // 30
}

console.log(a); //50
// console.log(b); // undefined
```
Global variables can be accessed anywhere in the code, while local variables are only accessible within the block or function they are defined in.

#### Good Practices

```javascript
value = 40; // it is not good practice -> good practice is to use a datatype keyword
console.log(value);
```
It is a good practice to always declare your variables using `var`, `let`, or `const` to avoid creating global variables unintentionally.
