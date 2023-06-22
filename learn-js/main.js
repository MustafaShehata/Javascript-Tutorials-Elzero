// // Wait The Window To Load
// window.onload = function () {
//   // Single Line Comment
//   document.querySelector("h1").style.color = "Blue"; // Single Line commet
// };

// ---- Lesson 6 ----

// Single Line Comment
// Single Line Comment
// Single Line Comment

/*
  Multiple
  line 
  Comment
 */

/*
  1
  2
  3
  4
  5
*/

// Ctrl + / - to comment and uncommet code

// ---- Lesson 7 ----

/*
  Output To Screen
  - Window.alert()
  - document.write()
  - console.log()

  Syntax
*/

// window.alert("Hello From JS File"); // Bad Practice To Use

// document.write("<h1>Hello <span>Page</span></h1>");

// document.createElement(""); // DOM - Document Object Model

// console.log("Hello From Js File"); // print out the string in console

// ---- Lesson 8 ----

/*
  Console Methods
  - log
  - Error
  - table

  Web API

  Styling Console
  - Directive %c
*/

// console.log("Log"); // Logging An Message In The "console"

// console.error("Error"); // Show an Error For this Line In The "console"

// console.table(["Osama", "Ahmed", "Sayed"]);

// console.log(
//   "Hello From %cJs %cFile",
//   "color: red; font-size: 40px",
//   "color: blue; font-size: 40px"
// ); // Styling "Js File" red and font-size: 40px for first word "%cJs" and blue color and font 40px for "%cFile"

// ---- Lesson 9 ----

/*
  ES6
*/

// var myName = "Osama";

// console.log("Hello, " + myName);
// console.log(`Hello, ${myName}`);

// ---- Lesson 10 - DataTypes and typeof Operator ----s

/*
  Data Types Intro
  - String
  - Number
  - Number (Decimal)
  - Array => Object
  - Object
  - Boolean (true or false)
*/

// console.log('Osama Mohamed');
// console.log("Osama Mohamed");
// console.log(typeof "Osama Mohamed");
// console.log(typeof("Osama Mohamed"));
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10, 15, 17]);
// console.log(typeof ["Os", "Ah", "Sa"]);
// console.log(typeof {name: 'Osama', age: 17, country: "Eg"});
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);


// ---- Lesson 11 - Variables Introduction ---- 

/*
  Variables Intro
  - What is Variable ? 
  - Why We Use Variables ? 
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables in The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed - Search for 
*/

// var user = "Sayed", age = 37;

// console.log(user);
// console.log(age);
// console.log(hello);

// hello.innerHTML = "Option";

// ---- Lesson 12 - Identifiers Name Convetions And Rules ---- 

/*
  Identifiers
  - Name Conventions And Rules
  - Reserved Words
*/


// var _us_1er_1 = "Sayed"; // Valid Identifiers
// var $us$1er$1 = "Sayed"; // Valid Name
// var $us$1er$1 = "Sayed"; // Valid
// var user = "Osama"; // Identifier is Case Sensitive user - User - USER - uSer - usEr - is different
// var User = "Muhammed"; // Identifier is Case Sensitive
// var userName = "Sayed"; // camelCase is used in JS 

// console.log(user);
// console.log(User);
// console.log(userName);

// ---- Lesson 13 - var, let, cost Compare  ----

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Function Scope


  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Function Scope
  
  
  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Function Scope  
*/

/*
var a = 1; // Declare and Initialization
console.log(a); // 1
var a = 2; // Redeclare and Reinitialization
console.log(a); // 2


let b = 1; // Declare and Initialization
console.log(b); // 1
// let a = 2; // Redeclare and Reinitialization - Error - Identifier 'a' has already been declared 
// console.log(a); // 2


const c = 1; // Declare and Initialization
console.log(c); // 1
// const a = 2; // Redeclare and Reinitialization - Identifier 'a' has already been declared 
// console.log(a); // 2
*/

// We can't declare the same name of an variable "Identifier"


// Access Before Declare A Variable -- With Var Not Given An Error
// console.log(a);
// var a = 1;

// Access Before Declare A Variable -- With Let Gives An Error
// console.log(a);
// let a = 1;

// Access Before Declare A Variable -- With Const Gives An Error
// console.log(a);
// const a = 1;


// Variable Scope Drama

// var aabb = 1; // It adds to Window Object

// let aabb = 1; // It doesn't add To Window Object // Global Scope

// Search For "javaScript Scope Drama"



// ---- Lesson 14 - String Syntax And Character Escape Sequence  ----


/*
  String Syntax + Character Escape Sequences - Searching for Character Escape Sequences
  Escape => Ignore
  \ Escape + Line Continue - Next Line Continue
  \n New Line put the cursor on The Next Line
  \b	Backspace
  \f	Form Feed
  \n	New Line
  \r	Carriage Return
  \t	Horizontal Tabulator
  \v	Vertical Tabulator
  \'	Single quote
  \"	Double quote
  \\	Backslash
*/

// console.log('Elzero Web "School"'); // You can put "" inside a '' single quote It's Normal
// console.log("Elzero Web 'School'"); // You can put '' inside a "" double quote It's Normal 
// console.log("Elzero Web \"School\""); // Elzero Web "School"
// console.log('Elzero Web \'School\''); // Elzero Web 'School'
// console.log("Elzero \\ Web 'School'");
// console.log("Elzero\
// Web\
// School"); // ElzeroWebSchool
// console.log("Elzero \
// Web \
// School"); // Elzero Web School
// console.log("Elzero\nWeb\nSchool");


// ---- Lesson 15 - Concatenation  ----

/*
  Concatenation
*/

// let a = "We Love";
// let b = "JavaScript";
// let c = " "; // Space between a and b

// document.write(a + b);
// document.write(a + c + b);
// document.write(a + " " + b);
// console.log(a, b);

// ---- Lesson 16 - Template Literals Template Strings  ----

/*
  Template Literals (Template Strings)
*/

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(a + " " + b + " " + c + " " + d);
// console.log(a + " " + b + 
// "\n" + c + " " + d);


// console.log(a + " \"\" " + b + 
// "\n" + c + " " + d);


// Using Backtick and Searching for it to learn more Information
// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);

// console.log(`${a} "" '' \\ ${100 * 50}
// ${c} ${d}`);

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markUp = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markUp);


// ---- Lesson 17 - Variable And Concatenation Challenge ----

// camelCasing
// let articleTitle = "Elzero", articleDesc = "Elzero Web School", articleDate="25/10";

// let article = `
//   <div class="card">
//     <h3>Hello ${articleTitle}</h3>
//     <p>${articleDesc}</p>
//     <span>${articleDate}</span>
//   </div>
// `;
// document.write(article.repeat(4));


// Variable Challenge - Another Solution
// let pagTitle = "Elzero", pagDescription = "Elzero Web School", pagDate="25/10";
// let card=`<div>
// <h3>Hello ${pagTitle}</h3>
// <p>${pagDescription}</p>
// <span>${pagDate}</span>
// </div>`;
// document.write(card.repeat(4));



// // Create three variables in one statement using object destructuring
// let {titleContent, descriptionContent, dateContent} = {
//   titleContent: 'Elzero',
//   descriptionContent: 'Elzero Web School',
//   dateContent: '25/10'
// };

// // Create a template literal for the markup of the card
// let markup = `
//   <div class="card">
//     <h3 class="title">${titleContent}</h3>
//     <p class="description">${descriptionContent}</p>
//     <span class="date">${dateContent}</span>
//   </div>
// `;

// // Write the markup to the document four times using repeat method
// document.write(markup.repeat(4));

// ---- Lesson 18 -  ----