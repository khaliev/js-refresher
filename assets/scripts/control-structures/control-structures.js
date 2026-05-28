// ======================================================
// ================== CONTROL STRUCTURES =================
// ======================================================

// Control structures allow your program to make decisions
// and repeat actions based on conditions.
// They determine HOW your code flows.

// ------------------------------------------------------
// 1. IF / ELSE IF / ELSE
// ------------------------------------------------------
// Used to execute different blocks of code depending on conditions.

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// Output: "You are an adult."

// Notes:
// - Conditions are checked from top to bottom.
// - The first TRUE condition stops the chain.

// ------------------------------------------------------
// 2. SWITCH STATEMENT
// ------------------------------------------------------
// Useful when checking ONE value against MANY possible cases.
// Cleaner than multiple if/else if statements.

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
    break;
}

// Output: "It's the start of the week."

// Notes:
// - Always use "break" to prevent falling through to the next case.
// - "default" runs if no case matches.

// ------------------------------------------------------
// 3. LOOPS
// ------------------------------------------------------
// Loops repeat a block of code multiple times.

const hobbies = ["reading", "coding", "hiking"];

// ------------------------------------------------------
// 3.1 FOR LOOP (classic)
// ------------------------------------------------------
// Best when you need the index or want full control.

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

// Output:
// reading
// coding
// hiking

// ------------------------------------------------------
// 3.2 FOR...OF LOOP
// ------------------------------------------------------
// Best for looping through array VALUES directly.
// Cleaner and more readable than a classic for loop.

for (const hobby of hobbies) {
  console.log(hobby);
}

// Output:
// reading
// coding
// hiking

// ------------------------------------------------------
// 3.3 WHILE LOOP
// ------------------------------------------------------
// Runs as long as the condition is TRUE.

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

// Output:
// 0
// 1
// 2
// 3
// 4

// ------------------------------------------------------
// 3.4 DO...WHILE LOOP
// ------------------------------------------------------
// Always runs AT LEAST ONCE, even if the condition is false.

let number = 10;

do {
  console.log(number);
  number++;
} while (number < 10);

// Output:
// 10

// Explanation:
// - The code runs once BEFORE checking the condition.
// - After printing 10, number becomes 11.
// - Condition (11 < 10) is false → loop stops.

// ------------------------------------------------------
// 4. BREAK & CONTINUE (IMPORTANT)
// ------------------------------------------------------

// break → stops the loop entirely
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log("Break example:", i);
}
// Output: 0, 1, 2

// continue → skips the current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("Continue example:", i);
}
// Output: 0, 1, 3, 4

// ------------------------------------------------------
// 5. SUMMARY
// ------------------------------------------------------
// IF / ELSE → choose between multiple conditions
// SWITCH → cleaner alternative for many fixed cases
// FOR → classic loop, useful for indexes
// FOR...OF → best for looping through array values
// WHILE → loop while condition is true
// DO...WHILE → run once, then check condition
// BREAK → exit loop early
// CONTINUE → skip one iteration
//
// Control structures are essential for:
// - decision making
// - repeating tasks
// - validating input
// - building dynamic, interactive programs
