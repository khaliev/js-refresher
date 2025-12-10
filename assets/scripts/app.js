// 2 ways to import/export variables between files in JavaScript

// 1. you can import the default export with any name you like, but you do NEED to assign a name
// import apikKey from "./util.js";

// console.log(apiKey);

// 2. if you want to import a named export, you MUST use the same name as the exported variable
// import { apikKey } from "./util.js";

// you also import multiple named exports (as an object) in one line:
// import * as util from "./util.js";

// console.log(util);
// console.log(util.abc);
// console.log(util.def);
// console.log(util.default);

// 3. you can mix default and named imports in one line:

// import apik, { abc, def } from "./util.js";

// console.log(apik);
// console.log(abc);
// console.log(def);

// 4. you can also rename named imports using "as":
// import { abc as myAbc, def as myDef } from "./util.js";

// console.log(myAbc);
// console.log(myDef);

// FUNCTIONS regular function syntax

function greetUser(userName, message) {
  //   console.log(userName + ", " + message);
  // return "Hi, I am " + userName + ". " + message;
  // this function creates and returns a formatted greeting string, it doesn't greet the user directly
  return `${userName}, ${message}`;
}

// greetUser("Adlan", "welcome back!");
// greetUser("Sarah", "good to see you!");

// arrow function syntax
const greetArrow = () => {
  console.log("Hello from arrow function!");
};

greetArrow();

// arrow function with implicit return (no curly braces)
const add = (a, b) => a + b;

console.log(add(2, 3));

// arrow function with single parameter (no parentheses needed)
const square = (x) => x * x;

console.log(square(4));

// arrow function with no parameters (need empty parentheses)
const getRandomNumber = () => Math.random();

console.log(getRandomNumber());
