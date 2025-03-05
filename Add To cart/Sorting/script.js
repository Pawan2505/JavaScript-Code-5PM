let arr = [12, 3, 4, 5, 7, 88, 34, 568, 8, 90]

let brr = arr.sort((a, b)=>b-a)

console.log(brr)


// Understanding the sort() method:

// arr.sort() is used to sort the elements of an array in place.

// The sort() method takes a callback function that determines the order in which the elements will be sorted.
// The callback function receives two arguments: a and b. These represent two elements from the array that will be compared at a time.

// Explanation of the callback(a, b) => a - b:
// a - b is the key to how sorting works:
// If a - b is less than 0, it means a should come before b in the sorted array.
// If a - b is greater than 0, it means b should come before a in the sorted array.
// If a - b is 0, a and b are considered equal, and their order is not changed.