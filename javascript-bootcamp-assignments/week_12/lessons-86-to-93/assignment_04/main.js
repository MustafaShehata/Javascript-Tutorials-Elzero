let one = document.querySelector(".one");
let two = document.querySelector(".two");



one.title = one.className;
two.title = two.className;


let content2 = two.innerHTML;
two.innerHTML = one.innerHTML + " " + one.attributes.length;

one.innerHTML = content2;

console.log(one);
console.log(two);

// * Searching For The Difference Between innerHTML and textContent