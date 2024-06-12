// Algoritmo con condicional para verificar la disponibilidad de un libro
let librosEnStock = ["Alas de sangre", "Corte de Rosas y Espinas", "Ciudad Medialuna", "Fuego y Sangre"];

function verificarDisponibilidad() {
    let nombreLibro = document.getElementById("nombreLibro").value;
    if (librosEnStock.includes(nombreLibro)) {
        document.getElementById("disponibilidadResultado").innerText = "El libro está disponible en stock.";
    } else {
        document.getElementById("disponibilidadResultado").innerText = "El libro no está disponible en stock.";
    }
}

// Algoritmo con ciclo para hacer una lista de los libros disponibles
let librosDisponibles = ["Alas de sangre", "Corte de Rosas y Espinas", "Ciudad Medialuna", "Fuego y Sangre"];

function listarLibrosDisponibles() {
    let listaLibros = document.getElementById("listaLibros");
    listaLibros.innerHTML = '';
    librosDisponibles.forEach(libro => {
        let li = document.createElement("li");
        li.innerText = libro;
        listaLibros.appendChild(li);
    });
}

listarLibrosDisponibles();

// Simulador interactivo para calcular el costo total de productos seleccionados
let libros = [
    { nombre: "Alas de sangre", precio: 10 },
    { nombre: "Corte de Rosas y Espinas", precio: 15 },
    { nombre: "Ciudad Medialuna", precio: 12 },
    { nombre: "Fuego y Sangre", precio: 20 }
];

let total = 0;

function agregarAlCarrito() {
    let seleccion = document.getElementById("libroSeleccion").value;
    let libro = libros.find(libro => libro.nombre === seleccion);

    if (libro) {
        total += libro.precio;
        document.getElementById("carritoResultado").innerText = `${libro.nombre} agregado al carrito. Precio: $${libro.precio}. Total: $${total}`;
    } else if (seleccion !== "no") {
        document.getElementById("carritoResultado").innerText = "Libro no encontrado.";
    }
}

// Calcular pagos en cuotas
function calcularCuotas() {
    let montoTotal = parseFloat(document.getElementById("montoTotal").value);
    let numeroCuotas = parseInt(document.getElementById("numeroCuotas").value);
    let montoCuota = montoTotal / numeroCuotas;
    document.getElementById("cuotasResultado").innerText = `El monto a pagar por cada cuota es: $${montoCuota.toFixed(2)}`;
}

// Calcular valor final con impuestos y descuentos
function calcularValorFinal() {
    let precioProducto = parseFloat(document.getElementById("precioProducto").value);
    let impuesto = parseFloat(document.getElementById("impuesto").value) / 100;
    let descuento = parseFloat(document.getElementById("descuento").value) / 100;

    let valorFinal = precioProducto + (precioProducto * impuesto) - (precioProducto * descuento);
    document.getElementById("valorFinalResultado").innerText = `El valor final del libro es: $${valorFinal.toFixed(2)}`;
}