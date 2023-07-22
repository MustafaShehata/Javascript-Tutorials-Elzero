let myArray = ["E", "l", "z", ["e", "r"], "o"];

// myArray = myArray.reduce(function(a,b){
//     return a.concat(b);
// }, []).join("");

// Arrow Function
myArray = myArray.reduce((a,b) => a.concat(b), []).join("");

console.log(myArray);

// Elzero