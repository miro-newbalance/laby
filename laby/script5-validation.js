document.getElementById("promotion-form").addEventListener("submit", function (e) {
  const url = document.getElementById("site-url").value.trim();
  const budget = document.getElementById("budget").value.trim();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  let errors = [];

  // Простые проверки
  if (!/^https?:\/\//.test(url)) errors.push("Некорректный адрес сайта.");
  if (isNaN(budget) || +budget <= 0) errors.push("Введите корректный бюджет.");
  if (name.length < 2 || name.length > 20) errors.push("Имя должно быть от 2 до 20 символов.");
  if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) errors.push("Некорректный email.");
  if (!/^\d+$/.test(phone)) errors.push("Телефон должен содержать только цифры.");

  if (errors.length > 0) {
    e.preventDefault();
    alert("Ошибки:\n" + errors.join("\n"));
  }
});
