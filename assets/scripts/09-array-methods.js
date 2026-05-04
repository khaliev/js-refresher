// ======================================================
// ===================== ARRAY METHODS ===================
// ======================================================

// Array methods allow you to transform, search, filter, and reduce arrays.
// They are essential for modern JavaScript and React development.

// We'll use this array for examples:
const hobbies = ["reading", "traveling", "coding"];

// ------------------------------------------------------
// 1. MAP — TRANSFORM EACH ELEMENT
// ------------------------------------------------------
// map() creates a NEW array by applying a function to each element.

const upperHobbies = hobbies.map((hobby) => hobby.toUpperCase());
console.log(upperHobbies);
// ["READING", "TRAVELING", "CODING"]

// Mapping to an array of objects:
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);
// [{ text: "reading" }, { text: "traveling" }, { text: "coding" }]

// ------------------------------------------------------
// 2. FILTER — KEEP ONLY ELEMENTS THAT MATCH A CONDITION
// ------------------------------------------------------
// filter() returns a NEW array with only the elements that pass the test.

const longHobbies = hobbies.filter((hobby) => hobby.length > 6);
console.log(longHobbies);
// ["traveling", "coding"]

// ------------------------------------------------------
// 3. REDUCE — REDUCE ARRAY TO A SINGLE VALUE
// ------------------------------------------------------
// reduce(callback, initialValue)
// callback receives: (accumulator, currentValue)

const totalLength = hobbies.reduce((total, hobby) => {
  return total + hobby.length;
}, 0);

console.log(totalLength);
// total number of characters in all hobbies

// ------------------------------------------------------
// 4. FIND — RETURN THE FIRST MATCHING ELEMENT
// ------------------------------------------------------

const codingHobby = hobbies.find((hobby) => hobby === "coding");
console.log(codingHobby); // "coding"

// ------------------------------------------------------
// 5. FINDINDEX — RETURN THE INDEX OF THE FIRST MATCH
// ------------------------------------------------------

const codingIndex = hobbies.findIndex((item) => item === "coding");
console.log(codingIndex); // 2

// ------------------------------------------------------
// 6. INCLUDES — CHECK IF AN ELEMENT EXISTS
// ------------------------------------------------------

console.log(hobbies.includes("traveling")); // true
console.log(hobbies.includes("gaming")); // false

// ------------------------------------------------------
// 7. FOREACH — LOOP THROUGH EACH ELEMENT
// ------------------------------------------------------
// forEach() does NOT return a new array.

hobbies.forEach((hobby, index) => {
  console.log(`${index + 1}. ${hobby}`);
});

// Output:
// 1. reading
// 2. traveling
// 3. coding

// ------------------------------------------------------
// 8. SOME — CHECK IF AT LEAST ONE ELEMENT MATCHES
// ------------------------------------------------------

const hasLongWord = hobbies.some((hobby) => hobby.length > 8);
console.log(hasLongWord); // true (traveling is long)

// ------------------------------------------------------
// 9. EVERY — CHECK IF ALL ELEMENTS MATCH
// ------------------------------------------------------

const allAreStrings = hobbies.every((hobby) => typeof hobby === "string");
console.log(allAreStrings); // true

// ------------------------------------------------------
// 10. SLICE — COPY PART OF AN ARRAY (NON-DESTRUCTIVE)
// ------------------------------------------------------

const firstTwo = hobbies.slice(0, 2);
console.log(firstTwo); // ["reading", "traveling"]

// slice() does NOT modify the original array

// ------------------------------------------------------
// 11. SPLICE — ADD/REMOVE ELEMENTS (DESTRUCTIVE)
// ------------------------------------------------------

const numbers = [10, 20, 30, 40];

// Remove 1 element at index 1
numbers.splice(1, 1);
console.log(numbers); // [10, 30, 40]

// Insert without removing
numbers.splice(1, 0, 25);
console.log(numbers); // [10, 25, 30, 40]

// ------------------------------------------------------
// 12. SORT — SORT ELEMENTS
// ------------------------------------------------------

// Default sort is alphabetical:
const nums = [3, 1, 10, 2];
console.log(nums.sort()); // [1, 10, 2, 3]

// Correct numeric sort:
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 3, 10]

// ------------------------------------------------------
// 13. CHAINING METHODS (VERY IMPORTANT IN REACT)
// ------------------------------------------------------
// You can combine multiple array methods.

const result = hobbies
  .filter((hobby) => hobby.length > 6)
  .map((hobby) => hobby.toUpperCase());

console.log(result);
// ["TRAVELING", "CODING"]

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// map()       → transform each element → returns new array
// filter()    → keep elements that match → returns new array
// reduce()    → reduce array to a single value
// find()      → return first matching element
// findIndex() → return index of first match
// includes()  → check if value exists
// forEach()   → loop through array (no return)
// some()      → at least one element matches?
// every()     → all elements match?
// slice()     → copy part of array (non-destructive)
// splice()    → add/remove elements (destructive)
// sort()      → sort array (custom compare for numbers)
//
// Array methods are essential for:
// - data transformation
// - filtering lists
// - searching
// - building UI lists in React
// - handling API data
