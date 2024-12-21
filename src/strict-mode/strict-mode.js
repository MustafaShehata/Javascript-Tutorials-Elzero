// "use strict";

// let variable = "value";

// vriable = 10; // Test

// console.log(variable, window.vriable);

// undefined = 10; // readOnly property
// NaN = 10; // readOnly property

// console.log(window.NaN);
// console.log(window.undefined);
// console.log(undefined);

// const obj = {};

// Object.defineProperty(obj, "readOnly", { writable: false, value: 10 });

// obj.readOnly = 15;

// console.log(obj);

// const obj = {
//   "age": 30,
//   "HI" : function(){
//     return `Hi`;
//   },
//   get readOnly(){
//     return 10;
//   },
// }

// obj.readOnly = 15;

// console.log(obj);
// console.log(obj["HI"]());
// console.log(obj.readOnly);

// delete Object.prototype;

// function combine(a, a, c){
//   return [a, a, c];
// }

// console.log(combine(1, 2, 3)); // [2, 2, 3]


// console.log(0o15); // Octal // 13

// console.log(035); // Octal // 29


// const v = "value";

// // const v = {};

// v.prop = 10;
// "value".prop = 10;

// // Undefined
// console.log("value".prop);
// console.log(v.prop);


// function sum(a, b) {
//   // console.log(this); // in strict mode => Undefined
//   return a + b;
// }

// console.log(this);  // Window Object
// sum.bind(10)(1, 2);


// function sum(a, b) {
//   "use strict";
//   a = 10; // local value of variable
//   return [a + b, arguments[0] + arguments[1]]; // 12, 3
// }

// console.log(sum(1, 2));