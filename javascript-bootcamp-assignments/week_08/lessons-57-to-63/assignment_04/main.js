// First_Solution
function checkStatus(a, b, c) {
  let name;
  let age;
  let isAvailable;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") name = arguments[i];
    else if (typeof arguments[i] === "number") age = arguments[i];
    else {
      if (arguments[i]) isAvailable = `Yor Are Available For Hire`;
      else isAvailable = `Yor Are Not Available For Hire`;
    }
  }
  console.log(`Hello ${name}, Your Age Is ${age}, ${isAvailable}`);
}

// Second_Solution
// function checkStatus(a, b, c) {
//   let n, ag, s;
//   if (typeof a === "string") n = a;
//   else if (typeof a === "number") ag = a;
//   else s = a;
//   if (typeof b === "string") n = b;
//   else if (typeof b === "number") ag = b;
//   else s = b;
//   if (typeof c === "string") n = c;
//   else if (typeof c === "number") ag = c;
//   else s = c;
//   if (s) s = "You Are Available For Hire";
//   else s = "You Are Not Available For Hire";
//   console.log(`Hello ${n}, Your Age Is ${ag}, ${s}`);
// }


// Third_Solution
// function checkStatus(a, b, c) {
//   let name;
//   let age;
//   let status;
//   typeof a === "string"
//     ? (name = a)
//     : typeof a === "number"
//     ? (age = a)
//     : (status = a);
//   typeof b === "string"
//     ? (name = b)
//     : typeof b === "number"
//     ? (age = b)
//     : (status = b);
//   typeof c === "string"
//     ? (name = c)
//     : typeof c === "number"
//     ? (age = c)
//     : (status = c);
//   status
//     ? (status = "You Are Available For Hire")
//     : (status = "You Are Not Available For Hire");
//   console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
// }

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"