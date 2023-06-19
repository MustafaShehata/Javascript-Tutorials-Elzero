// ? Comments: are lines of code that Javascript will intentionally ignore
// They're just used to create notes for yourself and others about what the code does.
// var number = 5; // in-line comment
/*
    this 
    is
    multi-line
    comment
*/
// number = 9;

// --------------------------------------------------------------------

// ? Data Types:
// undefined, null, boolean, string, symbol, number, and object

/*
    undefined: is something that hasn't been defined, 
    you may have a variable that you havn't set to be anything yet.

    null: nothing means that you does have value for this variable.

    boolean: means true or false

    string: sequence of characters or array of characters - text

    symbol: is a immutable primitive value that is unique

    object: can store a lot of diffeent key value pairs.
*/

// search for difference between data and information

// variable allows computer to store and manipulate data in a dynamic fashion. like box has label and value or data

// var myName = "Beau" // we use var as variable to be able to be used throughout your whole program
// myName = 8 // you can set it to be something else.
// let outName = "freeCodeCamp" // will only be used within the scope of where you declared that.
// const pi = 3.14 // is a variable that should never change. it can never change. if you do try to change it, you'll get an Error

// --------------------------------------------------------------------

// ? storing values with Assignment Operators
// there's a difference between declaring variables and assigning variables.

// You end all lines in JavaScript with a Semicolon. you can skip the semicolons completely,
// but most people recommend that you put a semicolon just so it's obvious where the end of the line is.

// var a // declaring variable
// var b = 2 // declaring and assigning variable
// a = 7;

// b = a; // I've now assigned the contents of a to b.

// console.log(a); // in the console it shows 7.

/*
    var a;
    var b = 2;
    console.log(a); // null/undefined search for differences
    a = 7;
    b = a;
    console.log(a); // 7
    console.log(b); // 7
*/

// --------------------------------------------------------------------

// Initialize these three variables
// var a = 5;
// var b = 10;
// var c = "I am a";

// Do not change code below this line
// a = a + 1; // 6
// b = b + 5; // 15
// c = c + " String!"; // I am a String!

// --------------------------------------------------------------------

// Case Senstivity in Variables
// best case to use camel-case
// var stdylyCapVar;
// var properCamelCase;
// var titleCaseOver;

// Assignments

// This is wronge because it's case sensitive

// STUDLYCAPVAR = 10;
// PROperCAmelCAse = "a String";
// tITLEcAEoVER = 9000;

// These identifiers is true

// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// --------------------------------------------------------------------

// ? Adding Numbers

// var sum = 10 + 0;
// console.log(sum); // 10
// var sum1 = 10 + 10;
// console.log(sum1);

// ? Subtracting Numbers

// var difference = 45 - 0; // 45

// ? Multiplying Numbers

// var product = 8 * 10; // 80

// ? Dividing Numbers
// var quotient = 66 / 33; // 2

// ? Incrementing Numbers
// var myVar = 87;
// Only change code below this line
// myVar = myVar + 1; // incremented myVar by 1 // 88
// myVar++; // 89
// ++myVar; // 90

// var myVar = 11;
// myVar = myVar - 1; // decremented myVar by 1 // 10
// myVar--; // 9
// --myVar; // 8

// ? Decimal Numbers
// var ourDecimal = 5.7;
// var myDecimal = 0.009;

// ? Multiply Decimals
// var product = 2.0 * 2.5;
// console.log(product);

// ? Divide Decimals point numbers
// var quotient = 0.0 / 2.0;

// ? Finding a Remainder
// var remainder;

// remainder = 11 % 3; // 2

// if you remainder even number over 2 it will equals to 0 so it will be even otherwise Odd ==> n % 2 == 0 even number 

// ? Compound Assignment with Augmented Addition

// var a = 3;
// var b = 17;
// var c = 12;

// a += 12; // a = a + 12;
// b += 9; // b = b + 9;
// c += 7; // c = c + 7;

// ? Compound Assignment with Augmented Subtraction

// var a = 11;
// var b = 9;
// var c = 3;

// a = a - 6; // a -= 6;
// b = b - 15; // b -= 15;
// c = c - 1; // c -= 1;

// ? Compound Assignment with Augmented Multiplication

// var a = 5;
// var b = 12;
// var c = 4.6;

// a *= 5; // a = a * 5;
// b *= 3; // b = b * 3;
// c *= 10; // c = c * 10;

// ? Compound Assingment with Augmented Division
// var a = 48;
// var b = 108;
// var c = 33;

// a = a / 12; // a/= 12;
// b = b / 4; // b /= 4;
// c = c / 11; // c /= 11;

// --------------------------------------------------------------------

// ? Declare String Variables "stringValue"
// Example

// var firstName = "Alan";
// var lastName = "Turing";

// var myFirstName = "Beau";
// var myLastName = "Carnes";

// --------------------------------------------------------------------

// ? Escaping Literal Quotes in Strings
// There is no difference between "double quotes" and 'single quote' 
// var myStr1 = "I am a \"double quoted\" string inside \"double quotes\"";
// var myStr2 = 'I am a "double quoted" string inside "double quotes"';
// console.log(myStr1);
// console.log(myStr2);

// ? Quoting String with Single Quotes
// var myStr3 = "<a href=\"http://www.example.com\" target=\"_blank\">link</a>";
// console.log(myStr3);
// var myStr4 = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr4);

// --------------------------------------------------------------------

// ? Escape Sequences in Stings


/*****
CODE OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      new line 
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*****/

// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// --------------------------------------------------------------------

// ? Concatenating Strings with plus Operator
// example
// var ourStr = "I come First. " + "I come second.";

// var mystr = "This is the start. " + "This is the end. ";
// console.log(mystr); // "This is the start. This is the end."

// ? Concatenating Strings with Plus Equals Operator
// Example
// var ourStr = "I come first. ";
// ourStr += "I come second.";

// var myStr = "This is the first sectence. ";
// myStr += "This is the second sentence.";
// console.log(myStr);

// ? Constructing Strings with Variables
// Exmaple
// var ourName = "freeCodeCamp";
// var ourStr = "Hello, our name is " + ourName + ", how are you?";

// var myName = "Beau";
// var myStr = "My name is " + myName + " and I am well!";
// console.log(myStr);

// ? Appending Variables to Strings
// Exmaple
// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective; // "freeCodeCamp is awesome!"
// console.log(ourStr);

// var someAdjective = "worthwhile";
// var myStr = "Learning to code is ";
// myStr += someAdjective;
// console.log(myStr);

// ? Find Length Of String
// Example
// var firstNameLength = 0;
// var firstName = "Ada";

// firstNameLength = firstName.length; // 3

// setup
// var lastNameLength = 0;
// var lastName = "Lovelace";

// Only change code below this line.

// lastNameLength = lastName.length; // 8
// console.log(lastNameLength);

// ? Bracket Notation to Find First Character in String
// Example
// var firstLetterOfFirstName = "";
// var firstName = "Ada";
// firstLetterOfFirstName = firstName[0]; // A
// console.log(firstLetterOfFirstName);

// setup
// var firstLetterOfLastName = "";
// var lastName = "Lovelace";

// firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName); // L

// ? String Immutability
// means they cannot be altered once created.
// This doesn't maen that they can't be changed, 
// just that the idividual character of a string literal cannot be changed.


// setup
// var myStr = "Jello World";

// myStr = "Hello World";
// console.log(myStr);

// ? Bracket Notation to Find Nth Character in String
// Example
// var firstName = "Ada";
// var secondLetterOfFirstName = firstName[1]; // d
// console.log(secondLetterOfFirstName);

// setup
// var lastName = "Lovelace";

// Change Code below this line
// var thirdLetterOfLastName = lastName[2]; // v
// console.log(thirdLetterOfLastName);

// ? Bracket Notation to Find Last Character in String
// Example
// var firstName = "Ada";
// var lastLetterOfFirstName = firstName[firstName.length - 1]; // index = 3-1= 2 ==> a

// setup 
// var lastName = "lovelace";
// var lastLetterOfLastName = lastName[lastName.length - 1]; // index = 8 - 1 = 9 ==> e

// ? Bracket Notation to Find Nth-to-Last Character in String
// Example
// var firstName = "Ada";
// var thirdToLastLetterOfFirstName = firstName[firstName.length - 3]; // A
// console.log(thirdToLastLetterOfFirstName);

// setup
// var lastName = "lovelace";
// var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // c
// console.log(secondToLastLetterOfLastName);

// ? Word Blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your Code Below This Line
    // var result = "";
    // result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    // Your Code Above This Line
    // return result;
// }

// change the words here to test your function
// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// --------------------------------------------------------------------

// ? Store Multiple Values with Arrays
// Example
// var outArray = ["John", 23];

// Only change code below this line.
// var myArray = ["Quincy", 1];

// ? Nested Arrays

// Example
// var ouArray = [
//     ["the universe", 42], 
//     ["everything", 101010]
// ];
// Only change code below this line.
// var myArray = [["Bulls", 23], ["White Sox", 45]];

// ? Access Array Data With Indexes

// Example
// var ourArray = [50, 60, 70];
// var ourData = ourArray[0]; // equals 50
// var ourData2 = ourArray[1]; // equals 60
// var ourData3 = ourArray[2]; // equals 70

// setup
// var myArray = [50, 60, 70];

// Only change code below this line
// var myData = myArray[0]; // 50
// console.log(myData);

// ? Modify Array Data With Indexes

// Example
             // 0   1   2
// var ourArray = [18, 64, 99];
// ourArray[1] = 45; // ourArray now equals [18, 45, 99].

// Setup
// var myArray = [18, 64, 99];

// Only Change Code Below This Line.
// myArray[0] = 45;
// console.log(myArray);

// ? Access Multi-Dimensional Array With Indexes
// Setup
// var myArray = [
//     [1, 2, 3], // 0
//     [4, 5, 6], // 1
//     [7, 8, 9], // 2
//     [[10, 11, 12], 13, 14] // 3
// ];

// Only Change code below this line.
// var myData = myArray[0][0]; // 1
// var myData2 = myArray[3][0][2]; // 12
// console.log(myData2);

// ? Manipulate Arrays with push()

// Example
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
// var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
// myArray.push(["dog", 3]);

// console.log(myArray[2]);

// ? Manipulate Arrays with pop()
// Example
// var ourArray = [1, 2, 3];
// var removedFromOurArray = ourArray.pop(); // remove last element in the array
// removedFromOurArray now equals 3, and ourArray now equals [1, 2]

// Setup
// var myArray = [["John", 23], ["cat", 2]];

// Only Change Code Below This Line
// var removedFromMyArray = myArray.pop();
// console.log(removedFromMyArray); // ["cat", 2]
// conole.log(myArray[0]); // ["Johm", 23]

// ? Manipulate Arrays With shift()

// Exmaple
// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift(); // shift or remove first element
// removedFromOurArray now equals "stimpson" and ourArray now equals ["J", ["cat"]]

// setup
// var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
// var removedFromMyArray = myArray.shift();
// console.log(removedFromMyArray); // ["John", 23]
// console.log(myArray[0]); // ["dog", 3]

// ? Manipulate Arrays with unshift()
// Exmaple
// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy"); // adds at element to the beginning of the array.
// ourArray now equals ["Happy", "J", "cat"]

// setup
// var myArray = [["John", 23], ["dog", 3]];
// myArray.shift(); // shift index 0 is equal to ["John", 23]

// Only Change Code Below this line.
// myArray.unshift("Paul", 35);
// console.log(myArray);

// ? Shopping List
// var mylist = [
//     ["cereal", 3], 
//     ["milk", 2], 
//     ["bananas", 3], 
//     ["juice", 2], 
//     ["eggs", 12]
// ]; // array of arrays which is our shopping list.

// --------------------------------------------------------------------


// ? Write Reusable Code with Fuctions
// Example

// This is how a function is set up.
// function ourReusableFuction(/* we can pass information into the parenthesis */) {
//     console.log("Heyya, World!");
// }
// Functions allow us to create reudable code in Js

// ourReusableFuction(); // the function is being called or invoked by just putting the fuction name with parenthesis after the name.

// Only Change Code Below This Line
// function reusableFunction() {
//     console.log("Hi, World!");
// } // end Function
// reusableFunction();

// ? Passing Values to Functions With Arguments

// Example
// function ourFunctionWithArgs(a, b) {
//     console.log(a - b);
// }

// ourFunctionWithArgs(10, 5); // Output 5

// Only Change Code Below This Line

// function functionWithArgs(a, b) {
//     console.log(a + b);
// }

// functionWithArgs(10, 5);


// ? Global Scope and Functions
// Scope refers to the visibility of variables.
// Variables which are defined outside of a function block have a global scope.
// Global Scope means they can be seen everywhere in your Js Code.

// Declare Your Variable here
// var myGlobal = 10; // Since طالما this is set outside of a function, we can see it "anywhere" in the whole code.


// function fun1() {
    // Assign 5 to oopsGlobal Here
    // oopsGlobal = 5; // no var keyword for declaring it so it will global automatically.
// }
// normally if you do use a var keyword, since this is within a function, it will be scoped محدودة داخل الدالة to that function.

// Only Change code above this line

// function fun2() {
//   var output = "";
  // if statement
//   if (typeof myGlobal != "undefined") output += "myGlobal: " + myGlobal; // myGlobal variable is global here, we can access it here
//   if (typeof oopsGlobal != "undefined") output += " oopsGlobal: " + oopsGlobal; // oopsGlobal is global here, coz we declared it without a var keyword
//   console.log(output); // myGlobal: 10 oopsGlobal: 5
// }
// fun1(); // call the function to see oopsGlobal as global variable inside fun2()
// fun2();



// ? local Scope And Functions

// function myLocalScope() {
//     var myVar = 5; // local variable within this function
//     console.log(myVar);
// }

// myLocalScope();
// console.log(myVar); // errer because it is trying to access myVar outside of the function.

// ? Global vs. Local Scope in Functions

// var outerWear = "T-Shirt";

// function myOutfit() {
//     var outerWear  = "sweater"; // local variable toke precedence over the global variable.
//     return outerWear;
// }

// console.log(myOutfit()); // sweater
// console.log(outerWear); // T-Shirt

// ? Return a value from a Function With Return

// function minusSeven(num) {
//     return num-7;
// }

// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }

// console.log(timesFive(5));

// ? Understanding Undefined Value Returned from a Function

// var sum = 0; // global variable is defined outside of the function


// if you don't specify a return value, the return value is just undefined.
// function addThree() {
//     sum = sum + 3;
//     return sum;
// }

// console.log(addThree()); // 3

// function addFive() { // void funtion so it returns "undefined" or "nothing"
//     sum += 5;
// }

// console.log(addFive()); // 5

// ? Assignment With A Returned Value

// var changed = 0;

// function change(num) {
//     return (num + 5) / 3; 
// }

// changed = change(10);
// console.log(changed); // 5

// var processed = 0;

// function processArg(num) {
//     return (num+3) / 5;
// }

// processed = processArg(7);
// console.log(processed); // 2


// ? Stand in Line - important and review

// queue is an abstract data structure where items are kept in order.
// New items can be added to the back of the queue and old items are taken off from the front of the queue.

// function nextInLine(arr, item) {
       // Your Code here
//     arr.push(item);
//     return arr.shift(); // remove the first item
// }

// var testArr = [1, 2, 3, 4, 5];

// JSON.stringify() is just a way to change an array into a string that can easily be printed out to the screen.

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));


// ? Boolean Values

// boolean is another datatype in js it takes true or false

// function welcomeToBooleans() {
//     return false;
// }

// ? Use Conditional Logic With If Statements   [Control of flow - flow Control]

// Exmaple
// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue)
//         return "Yes, it's true";
//     return "No, it's false";
// }

// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue)
//         return "Yes, that was true";
//     return "No, that was false";
// }

// console.log(trueOrFalse(true));



// --------------------------------------------------------------------



// ? Comparison with the Equality Operator

// Setup
// function testEqual(val) {
//     if (val == 12) { // change this line
//         return "Equal";
//     }
//     return "Not Equal";
// }


// Change this value to test
// console.log(testEqual(10)); // Not Equal

// ? Comparison With The "Strict Equality Operator" ===

/*
    3 === 3 -- true
    3 === '3' -- false 
    3 == 3 -- true
    3 == '3' -- true
*/

// Setup

// function testStrict(val) {
//     if (val == 7) {
//         return "Equal";
//     }
//     return "Not Equal";
// }

// Change this value to test
// console.log(testStrict('7'));

// ? Practice Comparing Different Values

// Setup
// function compareEquality(a, b) {
//     if (a == b) { // Since we're using the equality operator with two equal signs, it performs a type conversion. and it converts the string into a "number".
//         return "Equal";
//     }
//     return "Not Equal";
// }

// Change this value to test
// console.log(compareEquality(10, "10"));

// ? Comparison with the Inequality Operator

// Setup
// function testNotEqual(val) {
//     if (val != 99) {
//         return "Not Equal";
//     }
//     return "Equal";
// }

// Change this value to test
// console.log(testNotEqual(10));

// ? Comparison with the strict Inequality Operator

// Setup
// function testStrictNotEqual(val) {
    // Only change code below this line
    // if (val !== "10") {
        // Only Change Code Above This Line
        // return "Not Equal";
    // }
    // return "Equal";
// }

// Change this value to test
// console.log(testStrictNotEqual(10));

// ? Comparison With the Logical And Operator

// function testGreaterThan(val) {
    // if (val > 100) {
        // return "Over 100";
    // }
    // if (val > 10) {
    //     return "Over 10";
    // }
    // return "10 or Under";
// }

// Change This value to test
// console.log(testGreaterThan(10));

// ? Comparison with the Greater Than Or Equal To Operator

// function testGreaterOrEqual(val) {
//     if (val >= 20) {
//         return "20 or Over";
//     }
//     if (val >= 10) {
//         return "10 or Over";
//     }
//     return "Less than 10";
// }

// Change This Value To Test
// console.log(testGreaterOrEqual(10));

// ? Comparison With The Less Than Operator

// function testLessThan(val) {
//     if (val < 25) {
//         return "Under 25";
//     }
//     if (val < 55) {
//         return "Under 55";
//     }

//     return "55 or Over";
// }

// Change this value to test
// console.log(testLessThan(10));

// ? Comparison with the Less Than Or Equal To Operator

// function testLessOrEqual(val) {
//     if (val <= 12) {
//         return "Smaller Than or Equal to 12";
//     }

//     if (val <= 24) {
//         return "Smaller Than Or Equal to 24";
//     }

//     return "More Than 24";
// }

// Change This Value to test
// console.log(testLessOrEqual(10));

// ? Comparison With The Logical And Operator -- And / Or Operators

// function testLogicalAnd(val) {
    // Only Change Code below This Line
    
    // if (val <= 50) {
    //     if (val >= 25) {
    //         return "Yes";
    //     }
    // }

    // if (val <= 50 && val >= 25)
    //     return "Yes";

    // Only Change Code Above This Line

    // return "No";
// }

// change this value to test
// console.log(testLogicalAnd(10));

// ? Comparison With The Logical Or Operator -- And / Or Operators

// function testLogicalOr(val) {
    // only change code below this line
//     if (val < 10 || val > 20) {
//         return "Outside";
//     }

    // if (val > 20) {
    //     return "Outside";
    // }

    // Only change code above this line
//     return "Inside"
// }


// ? Else Statement

// function testElse(val) {
//     var result = "";

    // Only change code below this line
//     if (val > 5) {
//       result = "Bigger than 5";
//     } else {
//       result = "5 or Smaller";
//     }
    // if (val <= 5) {
    //     result = "5 or Smaller";
    // }

    // Only change code above this line
//     return result;
// }

// ? Else If Statements

// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }
// }

// Change This Value To Test
// console.log(testElseIf(7));

// ? Logical Order In If Else Statements

// function orderMyLogic(val) {
//     if (val < 5) {
//         return "Less than 5";
//     } else if (val < 10) {
//         return "Less than 10";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(orderMyLogic(3));

// ? Chaining If Else Statements

// function testSize(num) {
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//             return "Small";
//     } else if (num < 15) {
//         return "Medium";
//     } else if (num < 20) {
//         return "Large";
//     } else {
//         return "Huge";
//     }
// }

// console.log(testSize(7));

/*
    Write chained if / else if statements to fullfill the following conditions:

    num < 5 - return "Tiny"
    num < 10 - return "small"
    num < 15 - return "Medium"
    num < 20 - return "Large"
    num >= 20 - return "Huge"
*/

// ? Golf Code

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bodey", "Go Home!"];
// function golfScore(par, strokes) {
//     if (strokes == 1) {
//         return names[0];
//     } else if (strokes <= par - 2) {
//         return names[1];
//     } else if (strokes == par - 1) {
//         return names[2];
//     } else if (strokes == par) {
//         return names[3];
//     } else if (strokes == par + 1) {
//         return names[4];
//     } else if (strokes == par + 2) {
//         return names[5];
//     } else if (strokes >= par + 3) {
//         return names[6];
//     }
// }

// Change these values to test
// console.log(golfScore(5, 4)); // Birdie
// console.log(golfScore(5, 2)); // Eagle
// console.log(golfScore(5, 8)); // Go Home!

/*
    Strokes         Return
    1               "Hole-in-one!"
    <= par - 2      "Eagle"
    par - 1         "Birdie"
    par             "Par"
    par + 1         "Bogey"
    par + 2         "Double Bogey"
    >= par + 3      "Go Home!"
*/

// ? Switch Statements

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//         case 1: 
//             answer = "alpha";
//             break;
//         case 2: 
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }
//     return answer;
// }

// console.log(caseInSwitch(3));

/**
 * Write a switch statements which tests val and sets answer for the following conditions:
 * 1 - "alpha"
 * 2 - "beta"
 * 3 - "gamma"
 * 4 - "delta"
*/

// ? Default Option in Switch Statements

// function switchOfStuff(val) {
//     var answer = "";
//     switch (val) {
//         case "a":
//             answer = "apple";
//             break;
//         case "b":
//             answer = "bird";
//             break;
//         case "c":
//             answer = "cat";
//             break;
//         default: 
//             answer = "stuff";
//             break;
//     }
//     return answer;
// }


// Change this Value to test
// console.log(switchOfStuff("c"));

// ? Multiple Identical Options In Switch Statements

// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "low";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = "Mid";
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = "High";
//             break;
//     }
//     return answer;
// }

// Change This Value to Test
// console.log(sequentialSizes(8)); // High

// ? Replacing If Else Chains with Switch

// function chainToSwitch(val) {
//     var answer = "";
//     // Only change code below this line
//     switch(val) {
//         case "bob":
//             answer = "Marley";
//             break;
//         case 42:
//             answer = "The Answer";
//             break;
//         case 1:
//             answer = "There is no #1";
//             break;
//         case 99:
//             answer = "Missed me by this much!";
//             break;
//         case 7:
//             answer = "Ate Nine";
//             break;
//     }

    // if (val == "bob") {
    //     answer = "Marley";
    // } else if (val == 42) {
    //     answer = "The Answer";
    // } else if (val === 1) {
    //     answer = "There is no #1";
    // } else if (val === 99) {
    //     answer = "Missed me by this much!";
    // } else if (val == 7) {
    //     answer = "Ate Nine";
    // }


// }

// ? Returning Boolean Values From Functions

// function isLess(a, b) {

    // fix this code
    // if (a < b) return true;
    // else return false;
//     return a < b;
// }

// Change these values to test
// console.log(isLess(10, 15));  // True
// console.log(isLess(20, 15));  // False

// ? Returning Early Pattern from Functions

// Setup

// function abTest(a, b) {
    // Only Change code below this line
//     if (a < 0 || b < 0) return undefined;


    // Only Change Code Above This Line
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// Change Values Below To Test Your Code
// console.log(abTest(-2, 2));

// ? Counting Cards

// var count = 0;
// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 7:
//         case 8:
//         case 9:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }

//     var holdbet = "hold";
//     if (count > 0) holdbet = "Bet";
    // return "Change Me!";
//     return count + " " + holdbet;
// }

// console.log(cc(2)); // 1 Bet
// console.log(cc("K")); // 0 hold
// console.log(cc(10));  // -1 hold
// console.log(cc("K")); // -2 hold
// console.log(cc("A")); // -3 hold
// console.log(cc(4)); // -2 hold

// ? Build JavaScript Objects

// Example
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// Only change code below this line.
// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": []
// };

// ? Accessing Object Properties With Dot Notation

// Setup
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };

// Only change code below this line

// var hatValue = testObj.hat; // Change this line
// var shirtValue = testObj.shirt; // Change this line


// ? Accessing Object Properties With Bracket Notation

// Setup
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "vaggies",
//     "the drink": "water"
// };

// Only change code below this line

// var entreeValue = testObj["an entree"];
// var drinkValue = testObj['the drink'];

// console.log(entreeValue); // hamburger

// ? Accessing Object Properties with Variables

// Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// Only change code below this line;
// var playerNumber = 16; // Change this line
// var player = testObj[playerNumber]; // Change this line

// ? Updating Object Properties

// Example
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// ourDog.name = "Happy Camper";

// Setup
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// Only change code below this line

// myDog.name = "Happy Coder"; // Change the Object Value
// console.log(myDog.name);

// ? Add New Properties to an Object

// Example
// var outDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// outDog.bark = "bow-wow";

// Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// Only Change Code below this line 
// myDog['bark'] = "woof!";

// ? Delete Properties form an Object

// Example
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"],
//     "bark": "bow-wow"
// };

// delete ourDog.bark; // delete a bark form Object "ourDog"

// Setup
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };

// Only Change Code below This Line.

// console.log(delete myDog.tails); // true
// console.log(delete myDog["tails"]); // true


// ? Using Objects for Lookups

// Setup
// function phoneticLookup(val) {
//     var result = "";

    // Only Change Code below This Line

    // var lookup = {
    //     "alpha": "Adams",
    //     "bravo": "Boston",
    //     "charlie": "Chicago",
    //     'delta': "Denver",
    //     "echo": "Easy",
    //     "foxtrot": "frank"
    // };
    // result = lookup[val];
    // Only Change Code Above This Line
//     return result;
// }

// Change This Value To Test
// console.log(phoneticLookup("charlie"));

// ? Test Objects for Properties

// Setup
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
    // Your Code Here
//     if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp];
//     else return "Not Found!";
// }

// Test Your Code by modifying these values
// console.log(checkObj("Hello"));

// ? Manipulating Complex Objects

// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold": true
//     },
//     // Add Record Here
//     {
//          "artist": "Beau Carnes",
//          "title": "Cereal Man",
//          "release_year": 2003,
//          "foramts": [
//             "YouTube video"
//          ]
//     }
// ]

// ? Accessing Nested Objects

// Setup
// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"]; //Change This Line

// console.log(gloveBoxContents); // maps

// ? Accessing Nested Arrays

// Setup
// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// // Only Change code below this line

// var secondTree = myPlants[1].list[1]; 
// console.log(secondTree); // "pine"

// ? Record Collection -- Important

// Setup
// var collection = {
//     "2548": {
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robrt Palmer",
//         "tracks": [ ]
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };

// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line
// function updateRecords(id, prop, value) {
//     if (value === "") delete collection[id][prop];
//     else if (prop === "tracks") {
//         collection[id][prop]  = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     }    
//     else collection[id][prop] = value;
//     return collection;
// }


// // Alter values below to test your code
// updateRecords(2468, "tracks", "test");
// console.log(updateRecords(5439, "artist", "ABBA"));

// ? Iterate with While Loops

// var myArray = [];

// var i = 0;
// while (i < 5) {
//     myArray.push(i);
//     i++;
// }

// console.log(myArray); // 0 1 2 3 4

// ? Iterate with For Loop

// Example
// var ourArray = [];

// for (var i = 0; i<5; i++) {
//     ourArray.push(i);
// }

// // Setup
// var myArray = [];

// // Only Change code below this line.
// for (var i = 1; i < 6; i++) {
//     myArray.push(i);
// }

// console.log(myArray);

// ? Iterate Odd Numbers with a for Loop

// Example
// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//     ourArray.push(i);
// }
// console.log(ourArray);

// // Setup
// var myArray = [];
// // Only change code below this line

// for (var i = 1; i < 10; i+=2) {
//     myArray.push(i);
// }
// console.log(myArray);

// ? Count Backwards With a For Loop

// Example
// var ourArray = [];

// for (var i = 10; i > 0; i -= 2) {
//     ourArray.push(i);
// }

// console.log(ourArray);

// // Setup
// var myArray = [];

// // Only change code below this line

// for (var i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }

// console.log(myArray);

// ? Iterate Through an Array with a For Loop

// Example
// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }

// console.log(ourTotal);
// // Setup

// var myArr = [2, 3, 4, 5, 6];
// var total = 0;

// for (var i = 0; i < myArr.length; i++) {
//     total += myArr[i];
// }

// console.log(total);

// ? Nesting For Leops

// function multiplyAll(arr) {
//     var product = 1;

//     for (var i = 0; i < arr.length; i++) 
//         for (var j = 0; j < arr[i].length; j++)  
//             product *= arr[i][j];

//     return product;
// }

// var product = multiplyAll([
//     [1,2],
//     [3,4],
//     [5,6,7]
// ]);

// console.log(product);

// ? Iterate with Do-while Loops

// Setup
// var myArray = [];
// var i = 10;

// // Only change code below this line.

// // while (i < 5) { // 10 < 5  ==> false
// //     myArray.push(i);
// //     i++;
// // }

// do {
//     myArray.push(i); // [10]
//     i++; // 11
// } while (i < 5); // 11 < 5 ==> false

// console.log(i, myArray); // 11, [10]

// ? profile Lookup -- "not Completed"

// function lookUpProfile(name , prop) {
//     for (var i = 0; i < contancts.length; i++) {
//         if(contacts[i].firstName === name) {
//             return contacts[i][prop] || "No Such Contact!";
//         }
//     }
//     return "No Such Contact!";
// }

// // Change these values to test your function
// var data = lookUpProfile("Akira", "likes");

// console.log(data);

// ?  Generate Random Fraction

// function randomFraction() {
//     return Math.random()*10;
// }

// console.log(randomFraction());

// ? Generate Random Whole Numbers

// var randomNumberBetween0And19 = Math.floor(Math.random() * 20);

// function randomWholeNum() {
//     return Math.floor(Math.random()*10); // 0 ot 9
// }

// console.log(randomWholeNum());

// ? Generate Random Whole Numbers within a Range

// Example
// function ourRandomRange (ourMin, ourMax) {
//     return Math.floor(Math.random() * (ourMax-ourMin + 1)) + ourMin;
// }

// ourRandomRange(1, 9);

// // only change code below this line.

// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// var myRandom = randomRange(5, 15);

// console.log(myRandom);

// ? Use the parseInt Function

// function convertToInteger(str) {
//     return parseInt(str); // return it as a number or an integer
// }

// convertToInteger("56");

// Nan - not a number

// ? Use the parseInt function with a Radix

// Radix spedifies the base of the number in the string.

// function convertToInteger(str) {
//     return parseInt(str, 2);
// }

// // Binary number 0, or 1 // convert this binary number to decimal to 19
// console.log(convertToInteger("10011")); 


// ? Use the Conditional (Ternary) Operator

// Condition ? statement-if-true : statement-if-false;

// function checkEqual(a, b) {
//     // return a=== b ? ture : false;
//     return a === b;
// }

// checkEqual(1, 2);

// ? Use Multiple Conditional (Ternary) Operators

// function checkSign(num) {
//     // if (num > 0) 
//     //     return "positive";
//     // else if (num < 0) 
//     //     return "Negative";
//     // else 
//     //     return "Zero";
//     return num > 0 ? "positive": num < 0 ? "negative" : "zero";
// }

// console.log(checkSign(0));

// ? Differences Between the "var" and "let" Keywords

// var catName = "Quicy";
// var quote;

// var catName = "Beau";

// ! note let doesn't allow you to declare a variable twice but var allows to do it

// function catTalk() {
//     "use strict";

//     catName = "Oliver";
//     quote = catName + " say Meow!";
// }

// catTalk();

// ? Compare Scopes Of The var and let Keywords

// var Keyword
// It is declared globally or locally if declared indide a function

// let Keyword
// the scope of let is limited to the block statement or expression that it was declared in.

// function checkScope() {
//     "use strict";
//     // var i = "function scope"; // globally variable
//     // let i = "function scope"; // block scope variable
//     if (true) {
//         var i = "block scope";
//         console.log("Block scope i is: ", i);
//     }
//     console.log("Function scope i is: ", i);
//     return i;
// }

// checkScope();

// ? Declare a Read-Only Variable with the const Keyword

// function printManyTimes(str) {
//     "use strict";

//     const SENTENCE = str + " is cool!"; 
//     // SENTENCE = str + " is amazing!"; // error read only /index:js:1 - TypeError Assignment to constant variable.

//     for (let i = 0; i < str.length; i+=2)
//         console.log(SENTENCE);
// }

// printManyTimes("freeCodeCamp");

// ? "Mutate" An Array Declared With Cosnt

// const s = [5, 7, 2];
// function editInPlace() {
//     "use strict";

//     // s = [2, 5, 7];
//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
// }

// editInPlace();

// console.log(s);  // 2 5 7

// ? Prevent Object Mutation

/*
"use strict";
const myArray = [1, 2, 3, 4]; // you can modify an array
Object.freeze(myArray); // freeze on entire array it silently ignores the assignment and allows the modification to occur.
try {
    myArray[0] = 5;     // Attempt to modify an element
    myArray.push(5);    // Attempt to add an element
    myArray.pop();      // Attempt to remove an element
} catch (ex) {
    console.log(ex);
}
console.log(myArray);  // Output: [1, 2, 3, 4]
*/

// "const" with variables can't change the value of it,
// but with array and object can change the value of them.
// but with array and object using "Object.freeze()" can't be changed value of Object and array.

// function freezeObj() {
//     "use strict"; // Strict mode is a feature introduced in ECMAScript 5 (ES5)
//     const MATH_CONSTANTS = { PI: 3.14 };

//     Object.freeze(MATH_CONSTANTS); // We can't change the value of PI

//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch (ex) {
//         console.log(ex);
//     }
    
//     return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);

// ? Use Arrow Function to Write Concise مختصر Anonymous Functions  -- Need to understand -- Searching

// var magic = function() {
//     return new Data();
// };

// var magic = () => {
//     return new Data();
// };

// const magic = () => new Data();

// ? Write Arrow Functions With Parameters

// Anonymous funciton
// const myConcat = function(arr1, arr2)
// {
//     return arr1.concat(arr2);
// }

// // var myConcat = (arr1, arr2) => {
// //     return arr1.concat(arr2);
// // };

// // var myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

// ? Write Higher Order Arrow Functions

// const realNumberArray = [ 4, 5.6, 6, 3.14, 42, 8.34, -2];

// Anonymous Function
// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map( x => x * x);
//     return squaredIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// ? Write Higher Order Arrow Functions - Searching - Try to Understand it

// // Immediate Execution - Code Executed Immediately
// const increment = (function() {
//         return function increment(number, value = 1) {
//         return number + value;
// };
// })();

// // const increment = (
// //     function () { // anonymous fun
// //         function increment(num, value = 1) { // normal fun
// //             return num + value;
// //         }
// //         return increment;
// //     }
// //     ) ();

// console.log(increment(5, 2)); // 7
// console.log(increment(5)); // 6

// ? Use the Rest Operator with Function Parameters  -- Need To Be Understood

// const sum = (function() {
//     return function sum(...args) {
//         // const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3));


// ? Use the Spread Operator to Evaluate Arrays In-Place - Back To It Again

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']; // Array
// let arr2;
// // Immediate Execution
// (function() {
//     arr2 = [...arr1];
//     // arr2 = arr1; // copy
//     arr1[0] = 'potato'; // ["potato", "FEB", "MAR", "APR", "MAY"]
//     arr1[5] = 1;
// })();
// console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
// console.log(arr1); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 1]

// const originalVariable = 10;
// let copy = originalVariable;

// console.log(copy); // 10
// console.log(originalVariable); // 10

// copy = 20;
// // originalVariable = 11;

// console.log(copy); // 11
// console.log(originalVariable); // 11

// ? Use Destructuring Assignment To Assign Variables From Objects

// var voxel = {x: 3.6, y: 7.4, z: 6.54};

// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

// const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {
//     "use strict";
//     const { tomorrow : tempOfTomorrow } = avgTemperatures; // Change this line
//     return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES));

// ? Destructuring Assignment with Nested Objects

// const LOCAL_FORECAST = {
//     today: {min: 72, max: 83 },
//     tomorrow: {min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrw(forecast) {
//     "use strict";

//     const {tomorrow: {max: maxOfTomorrow }} = forecast;

//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrw(LOCAL_FORECAST));


// ? Use Destucturing Assignment To Assign Varaibles from Arrays

// const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y);

// let a = 8, b = 6;
// (() => {
//     "use strict";
//     [a, b] = [b, a];
// }) ();
// console.log(a); // 6
// console.log(b); // 8

// ? Use Destructuring Assignment With the Rest Operator 3:03:50

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//     const [ , , ...arr] = list;

//     return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr); // [3, 4, 5, 6, 7, 8, 9, 10]
// console.log(source); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ? Use Destructuring Assignment to Pass an object as a Function's Parameters

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };

// const half = (function() {
//     return function half({max, min}) {
//         return (max + min) / 2.0;
//     };
// }) ();
// console.log(stats);
// console.log(half(stats));

// ? Create Strings Using Template Literals

// const person = {
//     name: "zodiac Hasbro",
//     age: 56
// };

// // Template literal with multi-line and string interpolation
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);


// // ---------------------------------------------
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//     const resultDisplayArray = [];
//     for (let i = 0; i < arr.length; ++i) {
//         resultDisplayArray.push(`<li class="test-warning">${arr[i]}</li>`);
//     }
//     return resultDisplayArray;
// }

// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

// ? Write Concise Object literal Declarations Using Simple Fields

// const createPerson = (name, age, gender) => ({name, age, gender });
// // {
// //     return {
// //         name: name,
// //         age: age,
// //         gender: gender
// //     };
// // };

// console.log(createPerson("Zodiac Hasbro", 56, "male"));

// ? Write Concise Declarative Functions

// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// ? Use Class Syntax To Define a Constructor Function

// var SpaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

// class SpaceShuttle {
//     constructor(targetPlanet) {
//         this.targetPlanet = targetPlanet;
//     }
// }
// var zeus = new SpaceShuttle('Jupiter');

// console.log(zeus.targetPlanet); // Jupiter

// function makeClass() {
//     class Vegetable {
//         constructor(name) {
//             this.name = name;
//         }
//     }
//     return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);

// ? Use getter and setters to Control Access to an Object

// class Book {
//     constructor(author) {
//         this._author = author;
//     }

//     // getter
//     get writer() {
//         return this._author;
//     }
//     // setter
//     set writer(updateAuthor) {
//         this._author = updateAuthor;
//     }
// }

// function makeClass() {
//     class Thermostat {
//         cosntructor(temp) {
//             this._temp = 5/9 * (temp-32);
//         }
//         get temperature() {
//             return this._temp;
//         }
//         set temperature(updatedTemp) {
//             this._temp = updatedTemp;
//         }

//     }
//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature = 26;
// temp = thermos.temperature;

// console.log(temp);

// ? Understand the Differences Between Import and require
// import * as capitalizeStrings from "string_function";

// import { capitalizeString } from "string_function";

// const cap = capitalizeString("Hello!");

// console.log(cap);

// ? Use export to Reuse a Code Block

// const capitalizeString = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

// export { capitalizeString };

// export const foo = "bar";
// export const bar = "foo";

// ? Use * to Import Everything from a File 

// import * as capitalizeStrings from "string_function";

// ? Create an Export FallBack with Export default

// export default function subtract(x, y) {
//     return x - y;
// }

// ? Import a Default Export

// import subract from "math_functions"

// subtract (7, 4);

// ---------------------- The End ---------------------- //