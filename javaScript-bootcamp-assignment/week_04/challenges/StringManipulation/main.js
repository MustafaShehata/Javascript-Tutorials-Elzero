let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.substr(-4, 1).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // [Elzero]

// Use Only "substr" Method + Template Leterals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(a.charAt(0).toLowerCase() + a.substring(1, a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase()); // eLZERO WEB SCHOOl