// ======================================================
// ======================== OBJECTS ======================
// ======================================================

// Objects are one of the most important data structures in JavaScript.
// They store data in KEY–VALUE pairs.
// Each key is a string (or symbol), and each value can be ANY data type.

// Example structure:
// const objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
// };

// ------------------------------------------------------
// 1. CREATING AN OBJECT
// ------------------------------------------------------

const user = {
  name: "John Doe",
  age: 30,

  // Methods are functions stored inside objects.
  greet() {
    // "this" refers to the CURRENT object (user).
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

// ------------------------------------------------------
// 2. ACCESSING OBJECT PROPERTIES
// ------------------------------------------------------

// Dot notation (most common):
console.log(user.name); // John Doe

// Bracket notation (useful when key is dynamic or not a valid identifier):
console.log(user["age"]); // 30

// Calling a method:
user.greet();
// Output: Hello, my name is John Doe and I am 30 years old.

// ------------------------------------------------------
// 3. ADDING NEW PROPERTIES
// ------------------------------------------------------
// You can add new key–value pairs at any time.

user.email = "johndoe@mail.com";
console.log(user.email); // johndoe@mail.com

// ------------------------------------------------------
// 4. MODIFYING EXISTING PROPERTIES
// ------------------------------------------------------

user.name = "Jonathan Doe";
console.log(user.name); // Jonathan Doe

// ------------------------------------------------------
// 5. DELETING PROPERTIES
// ------------------------------------------------------

delete user.age;
console.log(user.age); // undefined

// ------------------------------------------------------
// 6. LOOPING THROUGH OBJECT PROPERTIES
// ------------------------------------------------------
// for...in loops through KEYS of an object.

for (let key in user) {
  // key → property name
  // user[key] → property value
  console.log(`${key}: ${user[key]}`);
}

// Example output:
// name: Jonathan Doe
// greet: function() { ... }
// email: johndoe@mail.com

// ------------------------------------------------------
// 7. CHECKING IF A PROPERTY EXISTS
// ------------------------------------------------------

console.log("email" in user); // true
console.log("age" in user); // false (we deleted it)

// ------------------------------------------------------
// 8. NESTED OBJECTS
// ------------------------------------------------------

const person = {
  name: "Sarah",
  address: {
    city: "Paris",
    zip: 75000,
  },
};

console.log(person.address.city); // Paris

// ------------------------------------------------------
// 9. OBJECT METHODS (BUILT-IN)
// ------------------------------------------------------

// Object.keys() → array of keys
console.log(Object.keys(user)); // ["name", "greet", "email"]

// Object.values() → array of values
console.log(Object.values(user)); // ["Jonathan Doe", function, "johndoe@mail.com"]

// Object.entries() → array of [key, value] pairs
console.log(Object.entries(user));
// [["name", "Jonathan Doe"], ["greet", function], ["email", "johndoe@mail.com"]]

// ------------------------------------------------------
// 10. COPYING OBJECTS (IMPORTANT!)
// ------------------------------------------------------
// Objects are copied by REFERENCE, not by value.

const original = { a: 1 };
const copy = original;

copy.a = 99;

console.log(original.a); // 99 (because both variables reference the SAME object)

// To copy an object PROPERLY, use the spread operator:
const realCopy = { ...original };
realCopy.a = 123;

console.log(original.a); // 99
console.log(realCopy.a); // 123

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// Objects store data in key–value pairs.
// Access with dot notation or bracket notation.
// Add, modify, delete properties anytime.
// Use for...in to loop through keys.
// Use Object.keys / values / entries for structured access.
// Objects are copied by reference — use spread to clone.
//
// Objects are the foundation of:
// - JSON
// - APIs
// - Classes
// - React props & state
// - Almost everything in modern JavaScript
