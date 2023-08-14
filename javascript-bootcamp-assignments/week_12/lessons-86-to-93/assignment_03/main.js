let result = document.getElementsByTagName("div")[0];
let dollar = document.getElementsByName("dollar")[0];

dollar.oninput = function(pound) {
    pound = dollar.value * 30.89;
    result.innerHTML = `${dollar.value} USD Dollar = ${pound.toFixed(2)} Egyptian Pound`;
};
