function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let expression = display.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log10'); // Math.log10 is used for common logarithm (base 10)

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}
