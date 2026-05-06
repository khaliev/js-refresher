// ======================================================
// ===================== DESTRUCTURING ===================
// ======================================================

// Destructuring allows you to extract values from arrays or objects
// and assign them to variables in a clean, concise way.
//
// It makes your code shorter, more readable, and easier to work with.

// ------------------------------------------------------
// 1. ARRAY DESTRUCTURING
// ------------------------------------------------------

const userNameData = ["Mike", "Gibson"];

// Traditional way:
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// Destructuring way:
const [firstName, lastName] = userNameData; // This creates two variables (their names are up to you) and assigns them the values that are pulled out from the array based on their POSITION (index).

console.log(firstName); // Mike
console.log(lastName); // Gibson

// You can destructure directly from an array literal:
const [fName, lName] = ["Anna", "Smith"];
console.log(fName); // Anna
console.log(lName); // Smith

// ------------------------------------------------------
// 1.1 SKIPPING ELEMENTS
// ------------------------------------------------------

const colors = ["red", "green", "blue"];

const [primary, , tertiary] = colors;

console.log(primary); // red
console.log(tertiary); // blue

// ------------------------------------------------------
// 1.2 DEFAULT VALUES
// ------------------------------------------------------

const [a = "defaultA", b = "defaultB"] = ["valueA"];
console.log(a); // valueA
console.log(b); // defaultB (fallback)

// ------------------------------------------------------
// 2. OBJECT DESTRUCTURING
// ------------------------------------------------------

const userData = {
  name: "Emma",
  age: 28,
};

// Traditional way:
// const userName = userData.name;
// const userAge = userData.age;

// Destructuring way:
const { name, age } = userData; // This creates variables with the same names as the object keys and assigns them the corresponding values from the object based on their NAMES (not position).

console.log(name); // Emma
console.log(age); // 28

// ------------------------------------------------------
// 2.1 RENAMING VARIABLES (ALIASES)
// ------------------------------------------------------
// Useful when variable names conflict or you want clearer names.

const { name: uName, age: uAge } = {
  name: "Emma",
  age: 28,
};

console.log(uName); // Emma
console.log(uAge); // 28

// ------------------------------------------------------
// 2.2 DEFAULT VALUES IN OBJECTS
// ------------------------------------------------------

const {
  name: userN = "Default Name",
  age: userA = 18,
  email: userE = "no-email",
} = {
  name: "Emma",
  age: 28,
};

console.log(userN); // Emma
console.log(userA); // 28
console.log(userE); // "no-email" (default value)

// ------------------------------------------------------
// 2.3 DESTRUCTURING NESTED OBJECTS
// ------------------------------------------------------

const person = {
  fullName: "Sarah Connor",
  address: {
    city: "Paris",
    zip: 75000,
  },
};

const {
  fullName,
  address: { city, zip },
} = person;

console.log(fullName); // Sarah Connor
console.log(city); // Paris
console.log(zip); // 75000

// ------------------------------------------------------
// 3. DESTRUCTURING IN FUNCTION PARAMETERS
// ------------------------------------------------------

// Instead of passing an entire object and accessing properties inside the function,
// you can destructure the object properties directly in the function parameters
// This extracts specific properties from the object and creates local variables for them

function displayUser({ name, age }) {
  // name and age are now available as variables inside the function
  // they were extracted from the object passed as an argument
  console.log(`Name: ${name}, Age: ${age}`);
}

// Create an object with properties
const someUser = {
  name: "Olivia",
  age: 32,
};

// Pass the object to the function
// The function automatically extracts the name and age properties
displayUser(someUser);
// Output: Name: Olivia, Age: 32

// This is equivalent to the longer way below:
// function displayUser(user) {
//   const name = user.name;
//   const age = user.age;
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// ------------------------------------------------------
// 4. DESTRUCTURING WITH REST (...)

// Rest collects the "remaining" items into a new array or object.

// Array example:
const [first, ...others] = ["a", "b", "c", "d"];
console.log(first); // "a"
console.log(others); // ["b", "c", "d"]

// Object example:
const { age: userAge, ...rest } = { name: "Tom", age: 40, job: "Engineer" };
console.log(userAge); // 40
console.log(rest); // { name: "Tom", job: "Engineer" }

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// ARRAY DESTRUCTURING:
// - const [a, b] = array
// - Skip items: const [a, , c] = array
// - Default values: const [a = 1] = []

// OBJECT DESTRUCTURING:
// - const { key } = object
// - Rename: const { key: newName } = object
// - Default values: const { key = "default" } = object
// - Nested: const { nested: { key } } = object

// FUNCTION PARAMETERS:
// - function fn({ key }) { ... }

// REST OPERATOR:
// - const [a, ...rest] = array
// - const { a, ...rest } = object

// Destructuring is essential for:
// - cleaner code
// - React props & state
// - handling API responses
// - writing modern JavaScript
