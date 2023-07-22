// // Wait The Window To Load
// window.onload = function () {
//   // Single Line Comment
//   document.querySelector("h1").style.color = "Blue"; // Single Line comment
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

// ---- Lesson 23 - Number ----

/*
  Number
  - Double Precision - Searching
  - Syntactic Sugar "_" - To ease reading
  - e
  - **
  - With Decimal
  - Number + BigInt
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

/*
console.log((100).toString());
console.log(100..toString());
console.log(100.0.toString());
console.log(100.1.toString());
console.log(100.10.toString());

console.log(100.555555.toFixed(2));
console.log(100.553555.toFixed(2));

console.log(parseInt("100"));
console.log(+"100");
console.log(Number("100"));
console.log(+"Osama 100"); // NaN
console.log(Number("Osama 100")); // NaN
console.log(parseInt("100 Osama")); // 100 as a Number
console.log(parseInt("Osama 100")); // NaN
console.log(parseInt("Osama 100 Osama")); // NaN

console.log(parseFloat("100 Osama")); // 100
console.log(parseFloat("100.500 Osama")); // 100.5
console.log(parseInt("100.500 Osama")); // 100 without rounding off the Number as 1.5 => 1 not 2
console.log(parseInt("1.5")); // 1 not 2

console.log(Number.isInteger("100")); // false ? Is he will convert string to a number then check isInteger() or Not? An: he will check only if he an integer or not
console.log(Number.isInteger(100.500)); // false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("Osama")); // false
console.log(Number.isNaN(100)); // false
console.log(Number.isNaN("Osama"/20)); // true
*/

// ---- Lesson 25 - Math Object ----

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

// console.log(Math.ceil(99.2)); // 100
// console.log(Math.floor(99.9)); // 99

// console.log(Math.min(10, 20, 100, -100, 90)); // -100
// console.log(Math.max(10, 20, 100, -100, 90)); // 100

// console.log(Math.pow(2, 4)); // 16

/*
  Math.random(): \
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

// console.log(Math.trunc(99.5)); // 99

// ! Note: search for "floor and trunc" -- your Task "24-6-2023"

// ---- Lesson 26 - Number Challenge ----

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

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));

// // Use Variables b + d To Get This Value
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2).toString()); // 66.67 => String
// console.log(Math.round(b) / Math.ceil(d)); // 67 => Number

// ---- Lesson 27 - String Methods Part 1 ----

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "Ahmed";
// let theList = [1, 2, 3, 4, 5]; // Array

// console.log(theName); // Ahmed
// console.log(theName[1]); // h
// console.log(theName[5]); // undefined

// console.log(theName.charAt(1)); // h
// console.log(theName.charAt(5)); // null or empty

// console.log(theName.toUpperCase()); // Capital Letters
// console.log(theName.toLowerCase()); // Small Letter

// console.log(theName.length); // 5 count form 1 to last element

// let theName2 = "  Ahmed  ";

// console.log(theName2[1]);
// console.log(theName2[5]);

// console.log(theName2.length); // 9

// console.log(theName2.trim()); // Remove the leading and trailing white spaces "Ahmed"

// // Task Trim() theName2 Without White Spaces and Convert alphabet "m" to CAPITAL "M"

// console.log(theName2.trim()[2].toUpperCase()); // M
// console.log(theName2.trim().toUpperCase()[2]); // M
// console.log(theName2.trim().charAt(2).toUpperCase()); // M

// console.log(theName2.replace("m", "M").trim()); // ahMed -- review it

// ---- Lesson 28 - String Methods Part 2 ----

/*
  String Methods
  - indexOf(value [Mand], Start [Opt] Length)
  - lastIndexOf(value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// // while you don't specify the index the should start search from it will search
// // from index "zero"
// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8)); // It Starts From 8 and Not Found Web then returns -1

// console.log(a.lastIndexOf("Web")); // Search for last to First index // 7 // counting from zero from last index

// console.log(a.lastIndexOf("o")); // 15
// console.log(a.indexOf("o")); // 5

// console.log(a.slice(11)); // Take (Start, to the last element if you don't write it) // "School"
// console.log(a.slice(2, 7)); // Take (Start, End But It Is Not Included) // "zero "
// console.log(a.slice(2, 8)); // "zero w"
// console.log(a.slice(2, 6)); // "zero"

// console.log(a.slice(-6)); // "School"
// console.log(a.slice(-1)); // "l"
// console.log(a.slice(-5, -3)); // "ch"
// console.log(a.slice(-13, -7)); // start = "r" index: -13, end = " " index: -7 but it is not included so it takes "b"

// console.log(a.repeat(3));

// console.log(a.split());
// console.log(a.split(""));
// console.log(a.split(" ", 2));
// console.log(a.split("", 6));

// ---- Lesson 29 - String Methods Part 3 ----

/*
  String Methods
  - Substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
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
// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2)); // same as 2 - 6 (Swaping)
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(17)); // out of scope (string)
// console.log(a.substring(a.length)); // 17
// console.log(a.substring(a.length - 1)); // "l"
// console.log(a.substring(a.length - 5, a.length - 3)); // "ch" 12 - 14 (end not included 14 - 1 = 13)

// console.log(a.substr(0)); // from 0 to the length of String a
// console.log(a.substr(0, 6)); // Elzero
// console.log(a.substr(17)); // "" empty string because 17 is the Start Position from 0
// console.log(a.substr(-3)); // "ool"
// console.log(a.substr(-5, 2)); // "ch"

// console.log(a.includes("Web")); // true
// console.log(a.includes("web", 8)); // false

// console.log(a.startsWith("E")); // true
// console.log(a.startsWith("E", 2)); // false
// console.log(a.startsWith("zero", 2)); // true

// console.log(a.endsWith("o", 6)); // Elzer"o" // true
// console.log(a.endsWith("o")); // false // l
// console.log(a.endsWith("ro", 6)); // true // Elze"ro"
// console.log(a.endsWith("l"));

// ---- Lesson 30 - String Challenge ----

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

// // Solution Must Be Dynamic And String May Change
// console.log(a.charAt(0).toLowerCase() + a.substring(1, a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl

// ---- Lesson 31 - Comparison Operators ----

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

// console.log(10 == "10"); // Compare Value Only
// console.log(-100 == "-100"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value + Type
// console.log(10 !== "10"); // Compare Value + Type
// console.log(10 !== 10); // Compare Value + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log("Osama" === "Ahmed");
// console.log("Osama" == "Ahmed");
// console.log("Osama" !== "Ahmed");
// console.log("Osama" != "Ahmed");
// console.log(typeof("Osama") === typeof("Ahmed")); // String === String

// ---- Lesson 32 - Logical Operators ----

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

// console.log(true); // true
// console.log(!true); // false

// console.log(!false); // false

// console.log(!(10 == "10")); // !(true) => false

// console.log(10 == "10" && 10 > 8); // true

// console.log(10 == "10" && 10 > 8 && 10 >= 10); // true

// console.log(10 == "10" && 10 > 8 && 10 > 50); // true && true && false = false

// console.log(10 == "10" || 10 > 80 || 10 > 50); // true || true || false = true

// ---- Lesson 33 - If Conditions ----

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
// let discount = false;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//   price -= discountAmount; // price = price - 30; ==> price = price - discountAmount
// } else if (country === "Egypt") {
//   // price -= discountAmount; // price = price - discountAmount
//   price -= 40; // price = price - discountAmount
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

// ---- Lesson 34 - Nested If Conditions ----

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

// ---- Lesson 35 - Conditional Ternary Operator ----

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

// Condition ? If True : If False

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
// console.log(`Hello ${result} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger Than 60")
//   : console.log("Unknown");

// ---- Lesson 36 - Nullish Coalescing Operator And Logical Or ---- Try To Search For This Lesson Again

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

  all other values including all objects  are truthy
    "0"  "false "

  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// let price1;
// console.log(`The Price Is ${price1}`); // Price Is Undefined

// let price2 = undefined;
// console.log(`The Price Is ${price2}`);

// let price3 = null;
// console.log(`The Price Is ${price3}`);

// let price4 = "";
// console.log(`The Price Is ${price4 || 200}`); // 200

// let price5 = 0;
// console.log(`The Price Is ${price3 || 200}`); // 200

// let price6 = undefined;
// console.log(`The Price Is ${price6 || 200}`); // 200

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price; // Undefined
// console.log(`The Price Is ${price ?? 200}`); // 200
// price = null;
// console.log(`The Price Is ${price ?? 200}`); // 200
// price = undefined;
// console.log(`The Price Is ${price ?? 200}`); // 200
// price = "";
// console.log(`The Price Is ${price ?? 200}`); // empty
// price = 0;
// console.log(`The Price Is ${price ?? 200}`); // 0

// Logical And &&
// let p = 10;
// console.log(`${p && 'Good'}`); // Good
// p = 0;
// console.log(`${p && "Good"}`); // 0

// ---- Lesson 37 - If Condition Challenge ----

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
// // console.log(st.length); // 17

// if ( st.repeat(2).length.toFixed() === "34" ) {
//   console.log("Good");
// }

// if ( (st.length * 2).toString() === "34" ) {
//   console.log("Good");
// }

// // W Position May Change - Dynamic Position
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

// ---- Lesson 38 - Switch Statemnent ----

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
//   default: // You Can Put it in First But Should
//   // Write break After Block Code
//     console.log("Unknown Day");
// }

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

// ---- Lesson 39 - Switch And If Condition Challenge ----

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

// /*
//   If Challenge
// */

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

// ---- Lesson 40 - Array Big Introduction ----

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
// console.log(`${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Gamal";
// console.log(myFriends);
// myFriends[3] = "Sameh";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(typeof myFriends); // Object

// console.log(Array.isArray(myFriends)); // true

// let str = "Mustafa";
// console.log(Array.isArray(str)); // false

// ---- Lesson 41 - Using Length With Array ----

/*
  Arrays Methods
  - Length
*/

// Index Starts From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends.length); // 4

// myFriends[myFriends.length - 1] = "Gamal";

// console.log(myFriends);

// myFriends.length = 2;

// console.log(myFriends); // index [0, 1]

// ---- Lesson 42 - Add And Remove From Array ----

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

// ---- Lesson 43 - Searching Array ----

/*
  Arrays Mehtods [Search]
  - indexOf(Search Elemnet, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed")); // 0
// console.log(myFriends.indexOf("Ahmed", 2)); // 4

// console.log(myFriends.lastIndexOf("Ahmed")); // 4
// console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0

// console.log(myFriends.includes("Ahmed")); // true
// console.log(myFriends.includes("Ahmed", 2)); // true

// if (myFriends.lastIndexOf("Osama") == -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

// ---- Lesson 44 - Sorting Arrays ----

/*
  Arrays Methods [Sort]
  - Sort(Function [Opt])
  - reverse
*/

// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// console.log(myFriends);

// console.log(myFriends.sort());

// console.log(myFriends.reverse());

// console.log(myFriends.sort().reverse());

// ---- Lesson 45 - Slicing Array ----

/*
  Array Methods [Slicing]
  - slice(start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
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
// console.log(myFriends);

// // myFriends.splice(0, 0, "Sameer","Samara"); // Add "Sameer" and "Samara" to the Index Zero
// // console.log(myFriends);
// // myFriends.splice(0, 1, "Sameer","Samara"); // Add "Sameer" and "Samara" to the Index Zero
// // console.log(myFriends);
// // myFriends.splice(0, 2, "Sameer", "Samara");
// // console.log(myFriends);
// myFriends.splice(1, 2, "Sameer", "Samara"); // Ahmed , Sameer , Samara , Osama , Gamal , Ameer
// console.log(myFriends);

// ---- Lesson 46 - Joining Arrays ----

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Seperator)
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());

// ---- Lesson 47 - Array Challenge ----

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// /* First Solution */
// my.reverse().splice(zero, --counter);

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

// /* Second Solution */
// console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]

// /* Third Solution */
// console.log(my[--counter][--zero, counter] = "El" + my[counter].slice(counter)); // "Elzero"

// /* Fourth Solution */
// console.log(my[counter].slice(-counter, --zero) + my[counter][--my[counter].length].toUpperCase()); // "rO"

// ---- Lesson 48 - Loop - For And Concept Of Loop ----

/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// ---- Lesson 49 - Looping On Sequences ----

/*
  Loop
  - Loop On Sequence
*/

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 5 ,"Ali", "Amira"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string")
//     onlyNames.push(myFriends[i]);
// }
// console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   // console.log(i); // 0 1 2 3 4
//   console.log(myFriends[i]);
// }

// ---- Lesson 50 - Nested Loops And Trainings ----

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

// ---- Lesson 51 - Loop Control - Break, Continue, Label ----

/*
  Loop Control
  - Break
  - Continue
  - Label
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

// ---- Lesson 52 - Loop - For Advanced Example ----

/*
  Loop For Advanced Example
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i += 2;
//   if (i == products.length)
//     break;
// }

// ---- Lesson 53 - Practice - Add Products To Page ----

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`);
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

// ---- Lesson 54 - Loop - While ----

/*
  Loop
  - While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index++;
// }

// ---- Lesson 55 - Loop - Do-While ----

/*
  Loop
  - Do-While
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

// ---- Lesson 56 - Loop - Challenge ----

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samara"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
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

// ---- Lesson 57 - Function Intro And Basic Usage ----

/*
  Function
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

// sayHello("Mustafa"); // With Arguments
// sayHello("Sayed");
// sayHello("Ali");

// ---- Lesson 58 - Function Advanced Examples ----

// function sayHello(userName, age) {
//   if (age < 20) {
//     console.log("App Is Not Suitable For You!");
//   } else {
//     console.log(`Hello, ${userName}!, You Age Is ${age}`);
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

// ---- Lesson 59 - Function Return And Use Cases ----

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

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i === 15) {
//       return `Interrruptting`;
//     }
//   }
// }

// generate(10, 20);

// ---- Lesson 60 - Function Default Parameters ----

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

// console.log(sayHello());

// ---- Lesson 61 - Function Rest Parameters ----

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) { // Array of Arguments
//   // console.log(Array.isArray(numbers));
//   // return num1 + num2 + num3;

//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

// ---- Lesson 62 - Function Ultimate Practice ----

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
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`)
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Mustafa", 22, 20, "No", "Html", "CSS");

// ---- Lesson 63 - Random Arguments Function Challenge ----

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

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// showDetails(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, false, "Osama"); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ---- Lesson 64 - Anonymous Function And Practice ----

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

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// function sayHello() {
//   console.log("Hello, Mustafa");
// }

// document.getElementById("show").onclick = sayHello;

// setTimeout( function () {
//   console.log("Good");
// }, 2000);

// ---- Lesson 65 - Return Nested Function ----

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

// console.log(sayMessage("Osama", "Muhammed"));

// Example 2
// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Muhammed"));

// Example 3
// function sayMessage(fName, lName) {
//   let message = "Hello";
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Muhammed"));

// ---- Lesson 66 - Arrow Function Syntax ----

/*
  Function
  - Arrow Function
  - Regular Vs Arrow [Param + No Param]
  - Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => {
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

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));

// ? ---- Lesson 67 - Scope - Global And Local ----

/*
  Scope
  - Global And Local Scope
*/

// Global Scope
// var a = 1;
// let b = 2;

// function showText() {
//   // Local Scope
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

// ? ---- Lesson 68 - Scope - Block ----

/*
  Scope
  - Block Scope [If, Switch, For]
*/

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(x);

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

// ? ---- Lesson 69 - Scope - Lexical (Static) ----

/* Searching Topics Important

  JavaScript Function
  JavaScript Function Currying
  JavaScript Function Arrow Function
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
//     function grand() {
//       console.log(`From Grand ${a}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

// ? ---- Lesson 70 - Arrow Function challenge ----

/*
  Function Arrow Challenge
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...n) {
//   // Parameter ?
//   return `String [${n.join("], [")}] => Done !`;
// };

// MySolution
// Arrow Function In One Line
// let names = (...n) => `String [${n.join("], [")}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* =============================================== */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60]; // Array

// My Solution

// let calc = (one, two, ...nums) => one * two + nums[one- one][two-one/one] - nums[one - one][one - one]; // 10 * 4 + 40 = 80
// let calc = function (one, two, ...nums) {
//   return  one * two + nums[one- one][two-one/one] - nums[one - one][one - one]; // 10 * 4 + 40 = 80
// }

// console.log(calc(10, myNumbers.length, myNumbers)); // 80
// Another_Solution

// let calc = function (one, two, ...nums) {
//   return one + +two + +nums;
// }

// console.log(calc(10, myNumbers.shift(), myNumbers.shift()));  // 80

// ? ---- Lesson 71 - Higher Order Functions - Map ----

/*
  Higher Order Functions 
  ---> Is a function that accepts function as parameter and/or returns a function.

  - Map
  --- Method creates a new array
  --- populated with the results of calling a provided function on every element 
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The Current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array -> The current Array

  Notes:
  - Map Returns A New Array

  Examples
  - Anonymous Function
  - Named Function
*/

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];

// for(let i=0; i<myNums.length; ++i) {
//   newArray.push(myNums[i]+myNums[i]);
// }

// console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function(element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10)

// let addSelf = myNums.map((el) => el + el);
// console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }

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


// ? ---- Lesson 79 - Object - Introduction ----

