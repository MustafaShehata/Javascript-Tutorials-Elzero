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

// ---- Lesson 18 - Arithmetic Operators ----

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
// console.log(typeof NaN); // Number

// console.log(10 * 20); // 200
// console.log(10 * -20); // -200

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 / 2); // 5
// console.log(11 % 2); // 1

// console.log("35 % 2"); // 1


// ---- Lesson 19 - Unary Plus And Negation Operators ----

/*
  - "+" Unary Plus [Return Number If Its Not Nubmer]
  - "-" Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Nubmer
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
// console.log(+"Osama"); // NaN
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


// ---- Lesson 20 - Type Coercion ----

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

console.log(a + b); // 1020
console.log(+a + b); // 10 + 20 = 30
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

// ---- Lesson 21 - Assignment Operators ----

/* 
  Assignment Operators
*/

/* let a = 10;

a = 20;
console.log(a); // 20

a = 10; // reinitialize
a = a + 20;
console.log(a); // 20

a = a + 70; // a += 70 -- The Same
console.log(a); // 100

a += 100;
console.log(a); // 200

a -= 50; // a = a - 50
console.log(a); // 150

a /= 50; // a = a / 50
console.log(a); // 3
 */

// NOTE: To comment your Code in VsCode using ctrl + / or block comment Shift + Alt + A

// ---- Lesson 22 - Operators Challenges ----

/*
  Challenge 1
*/


// let a = 10;
// let b = "20";
// let c = 80;


// console.log( ++a + +b++ + +c++ - +a++ ); // 100
// console.log( ++a + -b + +c++ - -a++ + +a ); // 100
// console.log( --c + +b + --a * +b++ - +b * a + --a - +true ); // 100


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

// console.log(-d * +e); // 2000
// console.log(-d + ++f + ++e * ++g); // 173

// codepen.io



// Another Answer

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
      
  [+] = addtion operator

  [-b]
      Value = -21
      Explain = Unary negation operator convent the data type from string to number with differnt sign

  [+] = addition operator
  
  [+c++]
      Value = 81;
      Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 82 but not used
  
  [-] = subtraction operater

  [-a++]
      Value = -13
      Explain = post-increment increase the value by 1 to be 14 but not used
  
  [+] = additon operator

  [+a]
      Value = 14
      Explain = Unary plus operator has not effect becuase the date type already number


  so, the total value = 13 -21 + 81 - -13 + 14 = 100
  
*/


// a = 14    b = 21     c = 82
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c]
      Value = 81
      Explain = pre-decrement decress the value by 1 to be 81
  
  [+] = addition operator

  [+b]
      Value = 21
      Explain = Unary plus operator has no effect because the date type is already number
  
  [+] = addition operator

  [--a]
      Value = 13
      Explain = pre decrement decress the value by 1 to be 13
  
  [*] = multiplication operator

  [+b++]
      Value = 21
      Explain = Unary plus operator has no effect because the date type is already number, then post increment increase the value by 1 to be 22
  
  [-] = subtraction operator

  [+b]
      Value = 22
      Expalin = Unary plus operator has no effect effect
  
  [*] = multiplaction operator

  [a]
      Value = 13
      Explain = from the previous a
  
  [+] = Addition operator

  [--a]
      Value = 12
      Explain = Pre-decrement decress the value by 1 to be 12
  
  [-] = subtraction operator

  [+true]
      Value = 1
      Expalin = unary plus opertor change the date type from boolean to be number

      so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/

/*Challenge 2 */
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); //2000
// console.log(++e * ++g + -d + ++f); //173


// ---- Lesson 23 - Number ----

/*
  Number
  - Double Precision - Searching
  - Syntactic Sugar "_" - To ease reading
  - e
  - **
  - With Decimal
  - Nubmer + BigInt
  - Number Min Value
  - Number Max Value
*/

/*
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.000000);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 23434343434); // 1.7976931348623157e+308 */

// ---- Lesson 24 - Number Methods ----

