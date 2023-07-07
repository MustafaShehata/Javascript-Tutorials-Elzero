// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
let num = 110; // "110"

// -------- MySolution --------
// Using Ternary Operator Syntax
num < 10 
    ? console.log(`00${num}`)
    : num > 10 && num < 100
    ? console.log(`0${num}`)
    : console.log(num);

// Using If Condition Statemnet 
if (num < 10) console.log(`00${num}`);
else if (num > 10 && num < 100) console.log(`0${num}`);
else console.log(num);
