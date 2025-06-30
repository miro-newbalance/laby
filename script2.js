document.addEventListener("DOMContentLoaded", () => {
  const titleOutput = document.getElementById("doc-title-output");
  titleOutput.textContent = "Заголовок документа: " + document.title;

  setTimeout(() => {
    console.log("document.title повторно через 2 секунды:", document.title);
  }, 2000);

  // Клик по элементу с ФИО → добавляем дату рождения
  const fioElement = document.getElementById("fio");
  fioElement.addEventListener("click", () => {
    // Предотвращаем дублирование даты при многократных кликах
    if (!document.getElementById("birth-date")) {
      const birth = document.createElement("p");
      birth.id = "birth-date";
      birth.textContent = "Дата рождения: 26.01.2007";
      fioElement.after(birth);
    }
  });
});
