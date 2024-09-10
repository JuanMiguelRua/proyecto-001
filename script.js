1// scripts.js

// Función para abrir diferentes servicios
function abrirServicio(tipo) {
    switch(tipo) {
        case 'casas':
            window.open('https://example.com/casas', '_blank');
            break;
        case 'interiores':
            window.open('https://example.com/interiores', '_blank');
            break;
        default:
            alert('Este servicio no está disponible en este momento.');
            break;
    }
}

// Validación de formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !email || !mensaje) {
            event.preventDefault();
            alert('Por favor, completa todos los campos del formulario.');
        } else if (!validarEmail(email)) {
            event.preventDefault();
            alert('Por favor, ingresa un correo electrónico válido.');
        } else {
            alert('Formulario enviado correctamente.');
        }
    });
});

// Función para validar email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Función para manejar los enlaces sociales (opcional, solo muestra mensaje)
function manejarEnlaceSocial(redSocial) {
    switch (redSocial) {
        case 'facebook':
            window.open('https://www.facebook.com/people/Juan-Miguel-Rua-Ortiz/pfbid022Qg5eYUs4MLNtuFmGUEpjybCfGQQumFZjJXjy1KJBK21vwvB6LiL5Lq7GvUuR5Wjl/?mibextid=ZbWKwL', '_blank');
            break;
        case 'gmail':
            window.open('mailto:example@example.com', '_self');
            break;
        default:
            alert('Red social no disponible.');
            break;
    }
}



