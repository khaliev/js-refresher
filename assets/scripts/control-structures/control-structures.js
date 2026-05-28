// here we'll learn about control structures, which are used to control the flow of our program

// IF ELSE statements
// Used to execute a block of code based on a condition. If the condition is true, the code inside the if block is executed; otherwise, the code inside the else block is executed.

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// SWITCH statements
// Useful when you have multiple conditions based on the same variable, making it cleaner than multiple if-else statements.

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's a regular day.");
}
