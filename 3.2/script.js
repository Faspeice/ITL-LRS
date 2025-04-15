let book = {
    ["title"]: "Война и мир",
    ["author"]: "Лев Толстой",
    ["year"]: 1869,
    ["genre"]: "Роман",
    ["pages"]: 1225
};

book["publisher"] = "Русский вестник";
book.somesome = "ssss";

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

function addInfo(){
    let infoName = prompt("Введите название свойства").toLowerCase();
    let info = prompt("Введите значение").toLowerCase();
    book.addProperty(infoName,info)
}
function deleteInfo(){
    let infoName = prompt("Введите название свойства").toLowerCase();
    book.deleteProperty(infoName)
}
book.addProperty = function (infoName, info) {
    book[infoName] = info
};

book.deleteProperty = function(infoName) {
    delete book[infoName]
}