let start = 0;
let swappedName = "elZerO";
let output = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    output += swappedName[i].toUpperCase();
  } else {
    output += swappedName[i].toLowerCase();
  }
}

console.log(output);

// Output
/*
  "ELzERo"
*/