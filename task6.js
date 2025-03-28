const prompt = require("prompt-sync")()

    function contarPalabras(cadena) {
        let contador=1
        for(let n = 0; n<=cadena.length;n++){
            if(cadena[n]===" "){
                contador+=1
            }
        }
        return contador;
    }

    let cadenaTotal = (prompt("Digite una cadena: "))

    console.log(contarPalabras(cadenaTotal))