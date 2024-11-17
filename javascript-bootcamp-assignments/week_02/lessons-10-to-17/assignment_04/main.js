let a = 21;
let b = 20;

// _21_2021_2021_2021_20_

// Using Normal Concatenation
console.log("_" + a + "_" + b + "" + a + "_" + b +
            "" + a + "_" + b + "" + a + "_" + b + "_");
// Using Template Literals (backtick)
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);