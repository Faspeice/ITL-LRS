function checkAnswer() {
    let userAnswer = document.forms["quizForm"]["answer"].value;
    let correctAnswer = document.forms["quizForm"].dataset.correct;
    if (userAnswer === correctAnswer) {
        alert("Правильно!");
    } else {
        alert("Неправильно!");
    }
}