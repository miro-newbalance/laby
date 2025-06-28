// 1. alert - приветствие
window.onload = function() {
    alert("Добро пожаловать на страницу Ford Galaxy 2.3!");
};

// 2. confirm - подписка на рассылку
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('focus', function() {
        if (confirm("Хотите подписаться на рассылку?")) {
            const email = prompt("Введите email:", this.value || "");
            if (email !== null) {
                this.value = email;
                alert("Спасибо за подписку!");
            }
        }
    });
}

// 3. prompt - запрос имени
const nameInput = document.getElementById('name');
if (nameInput) {
    nameInput.addEventListener('click', function() {
        const name = prompt("Ваше имя:", this.value || "");
        if (name !== null) this.value = name;
    });
}

// 4. Проверка возраста перед отправкой формы
const form = document.querySelector('.promotion-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const age = parseInt(prompt("Сколько вам лет?") || 0);
        
        if (age < 18) {
            alert("Доступ запрещен для лиц младше 18 лет.");
            return;
        }
        
        if (confirm("Отправить заявку?")) {
            alert("Успешно!");
            this.submit();
        }
    });
}