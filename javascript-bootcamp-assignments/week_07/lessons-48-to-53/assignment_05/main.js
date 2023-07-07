let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let cnt = letter.length;

for (let i = friends.length - friends.length; i < friends.length; i++) {
  if (friends[i][friends.length - friends.length] !== letter.toUpperCase()) {
    console.log('"' + cnt++ + " => " + friends[i] + '"');
  }
}

// Output
/*
  "1 => Sayed"
  "2 => Eman"
  "3 => Mahmoud"
  "4 => Osama"
  "5 => Sameh"
*/