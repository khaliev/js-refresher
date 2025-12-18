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

function createGreeting(userName, message) {
  // console.log(userName + ", " + message);
  // return "Hi, I am " + userName + ". " + message;
  // this function creates and returns a formatted greeting string, it doesn't greet the user directly
  return `${userName}, ${message}`;
}

let greeting1 = createGreeting("Adlan", "welcome back!");
console.log(greeting1);

let greeting2 = createGreeting("Sarah", "good to see you!");
console.log(greeting2);

// arrow function syntax

const greetArrow = () => {
  console.log("Hello from arrow function!");
};

greetArrow();

// arrow function with implicit return (no curly braces, no return word)

const add = (a, b) => a + b;

console.log(add(2, 3));

// arrow function with single parameter (no parentheses needed)

const square = (x) => x * x;

console.log(square(4)); // 16

// arrow function with no parameters (need empty parentheses)
const getRandomNumber = () => Math.random(); //

console.log(getRandomNumber());

// anonymous function expression assigned to a variable

export default (userName, message) => {
  console.log("Hello from anonymous function!");
  return `${userName}, ${message}`;
};

// calling the anonymous function
// note: since it's a default export, you would need to import it in another file to use it

// OBJECTS

const user = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(
      // this refers to the current object (user)
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

console.log(user.name); // John Doe
console.log(user["age"]); // 30
console.log(user.greet()); // Hello, my name is John Doe and I am 30 years old.

// adding a new property
user.email = "johndoe@mail.com";
console.log(user.email); // johndoe@mail.com

// deleting a property
delete user.age;
console.log(user.age); // undefined

// looping through object properties
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// CLASSES

// class declaration

class User {
  // constructor method to initialize object properties
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greet() {
    // method to greet
    console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
  }
}

// creating an instance of the User class
const user1 = new User("Alice", 25);
user1.greet(); // Hi, I am Alice, and I am 25 years old.

// class expression is another way to define a class

const Admin = class {
  constructor(name, role) {
    // initialize object properties
    (this.name = name), (this.role = role);
  }
  greet() {
    console.log(`Hello, I am ${this.name}, and my role is ${this.role}.`);
  }
};

// creating an instance of the Admin class
const admin1 = new Admin("Bob", "Administrator");
admin1.greet(); // Hello, I am Bob, and my role is Administrator.

// inheritance example

class SuperAdmin extends Admin {
  constructor(name, role, permissions) {
    super(name, role); // call the parent class constructor
    this.permissions = permissions; // new property for SuperAdmin
  }
  showPermissions() {
    console.log(
      `SuperAdmin ${
        this.name
      } has the following permissions: ${this.permissions.join(", ")}`
    );
  }
}

const superAdmin1 = new SuperAdmin("Charlie", "Super Administrator", [
  "manage_users",
  "edit_settings",
]);
superAdmin1.greet(); // Hello, I am Charlie, and my role is Super Administrator.
superAdmin1.showPermissions(); // SuperAdmin Charlie has the following permissions: manage_users, edit_settings.

// ARRAYS

// creating an array
const hobbies = ["reading", "traveling", "coding"];

// accessing elements
console.log(hobbies[0]); // reading
console.log(hobbies.length); // 3

// adding an element
hobbies.push("gaming");
console.log(hobbies); // ["reading", "traveling", "coding", "gaming"]

// removing the last element
hobbies.pop();
console.log(hobbies); // ["reading", "traveling", "coding"]

// findIndex returns the index of the first element that matches the condition, or -1 if not found
// here, we have a shortest way to write an arrow function, it checks if the item is equal to "coding", and returns true or false
// arrow function is used as a callback for findIndex method
// since it's a single parameter, we don't need parentheses around item
// since it's a single expression, we don't need curly braces or return keyword
const index = hobbies.findIndex((item) => item === "coding"); // 2
console.log(index);

// checking if an element exists
const hasTraveling = hobbies.includes("traveling");
console.log(hasTraveling); // true

// looping through the array
hobbies.forEach((hobby, index) => {
  console.log(`${index + 1}. ${hobby}`);
});

// ARRAY METHODS

// MAPPING to a new array
const upperHobbies = hobbies.map((hobby) => hobby.toUpperCase());
console.log(upperHobbies); // ["READING", "TRAVELING", "CODING"]

// mapping to an array of objects
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

// FILTERING the array
const longHobbies = hobbies.filter((hobby) => hobby.length > 6);
console.log(longHobbies); // ["traveling", "coding"]

// REDUCING the array to a single value
const totalLength = hobbies.reduce((total, hobby) => total + hobby.length, 0);
console.log(totalLength); // total length of all hobbies strings

// FINDING an element
const codingHobby = hobbies.find((hobby) => hobby === "coding");
console.log(codingHobby); // "coding"

// ***** DESTRUCTURING *****

// *** ARRAY destructuring ***

const userNameData = ["Mike", "Gibson"];

// traditional way

// const firstName = userNameData[0];
// const lastName = userNameData[1];
// console.log(firstName); // Mike
// console.log(lastName); // Gibson

// destructuring way, more concise and readable

// const [fName, lName] = userNameData;
// console.log(fName); // Mike
// console.log(lName); // Gibson

// OR

// these variable names are up to you, you can name them whatever you like
const [firstName, lastName] = ["Mike", "Gibson"];
console.log(firstName); // Mike
console.log(lastName); // Gibson

// *** OBJECT destructuring ***

const userData = {
  name: "Emma",
  age: 28,
};

// traditional way

// const userName = userData.Name;
// const userAge = userData.Age;
// console.log(userName); // Emma
// console.log(userAge); // 28

// destructuring way

// now these variable names MUST MATCH the object property names, otherwise you'll get undefined

const { name, age } = userData;
console.log(name);
console.log(age);

// OR

// you can also destructure directly from an object literal
// and assign an alias to the key values to new variable names using colon :
const { name: uName, age: uAge } = {
  name: "Emma",
  age: 28,
};
console.log(uName); // Emma
console.log(uAge); // 28

// you can also provide default values during destructuring
const {
  name: userN = "Default Name",
  age: userA = 18,
  email: userE = "",
} = {
  name: "Emma",
  age: 28,
};
console.log(userN); // Emma
console.log(userA); // 28
console.log(userE); // "" (default value since email doesn't exist in the object)

// DESTRUCTURING in function parameters

// DESTRUCTURING in function parameters
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
displayUser(someUser); // Name: Olivia, Age: 32

// This is equivalent to the longer way below:
// function displayUser(user) {
//   const name = user.name;
//   const age = user.age;
//   console.log(`Name: ${name}, Age: ${age}`);
// }
