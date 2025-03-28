const prompt = require("prompt-sync")()

function calcularPropina(total, porcentaje) {
    let propina = total * (porcentaje / 100)
    return total + propina;
  }

let total = Number(prompt("Digite el valor total de la cuenta: "))

let porcentaje = Number(prompt("Digite el porcentaje de la propina a cobrar: "))

let vlrTotalmasProp = calcularPropina(total, porcentaje)

console.log("El valor total de su cuenta es: " + vlrTotalmasProp)

