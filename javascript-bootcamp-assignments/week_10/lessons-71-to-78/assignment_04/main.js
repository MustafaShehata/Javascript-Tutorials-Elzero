let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

numsAndStrings = numsAndStrings.filter(function(e){
    return !isNaN(e);
}).map(function(e){
    return -e;
});

console.log(numsAndStrings); // [-1, -10, 10, 20, -5, -3]
