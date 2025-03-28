const prompt = require("prompt-sync")()
const redSocial = [
    { nombre: "Alison", edad: 20 },
    { nombre: "Neal", edad: 34 },
    { nombre: "Alexa", edad: 40 },
    { nombre: "Pedro", edad: 15 }
    ];

    function filtrarUsuarios(usuarios,edadminima) {
        let usuariosFiltrados = usuarios.filter(persona => persona.edad >= edadminima);
        return usuariosFiltrados || null; // Devuelve el producto o null si no existe
    }

    let edadMinima = Number(prompt("Digite la edad minima a buscar: "))

    console.log(filtrarUsuarios(redSocial,edadMinima))