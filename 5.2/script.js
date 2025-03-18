function addVerse() {
    let verseText = document.getElementById("verseInput").value;
    if (verseText.trim() === "") {
        alert("Введите текст куплета!");
        return;
    }

    let songContainer = document.getElementById("songContainer");
    let newVerse = document.createElement("p");
    newVerse.classList.add("verse");
    newVerse.textContent = verseText;
    songContainer.appendChild(newVerse);

    document.getElementById("verseInput").value = "";
}