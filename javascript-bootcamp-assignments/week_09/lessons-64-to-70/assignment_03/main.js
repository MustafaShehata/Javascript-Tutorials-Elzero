// Convert This Function to Arrow Function Syntax
// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
//         };
//     };
// }

// Curring Function
const checker = (zName) => (status) => (salary) =>
    status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Ima Not Available`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available

