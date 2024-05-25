/*
  Topic: JavaScript Bootcamp 2021
  Date: 20/6/2023
  Author: Mustafa Shehata
*/

/*
  Searching For:
  - JavaScript Problem Solving Websites?

  Important Practice:
  - Each Day Try To Solve Problems In JavaScript In The Start Of Day, Is The Must Every Day
*/

// ? ---- Lesson 005 - Where To Put The Code ----

// // Wait The Window To Load
// window.onload = function () {
//   // Single Line Comment
//   document.querySelector("h1").style.color = "Blue"; // Single Line comment
// };

// Note: best practice to put your javaScript Code at the end of the body of HTML file

// ? ---- Lesson 006 - Comments And Bad Practices ----

// Single Line Comment
// Single Line Comment
// Single Line Comment

/* Single Line Inside Multiple Line Comment */

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

// Ctrl + / [Forward Slash] - To Comment And Uncommet Code

// Comment is made for prevent execution when write a code that want to make the interpreter to skip it

// ? ---- Lesson 007 - Output To Screen ----

/*
  Output To Screen
  - Window.alert()
  - document.write()
  - console.log()

  Syntax
*/

// window.alert("Hello From JS File"); // Bad Practice To Use

// document.write("<h1>Hello <span>Page</span></h1>"); // Bad Practice

// const x = document.createElement("h1"); // DOM - Document Object Model

// // Test using DOM In HTML File
// x.innerHTML = "Hi!";
// x.style.cssText = "margin: 20px auto;width: 10%";
// x.style.color = "tomato";
// x.style.backgroundColor = "black";
// document.body.appendChild(x);

// console.log("Hello From Js File"); // Logging The String In Console

// ? ---- Lesson 008 - Console Methods And Styling And WebAPI ----

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
// console.warn("Warning"); // Warning in the "console"

// console.error("Alert"); // Show an Error For this Line In The "console"

// console.table(["Osama", "Ahmed", "Sayed"]); array in table format
// console.table({ name: "Mustafa", email: "mustafa@gmail.com" }); object in table format

// console.group("group-1");
// console.group("child-1");
// console.log("child-1-1");
// console.group("grandChild-1");
// console.log("grandChild-1");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("group-2");
// console.log("group-2-e-1");
// console.groupEnd();

// /*
//   Styling "Js File" red and font-size: 40px for first word "%cJs"
//   and blue color and font 40px for "%cFile"
// */

// const styles = "background-color:white;padding:10px;color:green";
// console.log("%cHello, World!", styles);

// console.log(
//   "Hello From %cJS %cFile",
//   "color: red; font-size: 40px",
//   "color: blue; font-size: 40px"
// );

// ? ---- Lesson 009 - What is ECMAScript ----

/*
  ES6
*/

// var myName = "Osama";

// console.log("Hello, " + myName);
// console.log(`Hello, ${myName}`); // Using ES6

// * ---- Separator ----

/* Searching Topics:
  - Web API
  - JavaScript Console
  - ECMAScript
  - Scripting Language
  - Chrome Dev Tools
*/

// * ---- Separator ----

// ? ---- Lesson 010 - DataTypes and typeof Operator ----

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
// console.log(typeof 5000); // number
// console.log(typeof 5000.99); // number(Decimal)
// console.log(typeof [10, 15, 17]); // Object => Array of Numbers
// console.log(typeof ["Os", "Ah", "Sa"]); // Object => Array of Strings
// console.log(typeof {name: 'Osama', age: 17, country: "Eg"}); // Object
// console.log(typeof true); // boolean
// console.log(typeof false); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

/*
  * Searching Topics:
  - Differences between Null and Undefined
  - More Data Types: symbol and BigInt in JavaScript
*/

// ? ---- Lesson 011 - Variables Introduction ----

/*
  Variables Intro
  - What is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var - Search
  - Multiple Variables in The Same Line are Separated with comma ','
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed - "Search for them" - Interview Questions
*/

/*
  If you use a variable before defining or declaring it, it will get an undefined
*/

// console.log(user); // ReferenceError: user is not defined If You doesn't declare already.

// console.log(user);
// var user = "Mustafa";

/*
  NOTE:
  Declare A Variable First Then Use It
*/

// Normal way and correct: Declare variable and then use it
// var user = "Muhammed";
// console.log(user);

// var user = "Sayed", age = 37;

// console.log(user);
// console.log(age);
// console.log(hello); // A Global Id Called "hello" In HTML File

// hello.innerHTML = "Option"; // Edit Id in HTML File That id = "hello"

/* Notes
  If You Created an Id in HTML File,
  It Will Make This Id As A Global Variable,
  And You Can Access It In JavaScript file as A Global Varialbe
*/

// ? ---- Lesson 012 - Identifiers Name Conventions And Rules ----

/*
  Identifiers
  - Name Conventions And Rules
  - Reserved Words - searching for Identifiers And Name Conventions [camalCase]
*/

/*
  Naming Conversions:
  - Only letters, numbers, underscores, and dollar signs
  - Can't start with a number
*/

/*
  Multi-Word Formatting
  - firstName = camelCase
  - first_name = underscore
  - FirstName = PascalCase
  - firstname = lowercase
*/

// var __userName__ = "MUstafa"; // Valid Identifier

// var _us_1er_1 = "Sayed"; // Valid Identifiers
// var $us$1er$1 = "Sayed"; // Valid Name
// var $us$1er$1 = "Sayed"; // Valid Name
// var user = "Osama"; // Identifier is Case Sensitive user - User - USER - uSer - usEr - is different
// var User = "Muhammed"; // Identifier is Case Sensitive
// var userName = "Sayed"; // camelCase is used in JS

// console.log(user); // javascript is case sensitive
// console.log(User); // case sensitive => lowerCase and UpperCase is distinct
// console.log(userName); // Identifier Name is Used in "camalCase"

// ? ---- Lesson 013 - Var, Let, Const Compare  ----

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] () -- Search for it
  - Block Or Function Scope

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama [Not Added To Window] ()
  - Block Or Function Scope

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama (Not Added To Window)
  - Block Or Function Scope
*/

// var a = 2;
// var a = 2;
// console.log(a); // doesn't get an Error

/*
var a = 1; // Declare and Initialization
console.log(a); // 1
var a = 2; // Redeclare and Assignment
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

// We can't declare the same name of a variable "Identifier"

// Access Before Declare A Variable -- With Var Not Given An Error but it will be Undefined
// console.log(a); // Undefined
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

// Search For "javaScript Scope Drama" Important

// ? ---- Lesson 014 - String Syntax And Character Escape Sequence  ----

/*
  String Syntax + Character Escape Sequences - Searching for "Character Escape Sequences"
  Escape => Ignore
  \   Escape + Line Continue - Next Line Continue
  \n  New Line put the cursor on The Next Line
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

// ? ---- Lesson 015 - Concatenation  ----

/*
  Concatenation
*/

// let a = "We Love";
// let b = "JavaScript";
// let c = " "; // Space between a and b

// document.write(a + b);
// document.write(a + c + b);
// document.write(a + " " + b);
// console.log(a, b); // seperate between a and b by a space

// ? ---- Lesson 016 - Template Literals Template Strings  ----

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
// console.log(a + " " + b + "\n" + c + " " + d);

// console.log(`${a} ${b} ${c} ${d}`);

// console.log(`${a} ${b}
// ${c} ${d}`);

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

// ? ---- Lesson 017 - Variable And Concatenation Challenge ----

// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

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

// // Create three variables in one statement using object destructuring - "Advanced Lesson"
// let {titleContent, descriptionContent, dateContent} = {
//   titleContent: 'Elzero',
//   descriptionContent: 'Elzero Web School',
//   dateContent: '25/10'
// };

// // Create a template literal for the markup of the card
// let markUp = `
//   <div class="card">
//     <h3 class="title">${titleContent}</h3>
//     <p class="description">${descriptionContent}</p>
//     <span class="date">${dateContent}</span>
//   </div>
// `;

// // Write the markup to the document four times using repeat method
// document.write(markUp.repeat(4));

/*
  Searching Topics:
  - Loosely Typed Language
  - Strongly Typed Language
  - Character Escape Sequences
*/

// ? ---- Lesson 018 - Arithmetic Operators ----

/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

// console.log(10 + 20); // 30
// console.log(10 + "Osama"); // 10Osama

// console.log(10 - 20); // -10
// console.log(10 - "Osama"); // NaN
// console.log(typeof(NaN)); // Number

// console.log(10 * 20); // 200
// console.log(10 * -20); // -200

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 / 2); // 5
// console.log(11 % 2); // Remove 1

// console.log(35 / 2); // 17.5
// console.log(35 % 2); // Remove 1

// * Search for Remainder or Modulus (Division Remainder)

// ? ---- Lesson 019 - Unary Plus And Negation Operators ----

/*
  - "+" Unary Plus [Return Number If Its Not Number]
  - "-" Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

// // Unary - Plus Operator/Positive
// console.log(+100); // 100
// console.log(+"100"); // 100
// console.log(+"-100"); // -100
// console.log(+"Osama"); // NaN => Remember That NaN Is Type Of Number
// console.log(+"15.5"); // 15.5
// console.log(+0xff); // 255 in Hexadecimal Numeral System
// console.log(+null); // 0
// console.log(+false); // 0
// console.log(+true); // 1

// // Unary - Minus Operator/Negation
// console.log(-100); // -100
// console.log(-"100"); // -100
// console.log(-"-100"); // 100
// console.log(-"Osama"); // NaN
// console.log(-"15.5"); // -15.5
// console.log(-0xff); // -255 in Hexadecimal Numeral System
// console.log(-null); // -0
// console.log(-false); // -0
// console.log(-true); // -1

// console.log(Number("100")); // Convert a String into a number

// ? ---- Lesson 020 - Type Coercion ----

/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

/* let a = "10";
let b = 20;
let c = true;

console.log(a + b); // 1020 - Concatenation
console.log(+a + b); // 10 + 20 = 30 - Addition As Numbers
console.log(Number(a) + b); // 30 = Convert a by using Constructor Number() To Convert It Into a Number
console.log(a - b); // -10 => a Is A String And The Interpreter Convert It Into A Number
console.log(b - a); // 10 => as same as above
console.log("" - 2); // -2
console.log(0 - 2); // -2
console.log(+""); // 0
console.log(false - true); // -1
console.log(0 - 1); // -1
console.log(+false - +true); // -1
console.log(b + c); // 21
console.log(a + b + c); // 10 + 20 + true => string => 1020true
console.log(+a + b + c); // +"10" + 20 + true = 10 + 20 + 1 = 31 */

// ? ---- Lesson 021 - Assignment Operators ----

/*
  Assignment Operators && Augmanted Assignment Operator
*/

//  let a = 10;

// a = 20;
// console.log(a); // 20

// a = 10; // reinitialize
// a = a + 20; // (new-a) = 10 (old-a) + 20
// console.log(a); // 30

// a = a + 70; // a += 70 -- The Same as In Line 579
// console.log(a); // 100

// a += 100;
// console.log(a); // 200

// a -= 50; // a = a - 50
// console.log(a); // 150

// a /= 50; // a = a / 50
// console.log(a); // 3

// ? ---- Lesson 022 - Operators Challenges ----

/*
  Challenge 1
*/

// let a = 10;
// let b = "20";
// let c = 80;

// console.log( ++a + +b++ + +c++ - +a++ );
// console.log( ++a + -b + +c++ - -a++ + +a );
// console.log( --c + +b + --a * +b++ - +b * a + --a - +true );

/*
  [++a] [+] +[]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// Only Use Variable Value
// Do Not Use Variable Twice

// My Solution

// console.log(-d * +e); // 2000
// console.log(-d + ++f + ++e * ++g); // 173

// codepen.io - Where You Can Write Your Solutions

// My Solution

/* Challenge 1 */
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
/*
  [++a]
      Value = 11
      Explain = pre-increment operator

  [+] = "addition operater"

  [+b++]
      Value = 20;
      Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used

  [+] = "addition operater"

  [+c++]
      Value = 80;
      Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

  [-] = subtraction operater

  [+a++]
      Value = 11;
      Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used


  so, the total value = 11 + 20 + 80 - 11 = 100

*/

// a = 12    b = 21    c = 81
// console.log(++a + -b + +c++ + a++ + +a);
/*
  [++a]
      Value = 13
      Explain = pre-increment increase the value of a by 1 to be 13

  [+] = addition operator

  [-b]
      Value = -21
      Explain = Unary negation operator convent the data type from string to number with different sign

  [+] = addition operator

  [+c++]
      Value = 81;
      Explain = Unary plus operator has not effect because the date type already number, then post-increment increase the value by 1 to be 82 but not used

  [-] = subtraction operator

  [-a++]
      Value = -13
      Explain = post-increment increase the value by 1 to be 14 but not used

  [+] = addition operator

  [+a]
      Value = 14
      Explain = Unary plus operator has not effect because the date type already number


  so, the total value = 13 -21 + 81 - -13 + 14 = 100

*/

// a = 14    b = 21     c = 82
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c]
      Value = 81
      Explain = pre-decrement decrease the value by 1 to be 81

  [+] = addition operator

  [+b]
      Value = 21
      Explain = Unary plus operator has no effect because the date type is already number

  [+] = addition operator

  [--a]
      Value = 13
      Explain = pre decrement decrease the value by 1 to be 13

  [*] = multiplication operator

  [+b++]
      Value = 21
      Explain = Unary plus operator has no effect because the date type is already number, then post increment increase the value by 1 to be 22

  [-] = subtraction operator

  [+b]
      Value = 22
      Explain = Unary plus operator has no effect effect

  [*] = multiplication operator

  [a]
      Value = 13
      Explain = from the previous a

  [+] = Addition operator

  [--a]
      Value = 12
      Explain = Pre-decrement decrease the value by 1 to be 12

  [-] = subtraction operator

  [+true]
      Value = 1
      Explain = unary plus Operator change the date type from boolean to be number

      so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/

/* Challenge 2 */
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); //2000
// console.log(++e * ++g + -d + ++f); // 173

/*
  Searching Topics:
  - JavaScript Defer Attribute
  - JavaScript Constructor
  - JavaScript Unary Use Cases
*/

// ? ---- Lesson 023 - Number ----

/*
  Number
  - Double Precision - Searching - Always Search
  - Syntactic Sugar "_" - To ease reading
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.000000);
// console.log(1000000.0);

// console.log(Number("100"));
// console.log(typeof Number); // Function
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MAX_VALUE + 23434343434); // 1.7976931348623157e+308

// ? ---- Lesson 024 - Number Methods ----

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed(number)
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

// console.log((100).toString());
// console.log(100..toString());
// console.log(100.0.toString());
// console.log(100.1.toString());
// console.log(100.10.toString());

// console.log(100.555555.toFixed(2));
// console.log(100.557555.toFixed(2));
// console.log(100.554555.toFixed(2));

// console.log(parseInt("100"));
// console.log(+"100");
// console.log(Number("100"));
// console.log(+"Osama 100"); // NaN
// console.log(Number("Osama 100")); // NaN
// console.log(parseInt("100 Osama")); // 100 as a Number - "parseInt" is the best choice to convert string to a number
// console.log(parseInt("Osama 100")); // NaN
// console.log(parseInt("Osama 100 Osama")); // NaN

// console.log(parseFloat("100 Osama")); // 100
// console.log(parseFloat("100.500 Osama")); // 100.5
// console.log(parseInt("100.500 Osama")); // 100 without rounding off the Number as 1.5 => 1 not 2
// console.log(parseInt("1.5")); // 1 not 2

// console.log(Number.isInteger("100")); // false ? Is he will convert string to a number then check isInteger() or Not? An: he will check only if he an integer or not
// console.log(Number.isInteger(100.500)); // false
// console.log(Number.isInteger(100)); // true

// console.log(Number.isNaN("Osama")); // false
// console.log(Number.isNaN(1)); // false
// console.log(Number.isNaN("Osama"/20)); // true

// ? ---- Lesson 025 - Math Object ----

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [ES6]
*/

// console.log(Math.round(99.2)); // 99
// console.log(Math.round(99.5)); // 100
// console.log(Math.round(-99.9)); // -100
// console.log(Math.round(-99.3)); // -99

// console.log(Math.ceil(99.2)); // 100
// console.log(Math.ceil(-99.9)); // -99
// console.log(Math.ceil(-99.2)); // -99

// console.log(Math.floor(-99.2)); // -100
// console.log(Math.floor(-99.9)); // -100
// console.log(Math.floor(99.9)); // 99

// console.log(Math.min(10, 20, 100, -100, 90)); // -100 - minimum value
// console.log(Math.max(10, 20, 100, -100, 90)); // 100 - mazimum value

// // Math.pow(base, powerOFbase)
// console.log(Math.pow(2, 4)); // 16

/*
  Math.random():
  This function returns a floating-point number between 0 and 1 (exclusive),
  which means it generates a random decimal value greater than or equal to 0
  and less than 1. 0 >= num < 1
*/

/*
  Math.random() * 10: Multiplying the random number generated by 10
  gives us a random decimal value between 0 and 10 (exclusive).
  This means the result can be any decimal number greater than or equal to 0
  and less than 10. 0>= num < 10 exclusive for all decimal numbers
*/

/*
  0 >= num < 9 for only Integer numbers
*/

/*
  parseInt(Math.random() * 10) + 6: Adding 6 to the result obtained in step 3
  shifts the range of possible values. Now we have an integer between 6 and 15 (inclusive)
  because the smallest value the previous expression can produce is 6 (0 + 6),
  and the largest value is 15 (9 + 6).
*/

/*
  To summarize, the code generates a random integer between 6 and 15 and
  displays it in the console.
*/

// console.log(parseInt(Math.random()*10) + 6); // 6 -> 15

// truncate = cutting
// console.log(Math.trunc(99.5)); // 99

// * Note: search for "floor and trunc" -- your Task "24-6-2023"

// ? ---- Lesson 026 - Number Challenge ----

/*
  Number Challenge
*/

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.round(Math.min(a, b, c, d))); // 2
// console.log(Math.trunc(Math.min(a, b, c, d))); // 2
// console.log(parseInt(Math.min(a, b, c, d))); // 2

// // Use Variables a + d One Time To Get The Needed Output
// console.log(a ** Math.trunc(d)); // 100^2 = 10000
// console.log(Math.pow(a, Math.trunc(d))); // 100^2 = 10000
// console.log(Math.pow(a, Math.round(d))); // 100^6 = 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));

// // Use Variables b + d To Get This Value
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2).toString()); // 66.67 => String
// console.log(Math.round(b) / Math.ceil(d)); // 67 => Number

// ? ---- Lesson 27 - String Methods Part 1 ----

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods - Searching
*/

// let theName = "Ahmed";
// let theList = [1, 2, 3, 4, 5]; // Array

// // * Search for difference between Index[] and CharAt()
// console.log(theName); // Ahmed
// console.log(theName[1]); // h
// console.log(theName[5]); // undefined

// console.log(theName.charAt(1)); // h
// console.log(theName.charAt(5)); // null or empty

// console.log(theName.toUpperCase()); // Capital Letters "AHMED"
// console.log(theName.toLowerCase()); // Small Letter "ahmed"

// // Use length without ()
// console.log(theName.length); // 5 count form 1 to last element [length-1]

// let theName2 = "  Ahmed  ";

// console.log(theName2[1]);
// console.log(theName2[5]); // e

// console.log(theName2.length); // 9

// console.log(theName2.trim()); // Remove the leading and trailing white spaces "Ahmed"

// // Task Trim() theName2 Without White Spaces and Convert alphabet "m" to CAPITAL "M"

// console.log(theName2.trim()[2].toUpperCase()); // M
// console.log(theName2.trim().toUpperCase()[2]); // M
// console.log(theName2.trim().charAt(2).toUpperCase()); // M

// console.log(theName2.replace("m", "M").trim()); // ahMed -- review it

// ? ---- Lesson 028 - String Methods Part 2 ----

/*
  * String Methods - Searching
  - indexOf(value [Mand], Start [Opt] Length)
  - lastIndexOf(value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// // while you don't specify the index the should start search from it will search
// // from index "zero"
// console.log(a.indexOf("Web")); // 7
// console.log(a.indexOf("Web", 8)); // -1 (Not Found)

// console.log(a.lastIndexOf("Web")); // 7

// console.log(a.lastIndexOf("o")); // 15
// console.log(a.indexOf("o")); // 5

// console.log(a.slice(0)); // "Elzero Web School" - (Start = 0, end not specified so it will be the end)
// console.log(a.slice(11)); // Take (Start, to the last element if you don't write it) // "School"
// console.log(a.slice(2, 7)); // Take (Start, End But It Is Not Included) // "zero "
// console.log(a.slice(2, 8)); // "zero w"
// console.log(a.slice(2, 6)); // "zero"

// console.log(a.slice(-6)); // "School"
// console.log(a.slice(-1)); // "l"
// console.log(a.slice(-5, -3)); // "ch" [Not included the end]
// console.log(a.slice(-13, -7)); // start = "r" index: -13, end = " " index: -7 but it is not included so it takes "b"

// console.log(a.repeat(3));

// console.log(a.split()); // ["Elzero Web School"]
// console.log(a.split("")); // ["E", "l", "z", "e", "r", "o", " ", "W", "e", "b", " ", "S", "c", "h", "o", "o", "l"]
// console.log(a.split(" ")); // ["Elzero", "Web", "School"]
// console.log(a.split(" ", 2)); // ["Elzero", "Web"]
// console.log(a.split("", 6)); // ["E", "l", "z", "e", "r", "o"]

// let b = "Elzero|Web|School";

// console.log(b.split("|")); // ["Elzero", "Web", "School"]

// ? ---- Lesson 029 - String Methods Part 3 ----

/*
  String Methods
  - Substring(Start [Mand], End [Opt] Not Including End)
  --- [Start > End] Will Swap Arguments [End, Start] instead of [Start, End]
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - Substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], length [Opt] Default Full Length) [ES6]
*/

// let a = "Elzero Web School"; // length = 17 starts from 1

// console.log(a.length);

// console.log(a.substring(2)); // Starts form index 0 so 2 - a.length (17)
// console.log(a.substring(2, 6)); // zero
// console.log(a.substring(6, 2)); // same as 2 - 6 (Swaping)
// console.log(a.substring(-10, 6)); // Any number less than 0 will start from 0 such as -10 or -1
// console.log(a.substring(17)); // out of scope (string) will return empty string
// console.log(a.substring(a.length)); // 17
// console.log(a.substring(a.length - 1)); // "l"
// console.log(a.substring(a.length - 5, a.length - 3)); // "ch" 12 - 14 (end not included 14 - 1 = 13)

// console.log(a.substr(0)); // from 0 to the length of String "a"
// console.log(a.substr(0, 6)); // Elzero
// console.log(a.substr(17)); // "" empty string because 17 (Out Of Range)
// console.log(a.substr(-3)); // "ool"
// console.log(a.substr(-5, 2)); // "ch"

// Note: includes(), startsWith() and endsWith() return true or false

// console.log(a.includes("Web")); // true
// console.log(a.includes("web", 8)); // false

// console.log(a.startsWith("E")); // true
// console.log(a.startsWith("E", 2)); // false
// console.log(a.startsWith("zero", 2)); // true

// console.log(a.endsWith("o", 6)); // true - Elzer"o"
// console.log(a.endsWith("o")); // false - "a" ends with 'l'
// console.log(a.endsWith("ro", 6)); // true - Elze"ro"
// console.log(a.endsWith("l")); // true - "a" ends with l without specifing the length of the string

// ? ---- Lesson 030 - String Challenge ----

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Methods In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// // 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.split(" ", 1)); // [Elzero]

// // Use Only "substr" Method + Template Leterals In Your Solution
// console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`); // Elzero School
// console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School

// // Solution Must Be Dynamic And String May Change
// console.log(
//   a.charAt(0).toLowerCase() +
//     a.substring(1, a.length - 1).toUpperCase() +
//     a.charAt(a.length - 1).toLowerCase()
// ); // eLZERO WEB SCHOOl

// console.log(
//   a.charAt(0).toLowerCase() +
//     a.substr(1, a.length - 2).toUpperCase() +
//     a.charAt(a.length - 1).toLowerCase()
// ); // eLZERO WEB SCHOOl

/*
  Searching Topics
  - Double Precision
*/

// ? ---- Lesson 31 - Comparison Operators ----

/*
  Comparison Operator
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

// console.log(10 == "10"); // true - Compare Value Only
// console.log(-100 == "-100"); // true - Compare Value Only
// console.log(10 != "10"); // false - Compare Value Only

// TODO: === Most Used In JS (Recommended)
// console.log(10 === "10"); // false - Compare Value + Type
// console.log(10 !== "10"); // true - Compare Value + Type
// console.log(10 !== 10); // false - Compare Value + Type

// console.log(10 > 20); // true
// console.log(10 > 10); // false
// console.log(10 >= 10); // true

// console.log(10 < 20); // true
// console.log(10 < 10); // false
// console.log(10 <= 10); // true - Two Condition Must Be True

// console.log("Osama" === "Ahmed"); // false - Not the Same Value but the same Type
// console.log("Osama" == "Ahmed"); // false
// console.log("Osama" !== "Ahmed"); // true
// console.log("Osama" != "Ahmed"); // true
// console.log(typeof("Osama") === typeof("Ahmed")); // String === String - true

// ? ---- Lesson 032 - Logical Operators ----

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

// console.log(true); // true
// console.log(!true); // false

// console.log(!false); // false

// console.log(!(10 == "10")); // Guess the answer

// console.log(10 == "10" && 10 > 8); // true && true

// console.log(10 == "10" && 10 > 8 && 10 >= 10); // true && true && true = true

// console.log(10 == "10" && 10 > 8 && 10 > 50); // true && true && false = false

// console.log(10 == "10" || 10 > 80 || 10 > 50); // (true || true || false) = true - Any Condition can be true will be true

// ? ---- Lesson 033 - If Conditions ----

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }
*/

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// // let country = "KSA";
// // let country = "Syria";
// let country = "Egypt";

// if (discount === true) {
//   price -= discountAmount; // price = price - 30; => price = price - discountAmount;
// } else if (country === "Egypt") {
//   // price -= discountAmount; // price = price - discountAmount;
//   price -= 40; // price = price - discountAmount
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

// ? ---- Lesson 034 - Nested If Conditions ----

/*
  Nested If
*/

// let price = 100;
// let discount = false;
// let discountAmount = 40;
// let country = "Egypt";
// let student = true;

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Egypt") {
//   if (student === true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else {
//   price -= 10;
// }

// console.log(price);

// ? ---- Lesson 035 - Conditional Ternary Operator ----

/*
  Conditional (Ternary) Operator
*/

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// // Condition ? If True : If False

// // theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
// console.log(`Hello ${result} ${theName}`);

// theAge < 20
//   ? console.log("less Than 20")
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Greater Than 60")
//   : console.log("Unknown");

// ? ---- Lesson 036 - Nullish Coalescing Operator And Logical Or ----
// * Try To Search For This Lesson Again

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value

  falsy values
    1-false
    2-null
    3-undefined
    4-"" (empty string)
    5-0
    6-NaN

  all other values including all objects are truthy
    "0"  "false "

  Nullish Coalescing Operator [??]
  -- [Null + Undefined] Skipped like [|| - or]
  -- [0, "", false, NaN] Not Skipped and get This Value
*/

// let price1 = "";
// console.log(`The Price Is ${price1}`); // Price Is Undefined

// // let price2 = undefined;
// let price2;
// console.log(`The Price Is ${price2}`);

// let price3 = null;
// console.log(`The Price Is ${price3 || 200}`);

// let price4 = "";
// console.log(`The Price Is ${price4 || 200}`); // 200

// let price5 = 0;
// console.log(`The Price Is ${price5 || 200}`); // 200

// let price6 = undefined;
// console.log(`The Price Is ${price6 || 200}`); // 200

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

/*
 * falsy values => 0, "", false, NaN - nullish coalescing operator ?? will return the first truthy value
 * null and undefined will return after nullish coalescing operator ??
*/

// Nullish Coalescing Operator
// let price = null;
// console.log(`The Price Is ${price ?? 200}`); // 200
// price = undefined;
// console.log(`The Price Is ${price ?? 200}`); // 200
// price = NaN;
// console.log(`The Price Is ${price ?? 200}`); // NaN
// price = ""; // Falsy Value
// console.log(`The Price Is ${price ?? 200}`); // empty ""
// price = 0; // Falsy Value
// console.log(`The Price Is ${price ?? 200}`); // 0
// price = false;
// console.log(`The Price Is ${price ?? 200}`); // false

// Logical And &&
// let p = 10;
// console.log(`${p && 'Good'}`); // Good
// p = 0;
// console.log(`${p && "Good"}`); // 0

// function getUserDefinedSettings() {
//   return {
//     difficulty: "easy",
//     startingCash: 0
//   }
// }

// const cashTest = getUserDefinedSettings().startingCash || 500;
// console.log(cashTest);
// // const cash = getUserDefinedSettings().startingCash === undefined ? 500 : getUserDefinedSettings().startingCash;
// // const cash = getUserDefinedSettings().startingCash === null ? 500 : getUserDefinedSettings().startingCash;
// const cash = getUserDefinedSettings().startingCash ?? 500;

// console.log(cash);


// ? ---- Lesson 037 - If Condition Challenge ----

/*
  If Challenge
*/

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// // Write With Ternary If Syntax

// // MySolution
// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

// let st = "Elzero Web School";
// console.log(st.length); // 17

// if ( st.repeat(2).length.toFixed() === "34" ) {
//   console.log("Good");
// }

// console.log(st.repeat(2).length.toFixed(2)); // 34.00

// if ( (st.length * 2).toString() === "34" ) {
//   console.log("Good");
// }

// // // W Position May Change - Dynamic Position
// if (st.charAt(st.lastIndexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// Steps:
// console.log(st.lastIndexOf("W")); // 7
// console.log(st[st.lastIndexOf("W")]); // W
// console.log(st[st.lastIndexOf("W")].toLowerCase()); // w

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if ( typeof(st.length) !== "string") {
//   console.log("Good");
// }

// if (typeof Number(st) !== "string") {
//   console.log("Good");
// }

// if (typeof(st.length) === "number") {
//   console.log("Good");
// }

// if (st.substr(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// CodePen.io

// ? ---- Lesson 038 - Switch Statemnent ----

/*
  Switch Statement
  Switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// Note: Try to Search for differneces between
// If Condition Statement and Switch Statement

// let day = 7;

// switch (day) {
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Unknown Day");
// }

/*
  You can put Default in Any Place in Switch-case But Should write break after block of code
*/

// day = 6;

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break; // Stop the
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
// }

// ? ---- Lesson 039 - Switch And If Condition Challenge ----

/*
  Switch Challenge
*/

// let job = "Support";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// -------------------- MySolution --------------------

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     break;
//   // "IT" || "Support"
//   case "IT":
//   case "Support":
//     salary = 6000;
//     break;
//   case "Developer":
//   case "Designer":
//       salary = 7000;
//       break;
//   default:
//     salary = 4000;
// }

// console.log(salary);

/*
  If Challenge
*/

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// -------------------- MySolution --------------------

// if (holidays === 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else if (holidays === 5) {
//   console.log(`My Money is ${money}`);
// } else {
//   money = 0;
//   console.log(`My Money is ${money}`);
// }

// codepen.io

/*
  Searching Topics
  - JavaScript Logical Or
  - JavaScript Operators
*/

// ? ---- Lesson 040 - Array Big Introduction ----

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1].charAt(2)}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`${myFriends[3][1][2]}`); // i

// console.log(myFriends); // Old Array
// myFriends[1] = "Gamal";
// console.log(myFriends); // ["Ahemd", "Gamal", "Sayed", ["Marwan", "Ali"]]
// myFriends[3] = "Sameh";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(typeof myFriends); // Object - The Correct Name Is - Array

// console.log(Array.isArray(myFriends)); // true

// let str = "Osama";
// console.log(Array.isArray(str)); // false

// ? ---- Lesson 041 - Using Length With Array ----

/*
  Arrays Methods
  - Length
*/

// Index Starts From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Osama"];

// console.log(myFriends.length);

// myFriends[6] = "Gamal";
// console.log(myFriends);
// console.log(myFriends.length); // 7

// myFriends[myFriends.length] = "Gamal";
// console.log(myFriends);

// myFriends[myFriends.length - 1] = "Gamal";
// console.log(myFriends);

// myFriends[myFriends.length] = "Gamal";
// console.log(myFriends);

// myFriends.length = 3;
// myFriends.length = 2;

// console.log(myFriends); // index [0, 1]

// ? ---- Lesson 042 - Add And Remove From Array ---- [IMPORTANT]

/*
  Array Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

// ? ---- Lesson 043 - Searching Array ----

/*
  Arrays Mehtods [Search]
  - indexOf(Search Elemnet, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed")); // true - from index 0
// console.log(myFriends.includes("Ahmed", 2)); // true - from index 2

// if (myFriends.indexOf("Mustafa") === -1) {
//   console.log("Not Found");
// }

// if (myFriends.lastIndexOf("Osama") == -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

// ? ---- Lesson 44 - Sorting Arrays ----

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

// let elements = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// console.log(elements);
// console.log(elements.sort());
// // console.log(elements.sort(/*compareFn*/))
// console.log(elements.reverse());
// console.log(elements.sort().reverse()); // Chaining methods

// ? ---- Lesson 045 - Slicing Array ----

/*
  Array Methods [Slicing]
  - slice(start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array doesn't affect the original array
  - splice(start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

// console.log(myFriends);

// console.log(myFriends.slice()); // Return All Array
// console.log(myFriends.slice(1)); // Start From Index 1
// console.log(myFriends.slice(1, 3)); // Start From Index 1 and End Not Included Is 3 Means Index = 2
// console.log(myFriends.slice(-3)); // Osama , Gamal , Ameer from End Index = -3 to the length of Array
// console.log(myFriends.slice(1, -2)); // Sayed , Ali , Osama , Not Included Gamal
// console.log(myFriends.slice(-4, -1)); // Ali , Osama , Gamal
// console.log(myFriends.slice(-4, -2)); // Ali , Osama
// console.log(myFriends); // Array doesn't affect of the slice() and return the same array.

// myFriends.splice(0, 0, "Sameer", "Samara"); // Add "Sameer" and "Samara" to the Index Zero
// console.log(myFriends); // return new array
// myFriends.splice(0, 1, "Sameer", "Samara"); // Add "Sameer" and "Samara" to the Index Zero and remvoe "Ahmed"
// console.log(myFriends);
// myFriends.splice(0, 2, "Sameer", "Samara"); // Remove from index zero 2 elements from the basic array
// console.log(myFriends);
// myFriends.splice(1, 2, "Sameer", "Samara"); // Ahmed , Sameer , Samara , Osama , Gamal , Ameer
// console.log(myFriends);

// ? ---- Lesson 046 - Joining Arrays ----

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Seperator) => Return a string
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(
//   myNewFriends,
//   schoolFriends,
//   "Gameel",
//   [1, 2]
// );

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());

// ? ---- Lesson 047 - Array Challenge ----

/*
  Array Challenge
*/

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my);

// First output
// my.reverse().splice(zero, --counter);

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

// Second output */
// console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]

// Third output
// console.log(
//   (my[--counter][(--zero, counter)] = "El" + my[counter].slice(counter))
// ); // "Elzero"

// Another output
// console.log(my); // ['Osama', 'Elham', 'Mazero', 'Ahmed']
// console.log(my[zero].slice(--zero, --counter) + my[counter].substr(counter)); // Elzero

// Fourth output
// console.log(my[counter].slice(-counter, --zero) + my[counter][--my[counter].length].toUpperCase()); // "rO"

/*
  Revision Date: 19/4/2024
  name: Mustafa Ramadan
*/

// let zero = 0;
// let cnt = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.slice(zero, cnt + !zero).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"]

// console.log(my.slice(!zero, cnt).reverse()); // ["Elham", "Mazero"]

// console.log("El" + my[++zero].substring(--cnt)); // "Elzero"

// console.log(my[zero].charAt(cnt + cnt) + my[zero].charAt(my.length - zero).toUpperCase()); // "rO"

// ? ---- Lesson 048 - Loop - For And Concept Of Loop ----

/*
  [ Control Flow ]
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
  - You should use forLoop if you know the numbers of ITERATIONS you loop for
*/

// Loop iterate from 0 to 9 means 10 times
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// ? ---- Lesson 049 - Looping On Sequences ----

/*
  Loop
  - Loop On Sequence
*/

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 5, "Ali", "Amira"];
// let onlyNames = [];

// if (typeof myFriends[0] === "string") {
//   onlyNames.push(myFriends[0]);
// }
// if (typeof myFriends[1] === "string") {
//   onlyNames.push(myFriends[1]);
// }
// if (typeof myFriends[2] === "string") {
//   onlyNames.push(myFriends[2]);
// }
// if (typeof myFriends[3] === "string") {
//   onlyNames.push(myFriends[3]);
// }

// todo: refactor the code above using for loop and if statement to minimize the code

// for (let i = 0; i < myFriends.length; i++) {
//   // Add only names or string to the onlyNames array
//   if (typeof myFriends[i] === "string") onlyNames.push(myFriends[i]);
// }
// console.log(onlyNames);

// Access the Elements of array without Looping
// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   // console.log(i);
//   // console.log(myFriends[0]);
//   console.log(myFriends[i]);
// }

// ? ---- Lesson 050 - Nested Loops And Trainings ----

/*
  Loop
  - Nested Loops
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

// ? ---- Lesson 051 - Loop Control - Break, Continue, Label ----

/*
  Loop Control
  - Break
  - Continue
  - Label - Not so common but should you use if you need
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// mainLoop: for (let i = 0; i < products.length; i++) {
//   // if (typeof products[i] === "number") {
//   //   continue;
//   // }
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//     console.log(`- ${colors[j]}`);
//   }
// }

// ? ---- Lesson 052 - Loop - For Advanced Example ----

/*
  Loop For Advanced Example
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   // i += 2;
//   i++;
//   if (i === products.length) break;
// }

// ? ---- Lesson 053 - Practice - Add Products To Page ----

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let colors = ["Red", "Green", "Blue"];
// let count = 5;

// document.write(`<h1>Show ${count} Products</h1>`);
// for (let i = 0; i < count; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

// ? ---- Lesson 054 - Loop - While ----

/*
  Loop
  - While
      - I am NOT SURE how many ITERATIONS I might need to carry out.
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index++;
//   if ( index === 3 ) {
//     break;
//   }
// }

/*
  What is the difference between forLoop and WhileLoop in JS?
    Links:
      1. https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript/
      2. https://www.geeksforgeeks.org/difference-between-for-loop-and-while-loop-in-programming/
      3. https://medium.com/swlh/understanding-javascripts-for-loop-while-loop-43d034faae89
*/

// ? ---- Lesson 055 - Loop - Do-While ----

/*
  Loop
  - Do-While
    - Do-While is executed at least one
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

// let i = 0;

// while (false) {
//   console.log(i);
//   i++;
// }

// do {
//   // Block Of Code
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

// ? ---- Lesson 056 - Loop - Challenge ----

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let cnt = 0;
// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`); // No Of Admins Before Stop

// for (let i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") break;
//   document.write(`<hr/>`);
//   document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
//   document.write(`<h3>Team Members: </h3>`);
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0])
//       document.write(`<p>- ${++cnt} ${myEmployees[j]}</p>`);
//     // continue;
//   }
//   document.write(`</div>`);
//   cnt = 0;
// }

/*
  Modified Date: 5/20/2024
*/

// let c = 0
// document.write("<div>We have X Admins</div>");

// document.write(`<div>We have ${myAdmins.lastIndexOf("Stop")} Admins</div>`);

// document.write(`<hr>`);

// for (let i = 0; i < myAdmins.lastIndexOf("Stop"); i++){
//   document.write(`<div>`);
//   document.write(`The Admin for team ${i+1} ${myAdmins[i]}`);
//   document.write(`<h3>Team memebers: </h3>`);
//   for(let j = 0; j < myEmployees.length; j++){
//     if(myAdmins[i].charAt(0) === myEmployees[j].charAt(0)){
//       document.write(`<p>- ${++c} ${myEmployees[j]}</p>`);
//     }
//   }
//   document.write(`</div>`);
//   c = 0;
//   document.write(`<hr>`);
// }

// ? ---- Lesson 057 - Function Intro And Basic Usage ----

/*
  Function => DRY : Don't Repeat Yourself
  - What Is Function ?
  - User-Defined vs Built-In Functions
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// console.log(typeof console); // Object
// console.log(typeof console.log); // Function

// function sayHello() { // Without Parameters
//   console.log(`Hello, Osama!`);
// }

// sayHello(); // Without Arguments

// function sayHello(userName) { // With Parameters
//   console.log(`Hi, ${userName}!`);
// }

// // With Arguments
// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Ali");
// sayHello("Sama");
// sayHello("Uswa");

// ? ---- Lesson 058 - Function Advanced Examples ----

// function sayHello(userName, age) {
//   if (age < 20) {
//     console.log("App is Not Suitable For You!");
//   } else {
//     console.log(`Hello, ${userName}!, You Age is ${age}`);
//   }
// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1982, 2021, 2020);

// ? ---- Lesson 059 - Function Return And Use Cases ----

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interruptting
*/

// function sayHello(userName) {
//   return "Hello, " + userName + "!";
// }

// console.log(sayHello("Mustafa"));

// function calc(num1, num2) {
//   return (num1 + num2);
// }

// let result = calc(10, 20);

// console.log(result + 100);

// function calc(num1, num2) {
//   return;
//   num1 + num2;
// }

// let res = calc(10, 20);

// console.log(res + 100); // Undefined + 100 = NaN

// console.log(res); // Undefined

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `Interrruptting`;
//     }
//     console.log(i);
//   }
// }

// generate(10, 20);

// ? ---- Lesson 060 - Function Default Parameters ----

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// function sayHello(userName= "Unknown", age="Unknown") {
//   // if (age === undefined) {
//   //   age = "Unknown";
//   // }
//   // age = age || "Unknown";
//   return `Hello, ${userName}! Your Age Is ${age}.`;
// }

// console.log(sayHello("Osama"));

// ? ---- Lesson 061 - Function Rest Parameters ----

/*
  Function
  - Rest Parameters [Array of Arguments] Or [typeof (array) > Object]
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) { // Array of Arguments
//   // console.log(Array.isArray(numbers)); // true
//   // console.log(typeof(numbers)); // Object >> Array
//   // return num1 + num2 + num3;

//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

// ? ---- Lesson 062 - Function Ultimate Practice ----

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) { // skills is existed and > 0
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else { // sk.length === 0 [skills doesn't existed]
//       document.write(`<p>Skills: No Skills</p>`)
//     }
//   } else {
//     if (sk.length === 0) {
//       document.write(`<p>Skills: No Skills and is Hidden</p>`);
//     }
//   }
//   document.write(`</div>`);
// }

// showInfo("Osama", 38, 20, "No");

// ? ---- Lesson 063 - Random Arguments Function Challenge ----

/*
  Function - Random Argument Challenges
  =====================================
  Create Function showDetails()
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// showDetails(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"

// --------- MySolution 1 - Not An Efficient Solution ---------
// function showDetails(v1, v2, v3) {
//   typeof v1 === "string" &&
//   typeof v2 === "number" &&
//   typeof v3 === "boolean"
//     ? console.log(
//         `Hello ${v1}, Your Age Is ${v2}, You Are Available For Hire`
//       )
//     : typeof v1 === "number" &&
//       typeof v2 === "string" &&
//       typeof v3 === "boolean"
//     ? console.log(
//         `Hello ${v2}, Your Age Is ${v1}, You Are Available For Hire`
//       )
//     : typeof v1 === "boolean" &&
//       typeof v2 === "number" &&
//       typeof v3 === "string"
//     ? console.log(
//         `Hello ${v3}, Your Age Is ${v2}, You Are Available For Hire`
//       )
//     : typeof v1 === "boolean" &&
//       typeof v2 === "string" &&
//       typeof v3 === "number" &&
//       v1 === false
//     ? console.log(
//         `Hello ${v2}, Your Age Is ${v3}, You Are Not Available For Hire`
//       )
//     : console.log(
//         `Hello ${v2}, Your Age Is ${v3}, You Are Available For Hire`
//       );
// }

// --------- MySolution 2 - An Efficient Solution ---------
// function showDetails(a, b, c) {
//   let name, age, availableOrNot;
//   for (let i = 0; i < arguments.length; i++) {
//     typeof arguments[i] === "string"
//       ? name = arguments[i]
//       : typeof arguments[i] === "number"
//         ? age = arguments[i]
//         : arguments[i]
//           ? availableOrNot = "Are Available For Hire"
//           : availableOrNot = "Are Not Available For Hire";
//   }
//   console.log(`Hello ${name}, Your Age Is ${age}, You ${availableOrNot}`);
// }


// ---- MySolution 3 ----


// function showDetails(a, b, c) {
//   const name = typeof a === "string" ? a : typeof b === "string" ? b : c;
//   const age = typeof a === "number" ? a : typeof b === "number" ? b : c;
//   const isAvailable = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

//   const availabilityMessage = isAvailable ? "You are Available for Hire": "You aren't Available for Hire";

//   console.log(`Hello ${name}, Your Age Is ${age}, ${availabilityMessage}`);
// }



// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// showDetails(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ? ---- Lesson 064 - Anonymous Function And Practice ----

/*
  Function
  - Anonymous Function
  - Calling Named Function Vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// console.log(calc(10, 5)); // calling function calc that hase been already created

// function calc(num1, num2) {
//   return num1 + num2;
// }

// console.log(calc(10, 5)); // calling function calc

// Runtime Anonymous function - Error when calling function before intialization
// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// DOM >> Document Object Model

// document.getElementById("show").onclick = function () {
//   console.log("Show");
// };

// document.getElementById("show").onclick = sayHello;

// function sayHello() {
//   console.log("Hello Osama");
// }

// Anonymous function
// setTimeout( function () {
//   console.log("Good");
// }, 2000);

// ? ---- Lesson 065 - Return Nested Function ----

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Muhammad"));
// =================================================================================================
// Example 2

// function sayMessage(fName, lName) {
//     let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Muhammad"));
// =================================================================================================
// Example 3

// function sayMessage(fName, lName) {
//   let message = "Hello";

//  // Nested Function
//   function concatMsg() {
//
//     function getFullName() {
//
//       return `${fName} ${lName}`;
//
//     }
//
//     return `${message} ${getFullName()}`;
//
//   }

//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Muhammad"));

// ? ---- Lesson 066 - Arrow Function Syntax ----

/*
  Function
  - Arrow Function
  - Regular Vs Arrow [Param + No Param]
  - Multiple Lines
*/

// function print() {
//   return 10;
// }

// console.log(printNum());

// let print = function () {
//   return 10;
// };

// let print = _ => {
//   // let a  = 10;
//   return 10;
// };


// let print = () => 10;
// let print = _ => 10;

// let print = function (num) {
//   return num;
// };


// let print = (num) => num;
// let print = num => num; // In Case One Parameter You Can Remove braces

// console.log(print(100));


// let print = function(num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// Error when using these parameters without braces
// let print = num1, num2 => num1 + num2;

// console.log(print(100, 50));

// ? ---- Lesson 067 - Scope - Global And Local ---- /** Interview Questions */ =>

// todo: Need to search for each piece of info

/*
  Scope
  - Global And Local Scope
  - Definition: Scope determines the accessibility (visibility) of variables.
    - Block scope [let, const]
    - Funtion scope [var, let, const]
    - Global scope [var, let, const]

    link tutorial: https://www.w3schools.com/js/js_scope.asp
*/

/* NOTE:
  - Local variables have Function Scope:
    - They can only be accessed from within the function.
  - Local variables are created when a function starts, and deleted when the function is completed.
*/

// Global Scope
// var a = 1;
// let b = 2; // Global Variable defined with the let keyword do not belong to the window object

// Variables declared within a JavaScript function, are LOCAL to the function
// function showText() {
//   // Local Scope
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
//   // var a = 100;
//   // let b = 200;
// }

// showText();

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// ? ---- Lesson 068 - Scope - Block ----

/*
  Scope
  - Block Scope [If, Switch, For]
  NOTE: var is not block scope
*/

// var x = 10; // Global Scope

// if (10 === 10) {
//   console.log(`From If Block ${x}`); // with let ReferenceError: Cannot access 'x' before initialization
//   let x = 50;
//   // var x = 50; // Not a block scope
// }

// console.log(`From Global ${x}`); // Global Scope

// console.log(x); // var is not a block scope - note that the value of x has been overwritten by the value of x inside the if block scope - 50

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function = From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// ? ---- Lesson 069 - Scope - Lexical (Static) ---- /* Interview Questions */

/* Searching Topics Important

  JavaScript Function
  JavaScript Function Currying
  JavaScript Function Arrow Function
  JavaScript IIFE - Immediately Invoked Function Expression
  JavaScript Scope

*/

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
  - Namaste JavaScript - Searching On YouTube
*/

// More Notes

// let a = 10;

// function parent() {
//   let a = 10;

//   function child() {
//     // let a = 10;
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }

//     grand();
//   }

//   child();
// }

// parent();

// ? ---- Lesson 070 - Arrow Function challenge ----

/*
  Function Arrow Challenge
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]


// ======== Sol 24/5/2024 ========

// let names = function (...name) {
//   // parameter ?
//   return `String [${name.join("], [")}] => Done !`;
// }

// let names = (...name) => `String [${name.join("], [")}] => Done !`;

/* =============================================== */

// let names = function (...n) {
//   // Parameter ?
//   return `String [${n.join("], [")}] => Done !`;
// };

// ======== My_Solution ========
// Arrow Function In One Line
// let names = (...n) => `String [${n.join("], [")}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* =============================================== */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

/* =============================================== */

// ======== Sol 24/5/2024 ========

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[one - one];
//              10 + 20 + 50 = 80

// Regular Syntax

// let calc = function (one, two, ...nums) {
//   return one + two + nums[one - one];
// }

// console.log(calc(10, myNumbers[+false], myNumbers[+true])); // 80

/* =============================================== */

// let calc = (one, two, ...nums) => one * two + nums[one- one][two-one/one] - nums[one - one][one - one]; // 10 * 4 + 40 = 80

// let calc = function (one, two, ...nums) {
//   return  one * two + nums[one- one][two-one/one] - nums[one - one][one - one]; // 10 * 4 + 40 = 80
// }

// console.log(calc(10, myNumbers.length, myNumbers)); // 80

/* =============================================== */

// Another_Solution

// let calc = function (one, two, ...nums) {
//   return one + +two + +nums;
// }

// console.log(calc(10, myNumbers.shift(), myNumbers.shift()));  // 80

// ? ---- Lesson 071 - Higher Order Functions - Map ---- /** Interview Questions and Projects is used monstly */

/*
  Higher Order Functions
  ---> Is a function that accepts function as parameter and/or returns a function.

  - Map
  --- Method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element (obligatory), Index (optional), Array (optional)) { }, thisArg)
  - Element => The Current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array -> The current Array

  Notes:
  - Map Returns A New Array

  Examples
  - Anonymous Function
  - Named Function

  Searching Topics
  - CallBackFunction
  - thisArgument in Higher Order Fucntion
*/

let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];

// for(let i = 0; i < myNums.length; ++i) {
//   newArray.push(myNums[i]+myNums[i]);
// }

// console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function(element, index, arr) {
//   console.log(`Current Element => ${element}`);
//   console.log(`Current Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(`This => ${this}`);
//   // return element + element;
// }, 10)

// let addSelf = myNums.map((e) => e + e);
// console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }

// let addition = (e) => e + e;

// let add = myNums.map(addition);

// console.log(add);

// ? ---- Lesson 72 - Higher Order Functions - Map Practice ----

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// Problem 1:
// let sw = swappingCases.split("").map(function(ele) {
//   // Codition ? True : False --> Ternary Operators
//   return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// })
// .join("");

// Arrow Function Version
// let sw = swappingCases
//   .split("")
//   .map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase())
//   .join("");

// console.log(sw); // ELzerO

// Problem 2:
// Convert Positive number to Negative number and Negative number to Positive number
// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// Problem 3:
// let ign = ignoreNumbers.split("").map(function (ele) {
//   return isNaN(parseInt(ele)) ? ele: "";
// })
// .join("");

// Arrow Function Version

// let ign = ignoreNumbers.split("").map( (ele) => isNaN(parseInt(ele)) ? ele: "").join("");

// console.log(ign);

// ? ---- Lesson 73 - Higher Order Functions - Filter ----

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The Current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterFriends = friends.filter(function(el) {
//   // return el.startsWith("A");
//   return el.startsWith("A") ? true  : false;
// });

// console.log(filterFriends);

// Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function(el) {
//   return el % 2 === 0;
// });

// console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function(el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function(el) {
//   return el + el;
// });

// console.log(addFilter);

// ? ---- Lesson 74 - Higher Order Functions - Filter Pratice ----

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");

// console.log(smallWords);

// // Ignore Numbers
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele))? ele : "";
//   })
//   .join("");

// console.log(ign);

// // Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let multiMix = mix
//   .split("")
//   .filter(function(ele){
//   return (!isNaN(ele));
//   })
//   .map(function(ele){
//   return ele*ele;
//   })
//   .join("");

// console.log(multiMix);

// ? ---- Lesson 75 - Higher Order Functions - Reduce ----

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5);

// console.log(add);

// ? ---- Lesson 76 - Higher Order Functions - Reduce Practice ----

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function(acc, current){
//   console.log(`Acc => ${acc}`);
//   console.log(`Currrent Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`##########################`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars.filter(function(ele){
//   return !ele.startsWith("@");
// })
// .reduce(function(acc, current){
//   return acc + "" + current;
// });

// console.log(finalString);

// ? ---- Lesson 77 - Higher Order Functions - ForEach and Practice ----

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArgs))
  - Element => The Current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The current Array

  Note
  - Doesn't Return Anything [Undefined]
  - Break Will Not Break the Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function(ele){
//     ele.onclick=function(){
//       // Remove Active Class From All Elements
//       allLis.forEach(function(ele){
//         ele.classList.remove("active");
//       });
//       // Add Active Class To This Element
//       this.classList.add("active");
//       // Hide All Divs
//       allDivs.forEach(function(ele){
//         ele.style.display="none";
//       });
//     };
// });

// ? ---- Lesson 78 - Higher Order Functions - Challenge ----

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(",").filter(function(e){
//  // Return a string without any numbers
//   return isNaN(e);
// }).map(function(e){
// // Return a string without first Character
//   return e[e.length-e.length][e.length-e.length];
// })
// .reduce(function(a, c, i, arr){
//   return (a+c).split("_").join(" ").substr(arr.length-arr.length, arr.length-true);
// });

// console.log(solution); // Elzero Web School

// AnotherSolution

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .filter((ele) => isNaN(Number(ele)))
//   .map((ele) => ele === "_" ? " " : ele)
//   .reduce((acc, current) => `${acc}${current}`)
//   .slice(true, -isNaN(myString));

// console.log(solution); // Elzero Web School

// ? ---- Lesson 079 - Object - Introduction ----

/*
  Object
  - Intro And What Is Object?
  - Testing Window Object
  - Accessing Object
*/

// let user = {
//   // Properties
//   theName: "Osama",
//   theAge: 38,
//   // Methods
//   sayHello: function() {
//     return "Hello";
//   }
// };

// console.log(user.theName); // "Osama"
// console.log(user.theAge); // 38
// console.log(user.sayHello()); // "Hello"

// ? ---- Lesson 080 - Object - Dot Notation vs Bracket Notation ----

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// let myVar="country";

// let user={
//   theName: "Mustafa",
//   country_of: "Egypt",
//   "live in": "Berlin",
//   100: "Number",
//   country: "Egypt"
// };

// console.log(user.theName); // Using period notation
// console.log(user["theName"]); // Using Bracket Notation
// console.log(user.country_of); // Using period Notation
// console.log(user["country_of"]); // Using bracket Notation
// console.log(user["100"]); // Using bracket notation with integer with a double quotes or without it
// console.log(user["live in"]); // You should using bracket with invalid name like string has a space
// // console.log(user.myVar); // user.country Here you can't use "dot notation" for accessing an value from "dynamic property name" OUTPUT: undefined
// console.log(user[myVar]); // user[country]="Egypt" using bracket notation

// ? ---- Lesson 081 - Nested Object And Advanced Trainings ----

/*
  Object
  - Nested Object And Trainings
*/

// let available = true;

// let user = {
//   name: "Mustafa",
//   age: 22,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one); // Cairo
// console.log(user["addresses"].egypt.one); // Cairo
// console.log(user["addresses"]["egypt"]); // Nested Object => {one: "Cairo", two: "Giza"}
// console.log(user["addresses"]["egypt"]["one"]); // Cairo using bracket notation

// console.log(user.checkAv()); // Available is a local scope inside a user Object

// ? ---- Lesson 082 - Create Object With New Keyword ----

/*
  Object
  - Create With New Keyword new Object();
*/

// let user={
//   age:20
// };

// let user = new Object({age: 20}); // new keyword Using ObjectConstructor

// console.log(user);

// user.age=22;
// user["country"]="Egypt";

// console.log(user);

// user.sayHello=function(){
//   return `Hello, Mustafa`;
// };

// console.log(user.age);
// console.log(user["country"]);
// console.log(user.sayHello());

// ? ---- Lesson 083 - This Keyword - Important ----

/*
  Function this Keyword
  - this Introduction
  - this inside Object method
  --- when a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With window And This
  - Global Context
  - Function Context

  Search - Important
  - Strict Mode
*/

// console.log(this);
// console.log(this === window); // true

// myVar = 100;
// console.log(window.myVar); // 100
// console.log(this.myVar); // 100

// function sayHello(){
//   console.log(this);
//   return this;
// };
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function() {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function() {
//     console.log(this.age); // 38
//     console.log(this); // {age: 38, ageInDays: f}
//     return this.age * 365;
//   }
// };

// console.log(user.age);
// console.log(user.ageInDays());

// ? ---- Lesson 084 - Create Object With Create Method ----

/*
  Object
  - Create Object with Create Method
*/

// let user = {
//   age: 40,
//   doubleAge: function() {
//     // return user.age * 2;
//     return this.age * 2;
//   }
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create(user); // create an empty object

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// // copyObj.age = 20;

// // console.log(copyObj);
// // console.log(copyObj.age); // 20
// // console.log(copyObj.doubleAge()); // 80 because user use doubleAge that returns user.age not this.age * 2

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// ? ---- Lesson 085 - Create Object With Assign Method ----

/*
  Object
  - Create Object With assign Method
*/

// let obj1 = {
//   prop1: 1,
//   meth1: function(){
//     return this.prop1; // 1
//   }
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function(){
//     return this.prop2;
//   }
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// // finalObject.prop1 = 200;
// // finalObject.prop4 = 4;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6});

// console.log(newObject);

// Searching Topics to solve Any Object exercises:

/**
 * JavaScript Object
 * JavaScript Has Own Property
 * JavaScript Object Sorting
 * JavaScript Object Length
 * JavaScript Object Keys
 * JavaScript Object Values
 */

// ? ---- Lesson 086 - What Is Dom? And Select Elements ----

/*
  DOM
  - What Is DOM?
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement1 = document.querySelector(".special"); // Class
// let myQueryElement2 = document.querySelector("#my-div"); // Id
// let myQueryElement3 = document.querySelector(".my-span"); // Class - First Element of an Object is met of all my-span Classes
// let myQueryAllElement = document.querySelectorAll(".my-span"); // Class

// console.log(myIdElement);
// console.log(myTagElements);
// console.log(myTagElements[1]);
// myTagElements[1].innerHTML = "Test";
// console.log(myTagElements[1].innerHTML);
// console.log(myClassElement);
// console.log(myClassElement[1]);
// console.log(myQueryElement1);
// console.log(myQueryElement2);
// console.log(myQueryElement3);
// console.log(myQueryAllElement);
// console.log(myQueryAllElement[1]); // Get the second one of all .my-span

// console.log(document.title); // Learn-JS
// console.log(document.body); // Important
// console.log(document.forms);
// console.log(document.forms[1]);
// // Manipulation in DOM
// console.log(document.forms[0].one); // input ==> value
// console.log(document.forms[1].two.value); // Get the Value
// console.log(document.links);
// console.log(document.links[1]);
// console.log(document.links[1].href); // Get the Addresses

// ? ---- Lesson 087 - Get Set Elements Content And Attributes ----

/*
  Dom [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute


  *Search
  - innerText
*/

// let myElement = document.querySelector(".js"); // Select first element of class="js"

// console.log("innerHTML - " + myElement.innerHTML); // Getting all text plus all elements or tags of innerHTML of this elements
// console.log("textContent - " + myElement.textContent); // Getting all Text with spaces without any inner tags or elements
// console.log("innerText - " + myElement.innerText); // Getting all Text without any spaces or any Tags or any Elements - Pure text

// myElement.innerHTML = "Text From <span>Main.js<span> File";
// myElement.textContent = "Text From <span>Main.js<span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink);

// myLink.textContent = "Twitter";

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("title", "Twitter");

// ? ---- Lesson 088 - Check Attributes And Examples ----

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if(myP.hasAttribute("data-src")){
//   if(myP.getAttribute("data-src")===""){
//     // console.log("Found And Removed");
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }

// if(myP.hasAttributes()){
//   console.log(`Paragraph Has Attributes`);
// }

// if(document.getElementsByTagName("div")[0].hasAttributes()){ // False Div doesn't have attributes
//   console.log(`Div Has Attributes`);
// } else {
//   console.log(`Div Has No Attributes`);
// }

// ? ---- Lesson 089 - Create And Append Elements ----

/*
  DOM [Create Element]
  - createElement
  - createComment
  - createTextNode
  - crateAttribute vs SetAttribute
  - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr); // Create attribute node not exist and it will be empty
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element to Body
// document.body.appendChild(myElement);

// // console.log(myElement);

// ? ---- Lesson 090 - Product With Title And Description Practice ----

/*
  Dom [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// for(let i=0;i<100;i++){
//   let myDiv = document.createElement("div");
//   let myHeading = document.createElement("h2");
//   let myParagraph = document.createElement("p");

//   let myHText = document.createTextNode(`Product Title ${i+1}`);
//   let myPText = document.createTextNode(`Product Description ${i+1}`);

//   myDiv.className = "product";

//   // Add Heading Text
//   myHeading.appendChild(myHText);

//   // Add Heading To Main Element
//   myDiv.appendChild(myHeading);

//   // Add Paragraph Text
//   myParagraph.appendChild(myPText);

//   // Add Paragraph To Main Element
//   myDiv.appendChild(myParagraph);

//   document.body.appendChild(myDiv);
// }

// ? ---- Lesson 091 - Deal With Children's ----

/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

// ? ---- Lesson 092 - DOM Events ----

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

// let myBtn = document.getElementById("btn");

// myBtn.onclick = function () {
//   console.log("Clicked");
// };

// myBtn.oncontextmenu = function () {
//   console.log("Context Menu");
// };

// myBtn.onmouseenter = function () {
//   console.log("Mouse Enter")
// };

// myBtn.onmouseleave = function () {
//   console.log("Mouse Leave");
// };

// window.onscroll = function () {
//   console.log("scroll");
// };

// window.onresize = function () {
//   console.log("resize");
// };

// ? ---- Lesson 093 - Validate Form And Prevent Default ----

/*
  DOM [Events]
  - Validate Form Pratice
  - Prevent Default
*/

// userInput = document.querySelector("[name=\"username\"");
// AgeInput = document.querySelector("[name=\"age\"]");

// document.forms[0].onsubmit = function(e){
//   let userValid = false;
//   let ageValid = false;

//   // console.log(userInput.value);
//   // console.log(userInput.value.length);

//   if(userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if(AgeInput.value !== "") {
//     ageValid = true;
//   }

//   if(userValid === false || ageValid===false){
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function(event){
//   console.log(event);
//   event.preventDefault();
// };

// ? ---- Lesson 094 - Event Simulation - Click Focus Blur ----

/*
  DOM [Event Simulation]
  - click
  - focus
  - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function(){
//   two.focus();
// }

// one.onblur = function(){
//   document.links[0].click();
// }

// ? ---- Lesson 095 - Class List Object And Methods ----

/*
  DOM [Class List]
  - classlist
  --- length
  --- contains
  --- items(index)
  --- add
  --- remove
  --- toggle (add, remove)
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList); // Object
// console.log(element.classList.contains("mustafa")); // Not Found => False
// console.log(element.classList.contains("show"));
// console.log(element.classList.item(3)); // class: test
// console.log(element.classList.item(2)); // class: show

// element.onclick = function(){
//   element.classList.add("add-one", "add-two");
// };

// element.onlick = function(){
//   element.classList.remove("add-one", "add-two");
// };

// element.onclick = function(){
//   // element.classList.toggle("Osama"); // Not Exits so toggle will put in the ClassList
//   element.classList.toggle("show"); // It Exits so it will remove it
// };

// ? ---- Lesson 096 - CSS Styling And Stylesheets ----

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, Value, priority)
*/

// let element = document.getElementById("my-div");

// // An Inline CSS Styles And Property Using "CamalCase" Name Conversion
// element.style.color = "dodgerBlue";
// element.style.fontWeight = "bold";
// // element.style.backgroundColor = "Tomato";

// // An Inline All In "cssText" CSS Styles
// element.style.cssText = "font-size: 30px; font-weight:bold; color:green; opacity:0.9"; // Override on last css style

// element.style.removeProperty("color"); // Remove From Inline Style
// element.style.setProperty("font-size", "40px", "important");

// // Changes In StyleSheet Files -- Errors - Searching For it: rules and cssRules
// console.log(document.styleSheets[0].rules[0].style.removeProperty("line-height"));
// document.styleSheets[0].rules[0].style.setProperty("background-color", "Tomato", "important");

// ? ---- Lesson 097 - Before, After, Prepend, Append, Remove ----

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.after("Hello From JS");
// element.before("Hello From JS");
// element.after(createdP);
// element.before(createdP);

// element.append("Hello From JS");
// element.prepend("Hello From JS");
// element.prepend(createdP);
// element.prepend(createdP);

// element.remove(); // instead of display: none

// ? ---- Lesson 098 - DOM Traversing ----

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

// let span = document.querySelector(".two");

// console.log(span.nextSibling);
// console.log(span.nextElementSibling.remove()); // undefined
// console.log(span.previousElementSibling);
// console.log(span.previousSibling);
// console.log(span.parentElement);

// span.onclick = function(){ // When Click on span that has class="two"
//   span.parentElement.remove();
//   // span.parentElement.style.opacity = "0";
// }

// ? ---- Lesson 099 - DOM Cloning ----

/*
  DOM [Cloning]
  - CloneNode(Deep) - Deep if true takes the elements and text and its children. if Deep is false, it takes only the element with its attributes without any children or inner text or elements
*/

// let myP = document.querySelector("p").cloneNode(true);
// // let myP = document.querySelector("p").cloneNode(false);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;
// console.log(myP);
// myDiv.appendChild(myP); // Append child node to document element after cloning it, without any children added to it

// ? ---- Lesson 100 - AddEventListener ---- * Very Important *

/*
  DOM [Add Event Listener]
  - AddEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = function(){
//   console.log("Message From OnClick"); // onclick Event when clicked on left mouse button
// }

// myP.onclick = one;
// myP.onclick = two; // Override - like a variable

// function one(){
//   console.log("Message From OnClick 1");
// }

// function two(){
//   console.log("Message From OnClick 2");
// }

// window.onload = "Mustafa";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick - addEventListener");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

// myP.onclick = function(){
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   // newP.classList.add("clone");
//   document.body.appendChild(newP);
// };

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function(){ // Error
//   console.log("Iam Cloned");
// };

// document.addEventListener("click", function(e){
//   // if(e.target){
//   //   console.log(e.target);
//   // }

//   if(e.target.className === "clone"){
//     console.log("Iam Cloned");
//   }
// });

// ? ---- Lesson 101 - DOM Challenge ----

// * Review The last videos from 86 to 100 in Elzero Bootcamp 2021 and read more about these topics in MDN

// Challenge - My Solution:- In folder DOM-Challenge

// ? ---- Lesson 102 - bla bla bla ----
