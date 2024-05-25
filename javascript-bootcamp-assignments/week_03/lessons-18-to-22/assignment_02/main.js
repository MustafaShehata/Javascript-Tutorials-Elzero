let num = 3;

// Solution One
console.log(num + num); // 3 + 3 = 6

// Solution Two
console.log(num * num - num); // 3 * 3 - 3 = 6

// Soultion Three
console.log(num * --num); // 3 * 2 = 6

// Soultion Four
console.log(++num * num / num + num);  // 3 * 3 / 3 + 3 = 6

// Solution Five
console.log(num * ++num / --num + --num); // 3 * 4 / 3 + 2 = 6 

// Solution Six
console.log(num * ++num * --num / ++num + --num); // 2 * 3 * 2 / 3 + 2 = 12 / 3 + 2 = 4 + 2 = 6

// Solution Seven
console.log(num++ * num); // 2++ * 3 // Here num++ means Post-Increment to Increase num by 1 after this operation

// Solution Eight
console.log(--num ** num ** num / num - num); // Power "**" => 2^2^2/2-2 => 16/2-2=8-2=6

// NOTE: Learn how to "debug" the Code => Search for Debugging