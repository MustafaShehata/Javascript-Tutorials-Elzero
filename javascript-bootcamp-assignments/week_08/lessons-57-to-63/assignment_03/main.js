function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`The Age: `)
    console.log(`${theAge} years`);
    let months = theAge * 12;
    console.log(`${months} months`);
    let weeks = months * 4;
    console.log(`${weeks} weeks`);
    let days = weeks * 7;
    console.log(`${days} days`);
    let hours = days * 24;
    console.log(`${hours} hours`);
    let minutes = hours * 60;
    console.log(`${minutes} minutes`);
    let seconds = minutes * 60;
    console.log(`${seconds} seconds`);
  } else {
    console.log("Age Out Of Range!");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months