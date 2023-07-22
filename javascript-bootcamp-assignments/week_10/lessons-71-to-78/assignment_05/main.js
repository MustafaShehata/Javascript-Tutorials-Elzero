let nums = [2, 12, 11, 5, 10, 1, 99];

nums = nums.reduce(function(a, b){
    return b%2!==0? a+b: a*b;
}, 1);

console.log(nums); // 500