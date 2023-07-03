let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs += arr2.slice(arr2.indexOf("F"), arr2.lastIndexOf("Y")); // 2, 3 Not Inlcuded End
allArrs += arr1.slice(arr1.lastIndexOf("X")); // X
allArrs += arr2.slice(arr2.lastIndexOf("Y")); // Y
console.log(allArrs.toLowerCase()); // fxy

allArrs = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase(); // fxy
console.log(allArrs); // fxy
