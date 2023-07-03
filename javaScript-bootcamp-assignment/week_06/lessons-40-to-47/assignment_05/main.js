let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Method One Solution:
if (haystack.includes(needle, 1)) console.log("Found");

// Method Two Solution:
if (haystack.indexOf(needle, 1)) console.log("Found");

// Method Three Solution:
if (haystack.lastIndexOf(needle, -2)) console.log("Found");

// Method Four Solution:
if (needle === haystack[1]) console.log("Found");
