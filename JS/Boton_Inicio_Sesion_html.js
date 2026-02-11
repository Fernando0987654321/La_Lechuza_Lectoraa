document.addEventListener('DOMContentLoaded', () => {

    const headerLoginButtons = document.querySelectorAll('.btn-primary');
    const userLoginURL = '/html/Inicio_de_sesion/Inicio_sesion.html';

    headerLoginButtons.forEach(button => {
    
        if (button.textContent.trim() === 'Iniciar Sesión') {
            button.addEventListener('click', () => {
                // Redirigimos a la pantalla de login
                window.location.href = userLoginURL;
            });
        }
    });

    const btnLoginRedirect = document.getElementById('btn-login-redirect');
    if (btnLoginRedirect) {
        btnLoginRedirect.onclick = () => {
            window.location.href = userLoginURL;
        };
    }
});