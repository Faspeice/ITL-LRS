function checkMushroom() {
    let color = prompt("Введите цвет гриба (белый, желтый, красный, коричневый):").toLowerCase();
    let hasSkirt = prompt("Есть ли у гриба юбка? (есть, нет):").toLowerCase();

    switch (color) {
        case "белый":
            if (hasSkirt === "нет") {
                alert("Вы нашли белый гриб!");
            } else {
                alert("С грибами надо быть внимательными.");
            }
            break;
        case "красный":
            if (hasSkirt === "есть") {
                alert("А не мухомор ли это?");
            } else {
                alert("Может, это подосиновик?");
            }
            break;
        default:
            alert("С грибами надо быть внимательными.");
    }
}
