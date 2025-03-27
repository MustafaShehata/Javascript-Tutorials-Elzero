// Wait the window to load
// window.onload=function(){
//   document.querySelector("h1").style.color='blue';
// };

// Single Line Comment
// Single Line Comment
// Single Line Comment

/* Single Line Comment */

/*
  1
  2
  3
  4
  5
*/

// ctrl + /

// note: Don't use comment if you are a pro in coding

/*
  Output to screen
  - window.alert()
  - document.write()
  - console.log()

  Syntax
*/

// window.alert('Hello from JS File'); // Don't use it. Use a popup message using Javascript

// document.write("<h1>Hello <span>Page</span></h1>");
// document.createElement("");

// console.log("Hello from JS file!");

// alert("Test");

// function getUsers() {
//   console.trace();
//   return [
//     {name: "Sayed", age: 28},
//     {name: "Muhammad", age: 39},
//     {name: "Ahmed", age: 35},
//     {name: "Ali", age: 45},
//     {name: "Kamal", age: 55}
//   ];
// }

// function getAllUsers() {
//   return getUsers();
// }

// function getAll() {
//   return getAllUsers();
// }

// let users = getAll();

// console.groupCollapsed("User List");
// users.forEach((e,i) => {
//   console.group(`User ${i+1}`);
//   // if(e.age < 30) console.error(e)
//   // if (e.age >= 50) console.warn(e);
//   // else console.log(e);
//   console.log(e.name, e.age);
//   console.groupEnd();
// });
// console.groupEnd();

// console.table(users);

// To measure the performance from time starting to timeEnd()
// console.time();

// for (let i = 0; i < 1000; i++) {
//   let x = new Date();
// }

// console.timeEnd();

/*
  console.log() = console.debug = console.info
  console.warn()
  console.error()
  console.clear()
  console.time()
  console.group() - console.groupCollapsed()
  console.table()
  console.trace()
*/

// let a = 10;
// let b = "20";
// let c = 80;

// console.log( ++a + +b++ + +c++ - +a++ );

/*
[++a]
value: 11
explain: preincrement
[+]
explain: addition operator
[+]
explain: Unary Operator
[b++]
value: 20
explain: postincrement
[+]
explain: addition operator
[+]
explain: unary operator
[c++]
value: 80
explain: postincrement
[-]
explain: subtraction operator
[+]
explain: unary operator
[a++]
value: 11
explain: postincrement

total: 11+20+80+11 = 20 + 80 = 100

*/

// console.log( ++a + -b + +c++ - -a++ + +a );
/*

*/

// console.log( --c + +b + --a * +b++ - +b * a + --a - +true );

// const a = 100;
// const b = 200.5;
// const c = 1e2;
// const d = 2.4;

// console.log(parseInt(Math.min(a, b, c, d)));

// console.log(Math.pow(a, parseInt(d))); // 10000

// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));

// // b + d
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2).toString()); // "66.67"
// console.log(); // 67 => Number

// console.log("Hi!");
// console.log("Hi!");
// console.log("Hi!");
// console.log("Hi!");
// console.log("Hi!");

// left ?? right

// Nullish Coalescing Operator returns left side except (null or undefined)

// const gameConfig = {
//   startingCoins: 0
// };

// const character = {
//   coins: gameConfig.startingCoins ?? 1000
// };

// console.info(character);

// ========================================================================================

// console.log("Hello World!");

// function printHeadline(headline) {
//   const headerOne=document.createElement("h1");
//   headerOne.textContent=headline;
//   document.body.appendChild(headerOne);
// }

// printHeadline("New H1 created with JavaScript");

// ========================================================================================

// Set the given checkbox (#my-checkbox) checked.

// function checkMe() {
//   const myCheckbox=document.getElementById("my-checkbox");
//   myCheckbox.checked = true;
//   console.log(myCheckbox);
// }

// checkMe();

// ========================================================================================

// function easyLoop() {
//   let string = "";
//   for(let i=0; i<=99; ++i) {
//     string+=i%7===0?i:"";
//   }
//   return string;
// }

// console.log(easyLoop());

// ========================================================================================

// Amazon Coding Interview Question - firstNonRepeatingCharacter

// ex1.   aaabcccdeeef
// Here's the NonRepeatingCharacter are b , d , f
// but we need the first one so it will be  "b"
// Implement all the cases from One character to 10000

// const s = "aaabcccdeeef";

// const inp = "aaabcccdeeef";

// const nonRepeatingCharacters = [];
// const repeatingCharacters = [];

// // if(inp.length === 1){
// //   nonRepeatingCharacters.push(inp[0]);
// // }


// for(let i = 0; i < inp.length; i++){
//   for(let j = 0; j < inp.length; j++){
//     let isDup = false;
//     if(inp[i] === inp[j] && i !== j){
//       repeatingCharacters.push(inp[j]);
//       isDup = true
//       break;
//     }if(!isDup){

//       nonRepeatingCharacters.push(inp[i]);
//     }
//   }

// }

// const firstNonRepeatingCharacter = nonRepeatingCharacters[0];


// console.log(repeatingCharacters);
// console.log(nonRepeatingCharacters);
// console.log(firstNonRepeatingCharacter);

// const s = "aebcbdefa";


// const firstNonRepeatingCharacter = (s) => {
//   for (let i=0; i<s.length; i++) {
//     let seenDuplicate = false;
//     for (let j=0; j<s.length; j++) {
//       if (s.charAt(i) === s.charAt(j) && (i !== j)) {
//         seenDuplicate = true;
//         break;
//       }
//     }
//     if (!seenDuplicate) return s.charAt(i);
//   }
//   return "_";
// };

// const s = "cdchgdhe";

// console.log(firstNonRepeatingCharacter(s));

// ========================================================================================


