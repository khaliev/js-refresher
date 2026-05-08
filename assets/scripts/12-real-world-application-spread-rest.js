// real wolrd application of spread and rest operators

// In the previous sections, we covered the basics of spread and rest operators. Now let's see how they can be applied in real-world scenarios.

// ------------------------------------------------------
// 1. SPREAD OPERATOR IN REAL-WORLD APPLICATIONS
// ------------------------------------------------------

// 1.1 Merging objects (e.g., user data with default settings)
const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };

const mergedSettings = { ...defaultSettings, ...userSettings };
console.log(mergedSettings); // { theme: "dark", notifications: true }

// 1.2 Cloning arrays before modifying them (e.g., adding items to a shopping cart)
const cart = ["apple", "banana"];
const updatedCart = [...cart, "orange"];
console.log(updatedCart); // ["apple", "banana", "orange"]

// 1.3 Passing dynamic arguments to functions (e.g., finding max value in an array)
const numbers = [10, 20, 5];
console.log(Math.max(...numbers)); // 20

// ------------------------------------------------------
// 2. REST OPERATOR IN REAL-WORLD APPLICATIONS
// ------------------------------------------------------

// 2.1 Collecting function arguments (e.g., summing an arbitrary number of values)
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5)); // 9

// 2.2 Destructuring with rest to separate specific properties from the rest (e.g., extracting user info)
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const { name, ...otherInfo } = person;
console.log(name); // Alice
console.log(otherInfo); // { age: 30, city: "New York" }

// ------------------------------------------------------
// 3. SUMMARY
// ------------------------------------------------------
// SPREAD (expands):
// - Merging objects and arrays
// - Passing array elements as individual arguments to functions

// REST (collects):
// - Collecting function arguments into an array
// - Destructuring to separate specific properties from the rest

// Both operators are powerful tools for writing clean, efficient, and modern JavaScript code. They are widely used in real-world applications, especially in frameworks like React for managing state and props. Understanding how to use them effectively will greatly enhance your ability to work with JavaScript in practical scenarios.
