let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

/* First Solution */
my.reverse().splice(zero, --counter);

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

/* Second Solution */
console.log(my.slice(++zero, ++counter)); // ["Elham", "Mazero"]

/* Third Solution */
console.log(
  (my[--counter][(--zero, counter)] = "El" + my[counter].slice(counter))
); // "Elzero"

/* Fourth Solution */
console.log(
  my[counter].slice(-counter, --zero) +
    my[counter][--my[counter].length].toUpperCase()
); // "rO"

// ------------ Another Solution --------------------

// /* First Solution */
// my.reverse(); // Reverse the Array Elements
// my.shift(); // Remove the First Elemnet Of Array "Ameer"
// my.shift(); // Remove the First Element after Remove Gamal will Remove "Gamal"
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// /* Second Solution */
// // my.slice(4 - 3, 3) = my.slice(1, 3) - ["Elham", "Mazero"]
// console.log(my.slice(length - counter, counter)); // ["Elham", "Mazero"]

// /* Third Solution */
// console.log(
//   // my.slice(1, 3)[0].slice(0, 2) - "Elham" - El
//   my
//     .slice(length - counter, counter)
//     [zero].slice(zero, length - counter) /* El */ +
//     my
//       .slice(length - counter, counter) /* "Elham", "Mazero" */
//       [my.length - counter] /* "Mazero" */
//       .slice(my.length - counter + my.length - counter) /* zero */
// ); // Elzero

// // console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

// /*  Fourth Solution */
// console.log(
//   my
//     .slice(length - counter, counter) /* ["Elham", "Mazero"] */
//     [my.length - counter] /* "Mazero" */
//     .slice(my.length, my.length + my.length - counter) /* ro */ +
//     my
//       .slice(length - counter, counter) /* ["Elham", "Mazero"] */
//       [my.length - counter] /* "Mazero" */
//       .slice(my.length + my.length - counter) /* o */
//       .toUpperCase() /* O */
// ); // rO
