document.addEventListener('DOMContentLoaded', () => {

    const TO_CANCEL_URL = '../../index.html'; 
    

    const TO_SUCCESS_PAGE_URL = '../Logeado/Pagina_principal.html'; 

    const TO_REGISTER_URL = 'Registro.html'; 
    const TO_RECOVERY_URL = 'Recuperacion.html';

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
    const loginSubmitButton = document.querySelector('.btn-primary');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena'); 

    if (loginSubmitButton) {
        loginSubmitButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const email = correoInput ? correoInput.value.trim() : '';
            const password = contrasenaInput ? contrasenaInput.value.trim() : '';

            if (!email || !password) {
                alert("Por favor, ingresa tu correo y contraseña.");
                return;
            }
            if (!isValidEmail(email)) {
                alert("El formato del correo electrónico ingresado no es válido.");
                return;
            }

          
            console.log("Accediendo a: " + TO_SUCCESS_PAGE_URL);
            window.location.href = TO_SUCCESS_PAGE_URL;
        });
    }

    
    const cancelButton = document.querySelector('.btn-cancel');
    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            window.location.href = TO_CANCEL_URL;
        });
    }

  
    const createAccountButton = document.querySelector('.btn-create-account');
    if (createAccountButton) {
        createAccountButton.addEventListener('click', () => {
            window.location.href = TO_REGISTER_URL; 
        });
    }

    
    const forgotPasswordButton = document.querySelector('.btn-forgot-password');
    if (forgotPasswordButton) {
        forgotPasswordButton.addEventListener('click', () => {
            window.location.href = TO_RECOVERY_URL;
        });
    }
});