document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login__form');
    const emailInput = document.getElementById('login__email__input');
    const passwordInput = document.getElementById('login__password__input');

    const SUCCESS_URL = '/html/home__page.html';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const passwordRegex = /^.{6,}$/; 

    const showToast = (message, type) => {
        const background = type === 'error' 
            ? "linear-gradient(to right, #ff5f6d, #ffc371)"
            : "linear-gradient(to right, #00b09b, #96c93d)";

        Toastify({
            text: message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true, 
            style: {
                background: background,
            },
        }).showToast();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (!emailRegex.test(emailValue)) {
            showToast("Пожалуйста, введите корректный Email", "error");
        }

        if (!passwordRegex.test(passwordValue)) {
            showToast("Пароль должен содержать минимум 6 символов", "error");
            return;
        }

        showToast("Успешный вход! Переадресация...", "success");

        setTimeout(() => {
            window.location.href = SUCCESS_URL;
        }, 1500); 
    });
});