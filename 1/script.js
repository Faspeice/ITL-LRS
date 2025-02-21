
let firstName = prompt("Пожалуйста, введите ваше имя:","");
let lastName = prompt("Пожалуйста, введите вашу фамилию:","");
let birthYear = prompt("Пожалуйста, введите ваш год рождения (4 цифры):","");

birthYear = parseInt(birthYear);

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

document.getElementById("greeting").innerText = `Здравствуйте, ${firstName} ${lastName}, мы рады приветствовать Вас на нашем сайте!`;
document.getElementById("ageMessage").innerText = `В этом году Вам исполняется ${age} лет.`;
