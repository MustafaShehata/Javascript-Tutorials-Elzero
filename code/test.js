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