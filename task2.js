const prompt = require("prompt-sync")()

function validarContrasenia(contrasenia) {
    let isNumeric
    let isMayusc;

    for (let i = 0; i < contrasenia.length; i++) {
        isNumeric=0
        if (!isNaN(contrasenia[i])) { // Comprueba si el carácter es un número;
            isNumeric = 1
            break;
        }
    }
    for (let i = 0; i < contrasenia.length; i++) {
       isMayusc = 0 
        if (contrasenia[i] >= 'A' && contrasenia[i] <= 'Z') { // Verifica si es una mayúscula
            isMayusc = 1;
            break;
        }
    }
    if (contrasenia.length >= 8 && isNumeric == 1 && isMayusc == 1) {
        return true;
    } else {
        return false;
    }
}

let pass = (prompt("Digite su contraseña: "))

let validarcontr = validarContrasenia(pass)

console.log("La validacion de su contraseña fue: " + validarcontr)