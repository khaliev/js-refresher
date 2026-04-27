// here we'll write and explain concisely the fundamentals of JavaScript programming language, and we'll also see how to use it in the context of web development

// --- VARIABLES ---

// variables are like containers that hold data, they allow us to store and manipulate information in our programs
// in JavaScript, we can declare variables using var, let, or const keywords

var myAbc = "Hello, I'm a variable declared with var!";
let myDef = "Hi, I'm a variable declared with let!";
const myGhi = "Hey, I'm a constant variable declared with const!";

// --- FUNCTIONS ---

// REGULAR function syntax, also known as function declaration, this is the most common way to define a function in JavaScript
// the idea here is that you define a function with a name, and then you can call that function by its name to execute the code inside it when you'll need it

function createGreeting(userName, message) {
  // console.log(userName + ", " + message);
  return userName + ", " + message;
}

// the return statement is used to specify the value that a function should output when it's called, it allows us to get a result from the function and use it elsewhere in our code, instead of just performing an action without giving us any output

// ARROW FUNCTION syntax

// this is a more concise way to write functions, especially for simple operations or when using functions as callbacks
// arrow functions are anonymous, they don't have their own name, so you usually assign them to a variable if you want to reuse them

const greetArrow = () => {
  console.log("Hello from arrow function!");
};

// now let's see how we can use these concepts in the context of web development, we'll see how to manipulate the DOM (Document Object Model) to create interactive web pages, and how to use events to respond to user actions.
// we'll also see how to use APIs (Application Programming Interfaces) to fetch data from external sources and display it on our web pages, and how to use libraries and frameworks to simplify our development process and create more complex applications.

// let's start by manipulating the DOM, the DOM is a programming interface for web documents, it represents the structure of a web page as a tree of objects, and it allows us to access and modify the content and structure of a web page using JavaScript.
// to manipulate the DOM, we can use various methods provided by the document object, such as getElementById, querySelector, createElement, appendChild, etc.
// for example, we can create a new element and add it to the page like this:
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph added to the page!";
document.body.appendChild(newElement);

// in this example, we created a new paragraph element, set its text content, and then appended it to the body of the document, which will make it appear on the web page.

// we can also add event listeners to elements to respond to user actions, for example, we can add a click event listener to a button like this:
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  alert("Button was clicked!");
});

// in this example, we selected a button element by its ID, and then we added a click event listener that will show an alert message when the button is clicked.

// finally, we can use APIs to fetch data from external sources and display it on our web pages, for example, we can use the Fetch API to get data from a public API like this:
fetch("https://api.example.com/data")
  // the fetch function is used to make a network request to the specified URL, it returns a promise that resolves to the response of the request
  // in this example, we are making a GET request to the URL "https://api.example.com/data" to fetch some data from that API
  // you can replace this URL with any public API that you want to use, just make sure to check the API documentation for the correct endpoint and parameters to use
  // for example, if you want to use the OpenWeatherMap API to get weather data, you would use a URL like "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY_HERE"
  // in this case, you would also need to include your API key in the URL, which you can get by signing up for an account on the OpenWeatherMap website and creating an API key in your account settings
  // once you have the correct URL and API key, you can use the fetch function to get the data and then process it as needed
  // the fetch function returns a promise, so we can use the then() method to handle the response when it arrives, and we can also use the catch() method to handle any errors that might occur during the fetch operation
  // for example, we can process the response as JSON and then log the data to the console like this:
  .then((response) => response.json())
  // the first then() method processes the response and converts it to JSON format, which is a common data format used in APIs
  .then((data) => {
    // the second then() method receives the processed data and allows us to work with it, in this case, we are just logging it to the console to see what we got from the API
    console.log(data);
    // here you can manipulate the data and display it on the page
  })
  // the catch() method is used to handle any errors that might occur during the fetch operation, such as network issues, invalid URLs, or problems with the API itself
  .catch((error) => {
    // if an error occurs, we log it to the console so we can see what went wrong and debug it
    console.error("Error fetching data:", error);
  });

// in this example, we used the fetch function to make a GET request to a public API, then we processed the response as JSON, and finally we logged the data to the console. We also included error handling to catch any issues that might occur during the fetch operation.
