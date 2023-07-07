let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
  if (typeof friends[index] === "string") {
    // friends[index].startsWith("A") !== true
    if (friends[index][friends.length - friends.length] !== "A")
      console.log(++counter + " => " + friends[index]);
  }
  index++;
}

// Output
/*
  "1 => Sayed"
  "2 => Mahmoud"
*/