// ======================================================
// ==================== OBJECT METHODS ===================
// ======================================================

// JavaScript provides several built‑in methods for working with objects.
// These methods help you inspect, extract, transform, and clone objects.

// The most commonly used object methods are:
// 1) Object.keys()
// 2) Object.values()
// 3) Object.entries()
// 4) Object.assign()
// 5) Spread operator (...)
// 6) Object.freeze() / Object.seal() (optional but useful)

// ------------------------------------------------------
// SAMPLE OBJECT FOR DEMONSTRATION
// ------------------------------------------------------

const user = {
  name: "John Doe",
  age: 30,
  email: "john@mail.com",
};

// ------------------------------------------------------
// 1. Object.keys()
// ------------------------------------------------------
// Returns an ARRAY containing all the KEYS of the object.

const keys = Object.keys(user);
console.log(keys);
// ["name", "age", "email"]

// Useful for looping:
keys.forEach((key) => {
  console.log(`Key: ${key}`);
}); // Output: Key: name
//         Key: age
//         Key: email

// ------------------------------------------------------
// 2. Object.values()
// ------------------------------------------------------
// Returns an ARRAY containing all the VALUES of the object.

const values = Object.values(user);
console.log(values);
// ["John Doe", 30, "john@mail.com"]

// Useful for processing values:
values.forEach((value) => {
  console.log(`Value: ${value}`);
});

// ------------------------------------------------------
// 3. Object.entries()
// ------------------------------------------------------
// Returns an ARRAY of [key, value] PAIRS.

const entries = Object.entries(user);
console.log(entries);
// [
//   ["name", "John Doe"],
//   ["age", 30],
//   ["email", "john@mail.com"]
// ]

// Useful for looping through both keys and values:
for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
} // Output: name: John Doe
//         age: 30
//         email: john@mail.com

// ------------------------------------------------------
// 4. Object.assign() — COPYING / MERGING OBJECTS
// ------------------------------------------------------
// Object.assign(target, source) copies properties from one object to another.

const target = { a: 1 };
const source = { b: 2 };

Object.assign(target, source);
console.log(target);
// { a: 1, b: 2 }

// You can also clone an object:
const clonedUser = Object.assign({}, user);
console.log(clonedUser); // { name: "John Doe", age: 30, email: "john@mail.com" }

// ------------------------------------------------------
// 5. SPREAD OPERATOR (...) — MODERN WAY TO COPY OBJECTS
// ------------------------------------------------------
// Spread is cleaner and more commonly used than Object.assign().

const userCopy = { ...user };
console.log(userCopy); // { name: "John Doe", age: 30, email: "john@mail.com" }

// Spread can also merge objects:
const extraInfo = { country: "France" };
const mergedUser = { ...user, ...extraInfo };

console.log(mergedUser);
// { name: "John Doe", age: 30, email: "john@mail.com", country: "France" }

// ------------------------------------------------------
// 6. Object.freeze() — MAKES OBJECT IMMUTABLE
// ------------------------------------------------------
// Prevents adding, removing, or modifying properties.

const frozenUser = Object.freeze({ name: "Frozen", age: 99 });

// ❌ These will NOT work:
// frozenUser.age = 100;
// frozenUser.email = "new@mail.com";
// delete frozenUser.name;

console.log(frozenUser); // unchanged

// ------------------------------------------------------
// 7. Object.seal() — PREVENTS ADDING/DELETING PROPERTIES
// ------------------------------------------------------
// But allows modifying existing ones.

const sealedUser = Object.seal({ name: "Sealed", age: 50 });

// ✔ Allowed:
sealedUser.age = 51;

// ❌ Not allowed:
// sealedUser.email = "nope";
// delete sealedUser.name;

console.log(sealedUser);

// ------------------------------------------------------
// 8. CHECKING IF A PROPERTY EXISTS
// ------------------------------------------------------

console.log("name" in user); // true
console.log("address" in user); // false

// OR using hasOwnProperty():
console.log(user.hasOwnProperty("email")); // true

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// Object.keys()     → array of keys
// Object.values()   → array of values
// Object.entries()  → array of [key, value] pairs
// Object.assign()   → copy/merge objects (older method)
// Spread operator   → modern copy/merge syntax
// Object.freeze()   → object becomes fully immutable
// Object.seal()     → cannot add/remove properties
// "in" operator     → check if a key exists
// hasOwnProperty()  → check if key belongs to the object itself

// These methods are essential for:
// - looping through objects
// - cloning objects
// - merging data
// - validating object structure
// - protecting objects from modification
