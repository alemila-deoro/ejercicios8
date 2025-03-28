const prompt = require("prompt-sync")()

function calcularPromedio(notas){
    let suma = 0;
    for(let i=0;i<notas.length;i++){
        suma=suma+notas[i];
    }
    return promedio = (suma/notas.length).toFixed(2);
}

let notasArr2 = []
for(let n=1;n<=5;n++){
    let notaInd = Number(prompt("Digite la nota "+n+" : "))
    notasArr2.push(notaInd)
}

console.log(notasArr2)
console.log(calcularPromedio(notasArr2))