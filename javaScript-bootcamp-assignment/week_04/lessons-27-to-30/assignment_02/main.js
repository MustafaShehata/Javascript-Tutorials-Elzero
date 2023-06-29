let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterZ, 2)); // True (letter, index Start from Zero)
console.log(word.endsWith(letterZ, 3)); // True (letter, length for Start)

console.log(word.startsWith(letterE.toUpperCase(), 0)); // True
console.log(word.endsWith(letterO.toLowerCase(), word.length)); // True