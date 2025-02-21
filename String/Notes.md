### JavaScript String Methods and Concepts

#### 1. Declare a String Variable
```javascript
let name = "Pranav";
console.log(name); // Print the value of 'name'
console.log(typeof name); // Print the type of 'name'
```
- **Concept**: Declaration of a string variable and checking its type.

#### 2. Strings are Immutable
```javascript
let programming = "Javascript Language";
console.log(programming); // Print the value of 'programming'
```
- **Concept**: Strings cannot be changed once created. Any modification results in a new string.

#### 3. Length of the String
```javascript
console.log(programming.length); // Output: 18
```
- **Concept**: `.length` property returns the number of characters in the string.

#### 4. replace() Method
```javascript
let str = programming.replace("Javascript", "C++");
console.log(str); // Print the replaced string
console.log(programming); // Original string remains unchanged
```
- **Concept**: `.replace()` method creates a new string with some or all matches of a pattern replaced by a replacement.

#### 5. substring() Method
```javascript
let substr = programming.substring(0, 9); // Extract characters from index 0 to 8
console.log(substr); // Output: 'Javascrip'
```
- **Concept**: `.substring()` method returns a part of the string between the start and end indexes.

#### 6. toUpperCase() Method
```javascript
let upperstr = programming.toUpperCase();
console.log(upperstr); // Output: 'JAVASCRIPT LANGUAGE'
```
- **Concept**: `.toUpperCase()` method converts the entire string to uppercase.

#### 7. toLowerCase() Method
```javascript
let lowerstr = programming.toLowerCase();
console.log(lowerstr); // Output: 'javascript language'
```
- **Concept**: `.toLowerCase()` method converts the entire string to lowercase.

#### 8. at() Method
```javascript
console.log(programming.at(3)); // Output: 'a'
console.log(programming.at(-4)); // Output: 'a'
```
- **Concept**: `.at()` method returns the character at a specified index, supporting negative indexing.

#### 9. charAt() Method
```javascript
console.log(programming.charAt(3)); // Output: 'a'
console.log(programming.charAt(programming.length - 4)); // Output: 'u'
console.log(programming.charAt(-4)); // Not valid, returns an empty string
```
- **Concept**: `.charAt()` method returns the character at a specified index but does not support negative indexing.

#### 10. trim() Method
```javascript
let programmingWithSpaces = "                          Javascript Language ";
let trimstr = programmingWithSpaces.trim();
console.log(trimstr); // Output: 'Javascript Language'
```
- **Concept**: `.trim()` method removes whitespace from both ends of a string.

#### 11. join() Method
```javascript
let arr = [12, 34, 5, 667, 788, 9];
console.log(arr); // Print the array
console.log(typeof arr); // Output: 'object'
console.log(arr.join(", ")); // Output: '12, 34, 5, 667, 788, 9'
console.log(typeof arr.join(" ")); // Output: 'string'
```
- **Concept**: `.join()` method is used with arrays to join all elements into a string.

#### 12. substr() Method (Deprecated)
```javascript
let nameStr = "Javascript lang";
console.log(nameStr.substr(0, 10)); // Output: 'Javascript'
```
- **Concept**: `.substr()` method returns a part of the string. It is deprecated and `.substring()` is preferred.

#### 13. Using the + Operator
```javascript
let str1 = "Hello, ";
let str2 = "world!";
let result = str1 + str2;
console.log(result); // Output: Hello, world!
```
- **Concept**: The `+` operator concatenates two strings.

#### 14. Using the concat() Method
```javascript
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // Output: Hello, world!
```
- **Concept**: `.concat()` method concatenates two or more strings.

#### 15. Using Template Literals
```javascript
let str1 = "Hello, ";
let str2 = "world!";
let result = `${str1}${str2}`;
console.log(result); // Output: Hello, world!
```
- **Concept**: Template literals allow embedding expressions and variables inside a string.
