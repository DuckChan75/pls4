document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const operation = document.getElementById('operation').value;
    const func = document.getElementById('functionSelect').value;
    const xVal = parseFloat(document.getElementById('xInput').value);
    const resultDiv = document.getElementById('result');

    let result;

    if (operation === "derivative") {
        result = calculateDerivative(func, xVal);
        resultDiv.textContent = `Derivative of ${func} at x = ${xVal}: ${result}`;
    } else if (operation === "integral") {
        result = calculateIntegral(func, xVal);
        resultDiv.textContent = `Integral of ${func} from 0 to ${xVal}: ${result}`;
    }
});

function calculateDerivative(func, x) {
    switch (func) {
        case "x^2": return 2 * x;
        case "x^3": return 3 * x ** 2;
        case "sin(x)": return Math.cos(x);
        case "cos(x)": return -Math.sin(x);
        case "e^x": return Math.exp(x);
        case "ln(x)": return x === 0 ? NaN : 1 / x;
        default: return NaN;
    }
}

function calculateIntegral(func, x) {
    switch (func) {
        case "x^2": return (1 / 3) * x ** 3;
        case "x^3": return (1 / 4) * x ** 4;
        case "sin(x)": return -Math.cos(x);
        case "cos(x)": return Math.sin(x);
        case "e^x": return Math.exp(x);
        case "ln(x)": return x * Math.log(x) - x; // Integral of ln(x) is x ln(x) - x
        default: return NaN;
    }
}
