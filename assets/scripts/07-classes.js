// ======================================================
// ========================= CLASSES =====================
// ======================================================

// Classes are blueprints for creating objects.
// They define:
// - properties (data)
// - methods (behavior)
//
// Classes make it easy to create multiple objects that share
// the same structure and behavior.

// ------------------------------------------------------
// 1. CLASS DECLARATION
// ------------------------------------------------------

class User {
  // The constructor runs automatically when a new instance is created.
  // It initializes the object's properties.
  constructor(name, age) {
    this.name = name; // "this" refers to the new object being created
    this.age = age;
  }

  // Method (function inside a class)
  greet() {
    console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
  }
}

// ------------------------------------------------------
// 2. CREATING INSTANCES (OBJECTS FROM A CLASS)
// ------------------------------------------------------

const user1 = new User("Alice", 25);
// "new User(...)" creates a new object using the User class blueprint.

user1.greet();
// Output: Hi, I am Alice, and I am 25 years old.

// ------------------------------------------------------
// 3. CLASS EXPRESSION (ALTERNATIVE SYNTAX)
// ------------------------------------------------------
// You can also define a class and store it in a variable.

const Admin = class {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  greet() {
    console.log(`Hello, I am ${this.name}, and my role is ${this.role}.`);
  }
};

const admin1 = new Admin("Bob", "Administrator");
admin1.greet();
// Output: Hello, I am Bob, and my role is Administrator.

// ------------------------------------------------------
// 4. INHERITANCE (EXTENDING A CLASS)
// ------------------------------------------------------
// A class can inherit from another class using "extends".
// This allows the child class to reuse the parent class's properties and methods.

class SuperAdmin extends Admin {
  constructor(name, role, permissions) {
    // super() calls the parent class constructor
    super(name, role);
    this.permissions = permissions; // new property for SuperAdmin
  }

  showPermissions() {
    console.log(
      `SuperAdmin ${this.name} has the following permissions: ${this.permissions.join(", ")}`,
    );
  }
}

const superAdmin1 = new SuperAdmin("Charlie", "Super Administrator", [
  "manage_users",
  "edit_settings",
]);

superAdmin1.greet();
// Output: Hello, I am Charlie, and my role is Super Administrator.

superAdmin1.showPermissions();
// Output: SuperAdmin Charlie has the following permissions: manage_users, edit_settings

// ------------------------------------------------------
// 5. ADDING METHODS AFTER CLASS CREATION
// ------------------------------------------------------
// You can add methods to a class prototype manually (rarely needed).

User.prototype.sayBye = function () {
  console.log(`${this.name} says goodbye!`);
};

user1.sayBye();
// Output: Alice says goodbye!

// ------------------------------------------------------
// 6. GETTERS AND SETTERS (OPTIONAL BUT USEFUL)
// ------------------------------------------------------
// Getters allow you to access computed properties like normal properties.
// Setters allow you to validate or transform values before assigning them.

class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // underscore indicates "internal" property
  }

  get price() {
    return `$${this._price.toFixed(2)}`;
  }

  set price(value) {
    if (value < 0) {
      console.log("Price cannot be negative.");
      return;
    }
    this._price = value;
  }
}

const item = new Product("Laptop", 999);
console.log(item.price); // $999.00

item.price = -50; // invalid
item.price = 1200; // valid
console.log(item.price); // $1200.00

// ------------------------------------------------------
// SUMMARY
// ------------------------------------------------------
// class → blueprint for creating objects
// constructor → initializes object properties
// this → refers to the current instance
// new → creates a new instance of a class
// class expression → alternative way to define a class
// extends → inheritance (child class)
// super() → calls parent constructor
// getters/setters → controlled access to properties
//
// Classes are essential for:
// - object‑oriented programming
// - React components (class components)
// - organizing complex logic
// - creating reusable, structured code
