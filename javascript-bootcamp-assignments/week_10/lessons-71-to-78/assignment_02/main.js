let myString = "EElllzzzzzzzeroo";

// let elzero = "";
// for (let i=0;i<myString.length;i++){
//     if (myString[i]!==myString[i+1])
//         if (i < myString.length) {
//         elzero += myString[i];
//     }
// }

// let elzero=myString.split("").filter(function(v, i){
//     return myString.indexOf(v) === i;
// }).join("");


// AnotherSolution
// let newArry = myString.split("").filter(function(ele,index){
//      return ele !== myString[index+true];
// }).join("");

// console.log(newArry);

// console.log(elzero); // Elzero


// my Solution - Rating:5 stars
const test = myString.split("").filter((e,i,a)=>{
  return !e.includes(a[i+1]);
}).join("");
console.log(test);

/** Review the String Functions or Methods */
