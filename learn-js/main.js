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

