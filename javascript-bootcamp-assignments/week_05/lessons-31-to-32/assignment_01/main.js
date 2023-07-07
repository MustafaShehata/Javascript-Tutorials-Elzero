console.log(100 == "100"); // true - Number == String - Same Value - Different Type

console.log(100 !== 1000); // true - Number !== Number - Different Value - Same Type
console.log(100 < 1000); // true - Number < Number - Different Value - Same Type

console.log(110 > 100 > 10 < 20); // true - 110 > 100 > 10 < 20 - Same Value - Same Type
console.log(110 === 100 - 10 + 20); // true - 110 === 110 - Same Value - Same Type

console.log(-10 == "-10"); // true - Number == String - Same Value - Different Type

console.log(!(-50 === +"-40")); // true - ! -50 !== -40 - Differnet Value - Same Type
console.log(!(-50 >= +"-40")); // true - ! -50 !== -40 - Differnet Value - Same Type

console.log(!(10  === -"-40")); // true - ! 10 !== -40 - Different Value - same Type
console.log(typeof 10  ===  typeof -"-40"); // true - typeof 10 === typeof -"-40" - Different Value - same Type

console.log(!("10" != 10)); // true - ! "10" != 10 - Same Value - Different Type
console.log(!("10" === 10)); // true - ! "10" === 10 - Same Value - Different Type

console.log(!(20 == false)); // true ! 20 == false = !(false) - Different Value - Different Type 
console.log(typeof 20 !== typeof false); // true typeof 20 !== typeof false = !(false) - Different Value - Different Type 
console.log( 20 >= false); // true 20 >= false = !(false) - Different Value - Different Type 