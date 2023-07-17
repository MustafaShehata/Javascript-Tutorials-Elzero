function multiply(...n) {
  let m = 1;
  for (let i = 0; i < n.length; i++) {
    if (typeof n[i] === "string")
      continue;
    m *= parseInt(n[i]);
  }
  console.log(m);
}



multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
