// Задание 1: Время в alert
function showCurrentTime() {
    const now = new Date();
    alert(`Текущее время: ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`);
}

// Задание 2: ФИО (вывести 5 раз через цикл)
const surname = "Занковский";
const name = "Мирослав";

for (let i = 0; i < 5; i++) {
    document.write(`<p><strong>ФИО ${i + 1}:</strong> ${surname} ${name}</p>`);
}


// Задание 3: Массив, фильтр, замена
let mas = [5, -3, 7, -8, 12, 0, 4];
let n = 8; // номер варианта
let count = mas.filter(num => num < n).length;
let replaced = mas.map(num => num < 0 ? 100 : num);

document.write(`<p>Исходный массив: ${mas.join(', ')}</p>`);
document.write(`<p>Массив после замены: ${replaced.join(', ')}</p>`);
document.write(`<p>Количество элементов меньше ${n}: ${count}</p>`);

// Задание 4: Математическая функция
function calcY(x) {
    if (x === 0) {
        alert("Ошибка: деление на ноль недопустимо.");
        return null;
    }
    return (2 * x - 7) / (5 * x);
}

let Xs = [0, 2, 3, 7, 8, 10, 15];
Xs.forEach(x => {
    let y = calcY(x);
    if (y !== null) {
        document.write(`<p>x = ${x}, y = ${y.toFixed(2)}</p>`);
    }
});

// Задание 5: Работа со строкой
let S1 = "Я люблю Беларусь";
let S2 = "Я учусь в Политехническом колледже";

let len = S1.length;
let charAtN = S1.charAt(n - 1);
let ascii = S1.charCodeAt(n - 1);
let replacedStr = S1.replace(/ю/g, "Не");

document.write(`<p>Длина строки S1: ${len}</p>`);
document.write(`<p>Символ №${n}: ${charAtN} (ASCII: ${ascii})</p>`);
document.write(`<p>Строка после замены: ${replacedStr}</p>`);
