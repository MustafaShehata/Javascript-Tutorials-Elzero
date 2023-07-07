let points = 10;
/* My Solution
// Write Your Code Here
// points += points/points + points/points + points/points;
points += 3;s
console.log(points); // 13

// Write Your Code Here
points -= 5;

console.log(points); // 8;

*/

// Another Solution

console.log(points++ + points++ + ++points + points - --points - points-- - --points);
//            10     +   11     +     13   +   13   -     12   -   12     -     10      = 13
// console.log(10 + 11 + 13 + 13 - 12 - 12 - 10);

// points = 10 last edit in line 17

console.log(points++ + points++ + ++points - points - points);
//             10    +    11    +    13    -   13   -   13     = 8
// console.log(10 + 11 + 13 - 13 - 13); // 8

/* Another Solutions
let points = 10;
console.log(++points +(true + true)); // 13
console.log(--points -(true + true)); // 8;
*/