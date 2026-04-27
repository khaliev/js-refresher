// ======================================================
// ======================= MODULES =======================
// ======================================================

// Modules allow us to split our code into multiple files.
// This helps organize, reuse, and maintain code in larger projects.

// A module can EXPORT values (variables, functions, classes)
// and another file can IMPORT those values.

// JavaScript supports two main export types:
// 1) Named exports
// 2) Default exports

// ------------------------------------------------------
// 1. NAMED EXPORTS
// ------------------------------------------------------
// You can export multiple values from a single file.
// The names MUST match when importing.

// Example (in util.js):
// export let abc = 123;
// export let def = 456;

// Example import (in another file):
// import { abc, def } from './util.js';
// console.log(abc, def);

// ------------------------------------------------------
// 2. DEFAULT EXPORTS
// ------------------------------------------------------
// A file can have ONE default export.
// You can import it using ANY name you want.

// Example (in util.js):
// export default "YOUR_API_KEY_HERE";

// Example import (in another file):
// import apiKey from './util.js';
// console.log(apiKey); // "YOUR_API_KEY_HERE"

// ------------------------------------------------------
// 3. SUMMARY
// ------------------------------------------------------
// - VARIABLES store data.
// - FUNCTIONS perform actions and return results.
// - MODULES organize and share code across files.

// Modules help keep your project clean, modular, and maintainable.
