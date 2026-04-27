// ======================================================
// ===================== VARIABLES =======================
// ======================================================

// Variables are containers that store data.
// They allow us to save values and reuse or modify them later in our programs.

// In JavaScript, we can declare variables using:
// - var
// - let
// - const

// --- 1. var ---
// "var" is the old way of declaring variables.
// It has function scope (NOT block scope) and allows redeclaration.
// In modern JavaScript, we avoid using var unless necessary.

var myAbc = "Hello, I'm a variable declared with var!";
console.log(myAbc);

// --- 2. let ---
// "let" is the modern way to declare variables that CAN change.
// It has block scope (safer and more predictable than var).

let myDef = "Hi, I'm a variable declared with let!";
console.log(myDef);

myDef = "I can be reassigned because I'm declared with let!";
console.log(myDef);

// --- 3. const ---
// "const" is used for variables that should NOT be reassigned.
// It also has block scope.
// Important: const prevents reassignment, but DOES NOT make objects immutable.

const myGhi = "Hey, I'm a constant variable declared with const!";
console.log(myGhi);

// ❌ This would cause an error:
// myGhi = "Trying to change a const value"; // TypeError

// But if const holds an object or array, the CONTENT can still change:
// const user = { name: "Adlan" };
// user.name = "Sarah"; // ✔ allowed
// user = {} // ❌ not allowed (reassignment)
