const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operation = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            currentInput = '';
            previousInput = '';
            operation = '';
            display.value = '';
        } else if (buttonText === "=") {
            if (currentInput && previousInput && operation) {
                const result = evaluate(previousInput, currentInput, operation);
                display.value = result;
                currentInput = result;
                previousInput = '';
                operation = '';
            }
        } else if (['+', '-', '*', '/'].includes(buttonText)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operation = buttonText;
            }
        } else {
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});

function evaluate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b === 0 ? 'Error' : a / b;
        default:
            return 0;
    }
}