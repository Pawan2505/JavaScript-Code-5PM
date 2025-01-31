// // Declare a string variable
// let name = "Pranav";
// console.log(name); // Print the value of 'name'
// console.log(typeof name); // Print the type of 'name'

// // Strings are immutable: original strings cannot be changed.
// let programming = "Javascript Language";
// console.log(programming); // Print the value of 'programming'

// // 1. Length of the string
// console.log(programming.length); // Output: 18

// // 2. replace() method - replace part of the string
// let str = programming.replace("Javascript", "C++");
// console.log(str); // Print the replaced string
// console.log(programming); // Original string remains unchanged

// // 3. substring() method - extract part of the string
// let substr = programming.substring(0, 9); // Extract characters from index 0 to 8
// console.log(substr); // Output: 'Javascrip'

// // 4. toUpperCase() - convert to uppercase
// let upperstr = programming.toUpperCase();
// console.log(upperstr); // Output: 'JAVASCRIPT LANGUAGE'

// // 5. toLowerCase() - convert to lowercase
// let lowerstr = programming.toLowerCase();
// console.log(lowerstr); // Output: 'javascript language'

// // 6. at() - find value at a specific index (supports negative indexes)
// console.log(programming.at(3)); // Output: 'a'
// console.log(programming.at(-4)); // Output: 'a'

// // 7. charAt() - find value at a specific index (does not support negative indexes)
// console.log(programming.charAt(3)); // Output: 'a'

// // Explanation on 'at()' vs 'charAt()'
// console.log(programming.charAt(programming.length - 4)); // Output: 'u'
// console.log(programming.charAt(-4)); // Not valid, returns an empty string

// // 8. trim() - remove whitespace from both ends
// let programmingWithSpaces = "                          Javascript Language ";
// let trimstr = programmingWithSpaces.trim();
// console.log(trimstr); // Output: 'Javascript Language'

// // 9. join() - not applicable to strings, used for arrays
// let arr = [12, 34, 5, 667, 788, 9];
// console.log(arr); // Print the array
// console.log(typeof arr); // Output: 'object'

// // Join array elements into a string
// console.log(arr.join(", ")); // Output: '12, 34, 5, 667, 788, 9'
// console.log(typeof arr.join(" ")); // Output: 'string'

// //10. substr() - extract part of the string (deprecated, prefer substring())
// let nameStr = "Javascript lang";
// console.log(nameStr.substr(0, 10)); // Output: 'Javascript'


// // 11. Using the + operator:

// let str1 = "Hello, ";
// let str2 = "world!";
// let result = str1 + str2;
// console.log(result); // Output: Hello, world!

// // 12. Using the concat() method:

// let str1 = "Hello, ";
// let str2 = "world!";
// let result = str1.concat(str2);
// console.log(result); // Output: Hello, world!


// // 13. Using template literals:

// let str1 = "Hello, ";
// let str2 = "world!";
// let result = `${str1}${str2}`;
// console.log(result); // Output: Hello, world!

