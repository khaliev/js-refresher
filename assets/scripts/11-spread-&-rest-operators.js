// ======================================================
// ================= REST & SPREAD OPERATORS =============
// ======================================================

// The "..." syntax in JavaScript is used for TWO different purposes:
//
// 1) SPREAD  → expands (spreads) elements OUT of an array or object
// 2) REST    → collects (gathers) elements INTO an array or object
//
// Same syntax, opposite behavior — context determines the meaning.

// ------------------------------------------------------
// 1. SPREAD OPERATOR ( ... )
// ------------------------------------------------------
// Spread EXPANDS arrays or objects.
// Think of it as "unpacking" values.

// ------------------------------------------------------
// 1.1 SPREAD WITH ARRAYS
// ------------------------------------------------------

const hobbies = ["reading", "traveling", "coding"];

// Copying an array (non-destructive):
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);
// ["reading", "traveling", "coding"]

// Combining arrays:
const moreHobbies = ["gaming", "music"];
const allHobbies = [...hobbies, ...moreHobbies];

console.log(allHobbies);
// ["reading", "traveling", "coding", "gaming", "music"]

// ------------------------------------------------------
// 1.2 SPREAD WITH OBJECTS
// ------------------------------------------------------

const user = {
  name: "Alice",
  age: 25,
};

// Copying an object:
const copiedUser = { ...user };
console.log(copiedUser);

// Adding new properties:
const updatedUser = { ...user, country: "France" };
console.log(updatedUser);
// { name: "Alice", age: 25, country: "France" }

// Merging objects:
const jobInfo = { role: "Developer" };
const mergedUser = { ...user, ...jobInfo };

console.log(mergedUser);
// { name: "Alice", age: 25, role: "Developer" }

// ------------------------------------------------------
// 1.3 SPREAD IN FUNCTION CALLS
// ------------------------------------------------------

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [5, 10, 15];

console.log(sum(...numbers)); // 30
// Equivalent to sum(5, 10, 15)

// ------------------------------------------------------
// 2. REST OPERATOR ( ... )
// ------------------------------------------------------
// Rest COLLECTS multiple values into an array or object.
// Think of it as "packing" values together.

// ------------------------------------------------------
// 2.1 REST WITH ARRAYS
// ------------------------------------------------------

const [first, second, ...remaining] = ["a", "b", "c", "d", "e"];

console.log(first); // "a"
console.log(second); // "b"
console.log(remaining); // ["c", "d", "e"]

// ------------------------------------------------------
// 2.2 REST WITH OBJECTS
// ------------------------------------------------------

const person = {
  name: "Bob",
  age: 40,
  job: "Engineer",
  country: "France",
};

const { name, ...otherInfo } = person;

console.log(name); // "Bob"
console.log(otherInfo); // { age: 40, job: "Engineer", country: "France" }

// ------------------------------------------------------
// 2.3 REST IN FUNCTION PARAMETERS
// ------------------------------------------------------
// Rest allows functions to accept ANY number of arguments.

function logAll(...values) {
  console.log(values);
}

logAll(1, 2, 3, 4);
// [1, 2, 3, 4]

function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(5, 10, 15)); // 30

// ------------------------------------------------------
// 3. COMMON MISTAKES
// ------------------------------------------------------

// ❌ Spread cannot be used on non-iterables:
/// const wrong = ...123; // invalid

// ❌ Rest must be the LAST parameter:
/// function bad(a, ...rest, b) {} // invalid

// ❌ Spread does NOT deep copy nested objects:
const nested = { info: { city: "Paris" } };
const shallowCopy = { ...nested };

shallowCopy.info.city = "Lyon";

console.log(nested.info.city); // "Lyon" (same reference)

// ------------------------------------------------------
// 4. REAL-WORLD USE CASES
// ------------------------------------------------------

// 4.1 Updating state in React (VERY common)
const state = { count: 1, theme: "dark" };
const newState = { ...state, count: state.count + 1 };

// 4.2 Cloning arrays before modifying them
const arr = [1, 2, 3];
const newArr = [...arr, 4];

// 4.3 Extracting specific properties
const { age, ...restInfo } = person;

// 4.4 Passing dynamic arguments to functions
console.log(Math.max(...[10, 20, 5])); // 20

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// SPREAD (expands):
// - [...array]
// - {...object}
// - sum(...numbers)
//
// REST (collects):
// - const [...rest] = array
// - const {...rest} = object
// - function fn(...args) {}
//
// Spread = unpack
// Rest = pack
//
// These operators are essential for:
// - copying arrays/objects
// - merging data
// - React state updates
// - flexible function arguments
// - writing clean, modern JavaScript
