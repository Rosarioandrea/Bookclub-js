// Algoritmo con condicional para verificar la disponibilidad de un libro

let nombreLibro = prompt("Ingresa el nombre del libro:");
let librosEnStock = ["El principito", "Cien años de soledad", "Alas de sangre", "Harry Potter"];

if (librosEnStock.includes(nombreLibro)) {
    console.log("El libro está disponible en stock.");
} else {
    console.log("El libro no está disponible en stock.");
}

// Algoritmo con ciclo para hacer una lista de los libros disponibles

let librosDisponibles = ["El principito", "Cien años de soledad", "Alas de sangre", "Harry Potter"];

console.log("Libros disponibles en Bookclub:");
for (let i = 0; i < librosDisponibles.length; i++) {
    console.log(librosDisponibles[i]);
}

// Simulador interactivo para calcular el costo total de productos seleccionados

let libros = [{
        nombre: "El principito",
        precio: 10
    },
    {
        nombre: "Cien años de soledad",
        precio: 15
    },
    {
        nombre: "Alas de sangre",
        precio: 12
    },
    {
        nombre: "Harry Potter",
        precio: 20
    }
];

let total = 0;
let seleccion;

do {
    seleccion = prompt("Ingresa el nombre del libro que deseas comprar o escribe 'no' para finalizar:");
    let libro = libros.find(libro => libro.nombre === seleccion);

    if (libro) {
        total += libro.precio;
        console.log(`${libro.nombre} agregado al carrito. Precio: $${libro.precio}`);
    } else if (seleccion !== "no") {
        console.log("Libro no encontrado.");
    }
} while (seleccion !== "no");

console.log(`El costo total de los libros es: $${total}`);

// Calcular pagos en cuotas 

let montoTotal = parseFloat(prompt("Ingresa el monto total a pagar:"));
let numeroCuotas = parseInt(prompt("Ingresa el número de cuotas:"));

let montoCuota = montoTotal / numeroCuotas;
console.log(`El monto a pagar por cada cuota es: $${montoCuota.toFixed(2)}`);


// Calcular valor final con impuestos y descuentos

let precioProducto = parseFloat(prompt("Ingresa el precio del libro:"));
let impuesto = parseFloat(prompt("Ingresa el porcentaje de impuesto (%):")) / 100;
let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (%):")) / 100;

let valorFinal = precioProducto + (precioProducto * impuesto) - (precioProducto * descuento);
console.log(`El valor final del libro es: $${valorFinal.toFixed(2)}`);