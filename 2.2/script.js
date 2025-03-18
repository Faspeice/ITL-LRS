function generateAndPrintArray() {
    const rows = 6;
    const cols = 6;
    let array = Array.from({ length: rows }, () => Array(cols).fill(0));

    let num = 1;

    for (let j = 0; j < cols; j++) {
        array[0][j] = num++;
    }

    for (let i = 1; i < rows - 1; i++) {
        array[i][cols - 1] = num++;
    }

    for (let j = cols - 1; j >= 0; j--) {
        array[rows - 1][j] = num++;
    }

    for (let i = rows - 2; i > 0; i--) {
        array[i][0] = num++;
    }

    document.getElementById("output").textContent = array.map(row => row.join(" ")).join("\n");
}

