### JavaScript Array Operations -Lecture Notes

#### 1. Creating an Array
```javascript
let arr = []; // empty array
console.log(typeof arr); // Output: object
```
- **Explanation:** An array is a special type of object in JavaScript. The `typeof` operator returns "object" for arrays.

#### 2. Initializing an Array with Multiple Data Types
```javascript
let brr = [12, "Pawan", 34.56, true];
console.log(brr); // Output: [12, "Pawan", 34.56, true]
```
- **Explanation:** Arrays can hold elements of different data types, including numbers, strings, and booleans.

#### 3. Adding Elements to an Array
```javascript
brr.push(123);
console.log(brr); // Output: [12, "Pawan", 34.56, true, 123]
```
- **Explanation:** The `push` method adds one or more elements to the end of an array.

#### 4. Working with Arrays
```javascript
let arr = [];
arr.push(10);
console.log(arr); // Output: [10]

arr.push(20);
console.log(arr); // Output: [10, 20]

arr.push(30, 40, 50);
console.log(arr); // Output: [10, 20, 30, 40, 50]

console.log(arr.pop()); // Output: 50
console.log(arr); // Output: [10, 20, 30, 40]
```
- **Explanation:** The `push` method adds elements to the array, while the `pop` method removes the last element from the array.

#### 5. Removing and Adding Elements at the Start
```javascript
let brr = [10, 20, 30];
console.log(brr); // Output: [10, 20, 30]

console.log(brr.shift()); // Output: 10
console.log(brr); // Output: [20, 30]

brr.unshift(100, 200, 300);
console.log(brr); // Output: [100, 200, 300, 20, 30]
```
- **Explanation:** The `shift` method removes the first element, and the `unshift` method adds elements to the start of the array.

#### 6. Modifying Arrays with Splice
```javascript
brr.splice(2, 2, 111, 222); // Removes 2 elements from index 2, adds 111 and 222
console.log(brr); // Output: [100, 200, 111, 222, 20, 30]

console.log(brr.slice(2, 4)); // Output: [111, 222]
```
- **Explanation:** The `splice` method changes the array by removing, replacing, or adding elements. The `slice` method returns a shallow copy of a portion of an array.

#### 7. Finding Elements by Index
```javascript
console.log(brr.at(3)); // Output: 222
console.log(brr.indexOf(300)); // Output: 0 (if 300 is in the array)
```
- **Explanation:** The `at` method returns the element at a specific index. The `indexOf` method returns the first index at which a given element is found.

#### 8. Using Callback Functions with Arrays
```javascript
console.log(brr.findIndex((num) => num > 200)); // Finds the first element greater than 200
```
- **Explanation:** The `findIndex` method returns the index of the first element that satisfies the provided testing function.

#### 9. Iterating Over Arrays with forEach
```javascript
let brr = [11, 11, 11, 2, 3, 4, 5];
brr.forEach((num) => console.log(num));

let sum = 0;
brr.forEach((num) => {
    sum += num;
});
console.log(sum); // Output: sum of all elements
```
- **Explanation:** The `forEach` method executes a provided function once for each array element.

#### 10. Checking for Element Inclusion
```javascript
console.log(brr.includes(4)); // Output: true or false
console.log(brr.includes(41)); // Output: false
```
- **Explanation:** The `includes` method determines whether an array includes a certain value, returning true or false.

#### 11. Checking Conditions with Every and Some
```javascript
let brr = [2, 4, 6, 8, 15];
let result = brr.every((num) => num % 2 == 0);
console.log(result); // Output: false

let brr = [2, 4, 6, 8, 16];
console.log(brr.some((num) => num % 2 != 0)); // Output: true
```
- **Explanation:** The `every` method tests whether all elements pass the provided function. The `some` method tests whether at least one element passes the provided function.

#### 12. Filtering and Mapping Arrays
```javascript
let brr = [2, 4, 5, 6, 8, 9, 16];
console.log(brr.filter((num) => num % 2 == 0)); // Output: array of even numbers

console.log(brr.map((num) => num * 2)); // Output: array with each element doubled
```
- **Explanation:** The `filter` method creates a new array with all elements that pass the test. The `map` method creates a new array with the results of calling a function on every element.

#### 13. Getting Array Length
```javascript
console.log(brr.length); // Output: length of the array
```
- **Explanation:** The `length` property returns the number of elements in an array.
