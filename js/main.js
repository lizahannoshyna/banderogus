document.getElementById("launch-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("email").value;
  const nameInput = document.getElementById('name').value.trim();
  
    if (!nameInput && emailInput) {
      alert("Будь ласка, заповніть поле 'Ім'я'");
    } else if (nameInput && !emailInput) {
      alert("Будь ласка, заповніть поле 'Email'");
    } else if (!nameInput && !emailInput) {
      alert("Будь ласка, заповніть обидва поля");
    } else {
      alert("Дякую! Гуся запущено 🚀");
    }

    if (emailInput.includes("@")) {
      alert("Бандерогуся успішно запущено! 🚀");
    } else {
      alert("Неправильний email");
    }
});
