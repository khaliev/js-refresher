// ======================================================
// ===================== FUNCTIONS =======================
// ======================================================

// Functions allow us to group reusable code into blocks.
// They help us avoid repetition and make our programs organized.

// JavaScript provides multiple ways to create functions:
// 1) Function declarations
// 2) Function expressions
// 3) Arrow functions
// 4) Default parameters
// 5) Hoisting behavior

// ------------------------------------------------------
// 1. FUNCTION DECLARATION (regular function syntax)
// ------------------------------------------------------
// This is the most common way to define a function.
// Function declarations are HOISTED (you can call them before they appear).

function createGreeting(userName, message) {
  // Parameters (userName, message) are placeholders for values.
  // The function RETURNS a string — it does not print anything by itself.
  return `${userName}, ${message}`;
}

let greeting1 = createGreeting("Adlan", "welcome back!");
// Calling / invoking the function:
console.log(greeting1); // Adlan, welcome back!

let greeting2 = createGreeting("Sarah", "good to see you!");
console.log(greeting2); // Sarah, good to see you!

// ------------------------------------------------------
// 1.1 DEFAULT PARAMETERS
// ------------------------------------------------------
// If no arguments are provided, default values are used.

function createGreetingWithDefaults(userName = "Guest", message = "Welcome!") {
  return `${userName}, ${message}`;
}

let defaultGreeting = createGreetingWithDefaults();
console.log(defaultGreeting); // Guest, Welcome!

// ------------------------------------------------------
// 2. FUNCTION EXPRESSION
// ------------------------------------------------------
// A function expression stores a function inside a variable.
// Function expressions are NOT hoisted.

const greetExpression = function (userName, message) {
  console.log("Hello from a function expression!");
  return `${userName}, ${message}`;
};

let greeting3 = greetExpression("Adlan", "how are you?");
console.log(greeting3);

// ------------------------------------------------------
// 3. ARROW FUNCTIONS
// ------------------------------------------------------
// Arrow functions provide a shorter syntax.
// They are anonymous and usually assigned to variables.

// Basic arrow function:
const greetArrow = () => {
  console.log("Hello from arrow function!");
};

greetArrow();

// ------------------------------------------------------
// 3.1 IMPLICIT RETURN (no curly braces, no return keyword)
// ------------------------------------------------------

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// ------------------------------------------------------
// 3.2 SINGLE PARAMETER SHORTCUT
// ------------------------------------------------------
// Parentheses can be omitted ONLY when there is exactly one parameter.

const square = (x) => x * x;
console.log(square(4)); // 16

// ❗ RULES:
// - No parameters → () => { ... }
// - One parameter → x => { ... }
// - Two+ parameters → (a, b) => { ... }

// ------------------------------------------------------
// 3.3 NO PARAMETERS
// ------------------------------------------------------

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// ------------------------------------------------------
// 3.4 RETURNING AN OBJECT (special case)
// ------------------------------------------------------
// When using implicit return, wrap the object in parentheses.

// ❌ INVALID (JS thinks {} is a function body)
const invalidObj = (number) => {
  age: number;
};

// ✔ VALID
const validObj = (number) => ({ age: number });
console.log(validObj(25)); // { age: 25 }

// ------------------------------------------------------
// 3.5 MORE ARROW FUNCTION SYNTAX SHORTCUTS
// ------------------------------------------------------

// --- Omitting parentheses (1 parameter only) ---

// Instead of:
const fullForm = (userName) => {
  return `Hello, ${userName}`;
};

// Short version:
const shortForm = (userName) => `Hello, ${userName}`;

// --- Omitting curly braces (implicit return) ---

// Instead of:
const triple1 = (number) => {
  return number * 3;
};

// Short version:
const triple2 = (number) => number * 3;

// ❌ INVALID EXAMPLES:
// number => return number * 3; // return cannot be used without braces
// number => if (number === 2) { return 5 }; // if statements require braces

// ------------------------------------------------------
// 4. DEFAULT EXPORT (arrow function)
// ------------------------------------------------------
// This function can be imported using:
// import myFunction from './file.js';

export default (userName, message) => {
  console.log("Hello from anonymous exported function!");
  return `${userName}, ${message}`;
};

// ------------------------------------------------------
// 5. FUNCTION HOISTING
// ------------------------------------------------------
// Function declarations ARE hoisted.

console.log(hoistedFunction()); // Works!

function hoistedFunction() {
  return "This function is hoisted!";
}

// Function expressions and arrow functions are NOT hoisted:

// console.log(notHoisted()); // ❌ Error: Cannot access before initialization

const notHoisted = function () {
  return "This function is NOT hoisted!";
};

// ------------------------------------------------------
// 6. WHEN NOT TO USE ARROW FUNCTIONS
// ------------------------------------------------------
// Arrow functions DO NOT have their own:
// - this
// - arguments
// - super
// - new.target
//
// Avoid arrow functions when:
// - You need "this" (e.g., object methods)
// - You need "arguments"
// - You need a constructor function (arrow functions cannot be used with "new")

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// Function declaration → hoisted, named
// Function expression → not hoisted, anonymous
// Arrow function → short syntax, no own "this"
// Default parameters → provide fallback values
// Hoisting → only function declarations are hoisted
//
// Arrow function shortcuts:
// - One parameter → parentheses optional
// - One return statement → braces + return optional
// - Returning object → wrap in parentheses

// ------------------------------------------------------
// EXAMPLE USAGE OF DEFAULT EXPORT (in another file):
// import createGreeting from './04-functions.js';
// console.log(createGreeting("Adlan", "welcome back!")); // Adlan, welcome back!
