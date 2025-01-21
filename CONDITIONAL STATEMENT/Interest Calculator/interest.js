function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    let interest;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        interest = 'Invalid input. Please enter positive numbers.';
    } else {
        interest = (principal * rate * time) / 100;
    }

    document.getElementById('result').innerText = `Interest: ${interest.toFixed(2)}`;
}
