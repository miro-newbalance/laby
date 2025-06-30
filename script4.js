window.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("infoShown")) {
    const osInfo = navigator.userAgent;
    const newWin = window.open("", "", "width=400,height=300");

    if (newWin) {
      newWin.document.write(`<h3>Информация о системе</h3>`);
      newWin.document.write(`<p>userAgent: ${osInfo}</p>`);
      sessionStorage.setItem("infoShown", "true");

      setTimeout(() => {
        newWin.close();
      }, 5000);
    }
  }
});
