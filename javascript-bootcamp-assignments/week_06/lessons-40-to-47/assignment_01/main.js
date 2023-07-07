let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-myFriends.length, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 4
// myFriends.length = num; // 3
// console.log(myFriends); // ["Ahmed", "Elham", "Osama]
