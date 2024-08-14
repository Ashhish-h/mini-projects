function calculator() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.getElementById('opr');
    const result = document.getElementById('result');
    if (operation.value == '+') {
        let res = num1 + num2;
        console.log(res);
        result.innerHTML = `result = ${res}`;
    }

    if (operation.value == '-') {
        let res = num1 - num2;
        console.log(res);
        result.innerHTML = `result = ${res}`;
    }

    if (operation.value == '*') {
        let res = num1 * num2;
        console.log(res);
        result.innerHTML = `result = ${res}`;
    }

    if (operation.value == '/') {
        let res = num1 / num2;
        console.log(res);
        result.innerHTML = `result = ${res}`;
    }

    if (operation.value == '%') {
        let res = num1 % num2;
        console.log(res);
        result.innerHTML = `result = ${res}`;
    }
}



function calculateBMI() {
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid number');
        return;
    }

    const bmi = weight / (height * height);
    const result = document.getElementById('result');

    let bmiStatus = '';
    if (bmi < 18.5) {
        bmiStatus = 'UnderWeight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiStatus = 'Normal Weight';
    } else if (bmi > 25 && bmi <= 29.9) {
        bmiStatus = 'OverWeight';
    } else {
        bmiStatus = 'obese';
    }

    result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiStatus})`;
}