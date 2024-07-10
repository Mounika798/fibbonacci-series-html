function generateFibonacci() {
    const num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num) || num < 1) {
        alert('Please enter a positive integer.');
        return;
    }

    const result = document.getElementById('result');
    result.innerHTML = '';

    let a = 0, b = 1;
    let series = [a];

    while (b <= num) {
        series.push(b);
        [a, b] = [b, a + b];
    }

    result.innerHTML = series.join(', ');
}
