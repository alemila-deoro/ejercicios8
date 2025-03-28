const prompt = require("prompt-sync")()

    function cajaDeCambio(monto, monedaDestino) {
        if(monedaDestino.toLowerCase()==="usd"){
            return monto/4120
        }else{
            return monto/4453
        }
    }

    let montoPesos = Number(prompt("Digite el monto de pesos a cambiar: "))
    let monedaFin = (prompt("Digite la moneda a recibir(USD,EUR): "))

    console.log(cajaDeCambio(montoPesos,monedaFin))