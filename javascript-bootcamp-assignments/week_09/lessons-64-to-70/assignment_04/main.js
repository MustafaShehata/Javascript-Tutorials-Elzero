// function specialMix(...data){
//     let sum=0;
//     for(let i=0; i<data.length; i++){
//         if(parseInt(data[i])){
//             sum += parseInt(data[i]);
//         }
//     }
//     return sum || "All Is Strings";
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// MySolution

function specialMix(...data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const parsed = parseInt(data[i]);
    if (!isNaN(parsed)) {
      sum += parsed;
    }
  }
  return sum || "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
