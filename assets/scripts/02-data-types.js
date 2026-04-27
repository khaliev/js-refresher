// ======================================================
// ===================== DATA TYPES ======================
// ======================================================

// JavaScript has 8 main data types.
// They fall into two categories:
// 1) Primitive types (simple values)
// 2) Reference types (objects, arrays, functions, etc.)

// ------------------------------------------------------
// 1. PRIMITIVE DATA TYPES
// ------------------------------------------------------
// Primitive values are immutable and stored directly in memory.

// --- 1.1 String ---
// Text data wrapped in quotes: "", '', or `` (template literals)

let myString = "Hello, world!";
let anotherString = "Single quotes work too";
let templateString = `Template literals allow ${2 + 2} interpolation`;

console.log(myString, anotherString, templateString);

// --- 1.2 Number ---
// JavaScript has only one number type (integer + float)

let age = 25;
let price = 19.99;
let negative = -42;

console.log(age, price, negative);

// --- 1.3 Boolean ---
// Represents true or false values

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn, isAdmin);

// --- 1.4 Null ---
// Represents an intentional “empty” value

let emptyValue = null;
console.log(emptyValue); // null

// --- 1.5 Undefined ---
// A variable that has been declared but not assigned a value

let notAssigned;
console.log(notAssigned); // undefined

// --- 1.6 Symbol ---
// Unique identifiers (rarely used by beginners)

let uniqueId = Symbol("id");
console.log(uniqueId);

// --- 1.7 BigInt ---
// Used for very large integers beyond Number limits

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// ------------------------------------------------------
// 2. REFERENCE DATA TYPES / ССЫЛОЧНЫЕ ТИПЫ ДАННЫХ
// ------------------------------------------------------
// These are stored by reference (not by value).

// --- 2.1 Object ---
// A collection of key-value pairs

let user = {
  name: "Adlan",
  age: 25,
  isStudent: true,
};

console.log(user);

// --- 2.2 Array ---
// Ordered list of values (arrays are technically objects)

let numbers = [1, 2, 3, 4];
let mixedArray = ["text", 42, true];

console.log(numbers, mixedArray);

// --- 2.3 Function ---
// Functions are also objects in JavaScript

function sayHello() {
  console.log("Hello!");
}

sayHello();

// ------------------------------------------------------
// 3. typeof OPERATOR
// ------------------------------------------------------
// typeof lets you check the data type of a value.

console.log(typeof "hello"); // "string"
console.log(typeof 123); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known JS bug)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof sayHello); // "function"
