let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];


// let elzero = mix
//     .map(function (v) {
//         return isNaN(v) ? v : "";
//     })
//     .reduce(function (acc, curr) {
//         return acc + curr;
//     });

// console.log(elzero);

console.log(mix.map(e=>(isNaN(e))?e:"").reduce((acc, cur)=>acc+cur));