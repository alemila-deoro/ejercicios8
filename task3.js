const prompt = require("prompt-sync")()
const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Vestido banio", precio: 80 },
    { nombre: "Pashmina", precio: 100 }
    ];

    function buscarProducto(nombre) {
        let productoEncontrado = inventario.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
        return productoEncontrado || null; // Devuelve el producto o null si no existe
    }

    let producto = (prompt("Digite el producto a buscar: "))

    console.log(buscarProducto(producto))
