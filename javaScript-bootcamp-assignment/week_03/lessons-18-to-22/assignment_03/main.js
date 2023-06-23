let num = "10"; // This number is a string

// Solution One
console.log( +num + +num ); // 10 + 10 = 20

// Solution Two
console.log( +num * +num / +num + +num ); // 10 * 10 / 10 + 10 = 20

// Solution Three
console.log( +num + +num + +num - +num ); // 10 + 10 + 10 - 10 = 20

// Solution Four
console.log( +num + --num + --num - --num ); // 10 + 9 + 8 - 7 = 20

// Solution Five
console.log( --num * --num - +num - +num ); // 6 * 5 - 5 - 5 = 20 

// Solution Sex
console.log( +num * +num - +num ); // 5 * 5 - 5 = 25 - 5 = 20