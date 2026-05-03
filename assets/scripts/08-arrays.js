// ======================================================
// ========================= ARRAYS ======================
// ======================================================

// Arrays store ordered lists of values.
// Each value has an index (position), starting at 0.
// Arrays can contain ANY data type: strings, numbers, objects, functions, etc.

// ------------------------------------------------------
// 1. CREATING AN ARRAY
// ------------------------------------------------------

const hobbies = ["reading", "traveling", "coding"];

console.log(hobbies); // ["reading", "traveling", "coding"]

// ------------------------------------------------------
// 2. ACCESSING ELEMENTS
// ------------------------------------------------------

console.log(hobbies[0]); // reading (first element)
console.log(hobbies[1]); // traveling
console.log(hobbies[2]); // coding

// Length of the array:
console.log(hobbies.length); // 3

// ------------------------------------------------------
// 3. ADDING ELEMENTS
// ------------------------------------------------------

// push() → adds to the END
hobbies.push("gaming");
console.log(hobbies);
// ["reading", "traveling", "coding", "gaming"]

// unshift() → adds to the BEGINNING
hobbies.unshift("music");
console.log(hobbies);
// ["music", "reading", "traveling", "coding", "gaming"]

// ------------------------------------------------------
// 4. REMOVING ELEMENTS
// ------------------------------------------------------

// pop() → removes LAST element
hobbies.pop();
console.log(hobbies);
// ["music", "reading", "traveling", "coding"]

// shift() → removes FIRST element
hobbies.shift();
console.log(hobbies);
// ["reading", "traveling", "coding"]

// ------------------------------------------------------
// 5. FINDING ELEMENTS
// ------------------------------------------------------

// includes() → checks if an element exists
const hasTraveling = hobbies.includes("traveling");
console.log(hasTraveling); // true

// indexOf() → returns index or -1 if not found
console.log(hobbies.indexOf("coding")); // 2

// findIndex() → finds index using a callback function
const index = hobbies.findIndex((item) => item === "coding");
console.log(index); // 2

// find() → returns the actual element
const found = hobbies.find((item) => item.startsWith("t"));
console.log(found); // traveling

// ------------------------------------------------------
// 6. LOOPING THROUGH ARRAYS
// ------------------------------------------------------

// forEach() → runs a function for each element
hobbies.forEach((hobby, index) => {
  console.log(`${index + 1}. ${hobby}`);
});

// Output:
// 1. reading
// 2. traveling
// 3. coding

// ------------------------------------------------------
// 7. MODIFYING ARRAYS
// ------------------------------------------------------

// splice(start, deleteCount, ...items)
// Removes or replaces elements

const numbers = [10, 20, 30, 40];

// Remove 1 element at index 1
numbers.splice(1, 1);
console.log(numbers); // [10, 30, 40]

// Insert elements without removing
numbers.splice(1, 0, 25);
console.log(numbers); // [10, 25, 30, 40]

// ------------------------------------------------------
// 8. COPYING ARRAYS
// ------------------------------------------------------

// Arrays are copied by reference (NOT value)
const original = ["a", "b"];
const copyRef = original;

copyRef.push("c");

console.log(original); // ["a", "b", "c"] (both changed)

// To copy properly, use spread:
const realCopy = [...original];
realCopy.push("d");

console.log(original); // ["a", "b", "c"]
console.log(realCopy); // ["a", "b", "c", "d"]

// ------------------------------------------------------
// 9. COMBINING ARRAYS
// ------------------------------------------------------

const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// ------------------------------------------------------
// 10. TRANSFORMING ARRAYS (IMPORTANT!)
// ------------------------------------------------------
// These methods DO NOT modify the original array:
// - map()
// - filter()
// - slice()

// map() → transforms each element
const uppercased = hobbies.map((hobby) => hobby.toUpperCase());
console.log(uppercased);

// filter() → keeps only elements that match a condition
const longHobbies = hobbies.filter((hobby) => hobby.length > 7);
console.log(longHobbies);

// slice() → copies part of an array
const firstTwo = hobbies.slice(0, 2);
console.log(firstTwo);

// ------------------------------------------------------
// 11. SORTING ARRAYS
// ------------------------------------------------------

const nums = [3, 1, 10, 2];

// Default sort is alphabetical (not good for numbers)
console.log(nums.sort()); // [1, 10, 2, 3]

// Correct numeric sort:
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 3, 10]

// ------------------------------------------------------
// 12. IMPORTANT ARRAY FACTS
// ------------------------------------------------------
// - Arrays are objects under the hood
// - Index starts at 0
// - push/pop are fast
// - shift/unshift are slower (they move all elements)
// - map, filter, reduce are essential for modern JS
// - Spread operator is the best way to copy arrays

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// Create array → const arr = [...]
// Access → arr[index]
// Add → push(), unshift()
// Remove → pop(), shift()
// Search → includes(), indexOf(), find(), findIndex()
// Loop → forEach()
// Copy → [...arr]
// Combine → [...arr1, ...arr2]
// Transform → map(), filter(), slice()
// Sort → sort(callback)
//
// Arrays are one of the most important data structures in JavaScript.
// You will use them constantly in real projects and in React.
// Mastering them is essential for becoming a strong developer.
