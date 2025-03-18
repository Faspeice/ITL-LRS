function adjustBackgroundColor() {
    let now = new Date();
    let day = now.getDate();
    let hour = now.getHours();
    let isFirstHalf = hour < 12;
    let isEvenDay = day % 2 === 0;
    let color;

    if (isEvenDay && isFirstHalf) {
        color = "lightblue"; // Голубая гамма
    } else if (isEvenDay && !isFirstHalf) {
        color = "yellow"; // Желтая гамма
    } else if (!isEvenDay && isFirstHalf) {
        color = "lightgreen"; // Зеленая гамма
    } else {
        color = "violet"; // Фиолетовая гамма
    }

    document.body.style.backgroundColor = color;
}

window.onload = adjustBackgroundColor;