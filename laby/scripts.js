function addToCart() {
    alert("Товар добавлен в корзину!");
}
const budgetInput = document.getElementById('budget');
if (budgetInput) {
    budgetInput.addEventListener('change', function() {
        const budget = parseInt(this.value);
        if (budget < 10000) {
            alert("Малый бюджет. Рекомендуем SEO-оптимизацию.");
        } else if (budget >= 10000 && budget < 50000) {
            alert("Средний бюджет. Можно запустить контекстную рекламу.");
        } else if (budget >= 50000) {
            alert("Крупный бюджет. Доступны все услуги!");
        } else {
            alert("Введите корректную сумму.");
        }
    });
}
const services = document.querySelectorAll('input[name="service"]');
services.forEach(service => {
    service.addEventListener('change', function() {
        switch(this.value) {
            case 'seo':
                console.log("SEO: Продвижение в поисковиках");
                break;
            case 'ads':
                console.log("Контекстная реклама: Реклама в Google/Yandex");
                break;
            case 'development':
                console.log("Разработка: Создание сайта");
                break;
            default:
                console.log("Другая услуга");
        }
    });
});
const tableRows = document.querySelectorAll('table tr');
for (let i = 0; i < tableRows.length; i++) {
    if (i % 2 === 0) {
        tableRows[i].style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
}
let counter = 0;
while (counter < 3) {
    console.log(`Рекламное сообщение ${counter + 1}`);
    counter++;
}
let password;
do {
    password = prompt("Введите пароль (12345):");
} while (password !== "12345" && password !== null);

if (password === "12345") {
    alert("Доступ разрешен!");
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue; // Пропускаем нечетные
    if (i === 8) break; // Выходим на 8
    console.log(i); // Выведет 2, 4, 6
}
function calculatePower(volume) {
    if (volume <= 0) return "Ошибка: неверный объем";
    return (volume * 60) + " л.с."; // Упрощенная формула
}

console.log("Мощность 2.3 л:", calculatePower(2.3));
