document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const response = document.getElementById("responseMessage");

    if (form && response) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                response.textContent = "Спасибо! Ваше сообщение отправлено.";
                response.style.color = "green";
                form.reset();
            } else {
                response.textContent = "Пожалуйста, заполните все поля.";
                response.style.color = "red";
            }
        });
    }
});