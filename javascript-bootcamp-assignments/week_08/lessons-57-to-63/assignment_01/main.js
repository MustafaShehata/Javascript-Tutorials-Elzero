function sayHello(theName, theGender) {
  switch (theGender) {
    case "Male":
      theGender = "Mr";
      break;
    case "Female":
      theGender = "Miss";
      break;
    default:
      console.log(`Hello, ${theName}`);
      return;
  }
  console.log(`Hello, ${theGender} ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"