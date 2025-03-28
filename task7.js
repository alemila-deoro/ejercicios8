const prompt = require("prompt-sync")()

    function appBancaria(saldo, monto) {
        nuevoSaldo = saldo-monto
        if(nuevoSaldo<=0){
            console.log("Saldo insuficiente")
        }else{
            console.log("el nuevo saldo es: "+nuevoSaldo)
        }
    }

    let saldoActual = (prompt("Digite saldo actual: "))
    let montoRetirar = (prompt("Digite monto a retirar: "))

    appBancaria(saldoActual,montoRetirar)