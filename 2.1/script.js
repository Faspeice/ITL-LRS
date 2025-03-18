function multiplyUntilHundred() {
    let number;
    let result = 0;

    do {
        number = parseFloat(prompt("Введите число:"));
        if (isNaN(number)) {
            alert("Пожалуйста, введите корректное число.");
            continue;
        }

        let randomMultiplier = Math.random() * 10;
        result = number * randomMultiplier;

        alert(`Ваше число умножено на ${randomMultiplier.toFixed(2)}: результат = ${result.toFixed(2)}`);

    } while (result < 100);

    alert("Поздравляю! Полученное число больше 100.");
}
