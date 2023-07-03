let num1 = 10;
let num2 = 30;
let num3 = "30";

// Ternary Operator Syntax
// num3 is a string so it will be converted to a number with comparison Operator ">"
if (num3 > num1 && num3 !== num2 && num3 == num2 && num3 !== num1)
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number\n" + 
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number\n" +
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );

// Another Solution
if (((num3 > num1) && (num3 !== num2)) && ((num3 > num1) && (num3 !== 2)) && ((num3 !== num1) && (num3 == num2)))
    console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number\n" +
        "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number\n" +
          "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    );

// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"