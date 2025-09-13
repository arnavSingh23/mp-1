function getValues() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    return [num1, num2];
}

function displayResult(result) {
    const output = document.getElementById("output");
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function addNumbers() {
    const [num1, num2] = getValues();
    displayResult(num1 + num2);
}

function subtractNumbers() {
    const [num1, num2] = getValues();
    displayResult(num1 - num2);
}

function multiplyNumbers() {
    const [num1, num2] = getValues();
    displayResult(num1 * num2);
}

function divideNumbers() {
    const [num1, num2] = getValues();
    if (num2 === 0) {
        displayResult("Error: Divide by zero");
    } else {
        displayResult(num1 / num2);
    }
}

function powerNumbers() {
    const [base, exponent] = getValues();
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    displayResult(result);
}

function clearCalc() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}
