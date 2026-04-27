// ======================================================
// ===================== FUNCTIONS =======================
// ======================================================

// --- 1. FUNCTION DECLARATION (regular function syntax) ---
// This is the most common way to define a function in JavaScript.
// You give the function a name, and then you can call it later
// by using that name followed by parentheses.

// Parameters (userName, message) act as placeholders for values
// that will be passed when the function is called.
// "Arguments" = actual values passed during the call.
// "Parameters" = variables defined in the function declaration.

function createGreeting(userName, message) {
  // This function returns a formatted greeting string.
  // It does NOT print anything by itself unless we log it.
  return `${userName}, ${message}`;
}

// Calling / invoking the function:
let greeting1 = createGreeting("Adlan", "welcome back!");
console.log(greeting1); // Adlan, welcome back!

let greeting2 = createGreeting("Sarah", "good to see you!");
console.log(greeting2); // Sarah, good to see you!

// --- Default parameter values ---
// If the caller does not provide arguments, default values are used.

function createGreeting1(userName = "Guest", message = "Welcome!") {
  return `${userName}, ${message}`;
}

let defaultGreeting = createGreeting1();
console.log(defaultGreeting); // Guest, Welcome!

// --- 2. FUNCTION EXPRESSION (anonymous function assigned to a variable) ---
// This function has no name; it is stored inside a variable.

const greet = function (userName, message) {
  console.log("Hello from anonymous function!");
  return `${userName}, ${message}`;
};

let greeting3 = greet("Adlan", "how are you?");
console.log(greeting3); // Adlan, how are you?

// --- 3. ARROW FUNCTIONS ---
// Arrow functions provide a shorter syntax.
// They are anonymous by default, so we usually assign them to variables.

// Basic arrow function:
const greetArrow = () => {
  console.log("Hello from arrow function!");
};

greetArrow();

// Arrow function with implicit return (no curly braces, no 'return'):
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Arrow function with a single parameter (parentheses optional):
const square = (x) => x * x;
console.log(square(4)); // 16

// Arrow function with no parameters (requires empty parentheses):
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());

// --- 4. ANONYMOUS ARROW FUNCTION AS DEFAULT EXPORT ---
// This function can be imported in another file using:
// import myFunction from './fileName.js';

export default (userName, message) => {
  console.log("Hello from anonymous exported function!");
  return `${userName}, ${message}`;
};

// Note: Since it's a default export, you must import it in another file
// before calling it.
