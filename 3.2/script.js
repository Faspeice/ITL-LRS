let book = {
    ["title"]: "Война и мир",
    ["author"]: "Лев Толстой",
    ["year"]: 1869,
    ["genre"]: "Роман",
    ["pages"]: 1225
};

book["publisher"] = "Русский вестник";

delete book["pages"];

book.displayInfo = function() {
    let info = "";
    for (let key in this) {
        if (typeof this[key] !== "function") {
            info += `${key}: ${this[key]}\n`;
        }
    }
    alert(info);
};