let librosEnStock = ["Alas de sangre", "Corte de Rosas y Espinas", "Ciudad Medialuna", "Fuego y Sangre"];

function verificarDisponibilidad() {
    let nombreLibro = document.getElementById("nombreLibro").value;
    if (librosEnStock.includes(nombreLibro)) {
        document.getElementById("disponibilidadResultado").innerText = "El libro está disponible en stock.";
    } else {
        document.getElementById("disponibilidadResultado").innerText = "El libro no está disponible en stock.";
    }
}

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

let libros = [
    { nombre: "Alas de sangre", precio: 10, imagen: "./assets/alas_de_sangre.jpg" },
    { nombre: "Corte de Rosas y Espinas", precio: 15, imagen: "./assets/corte_de_rosas_y_espinas.jpg" },
    { nombre: "Ciudad Medialuna", precio: 12, imagen: "./assets/ciudad_medialuna.jpg" },
    { nombre: "Fuego y Sangre", precio: 20, imagen: "./assets/fuego_y_sangre.jpg" }
];

let total = 0;

function agregarAlCarrito() {
    let seleccion = document.getElementById("libroSeleccion").value;
    let libro = libros.find(libro => libro.nombre === seleccion);

    if (libro) {
        total += libro.precio;
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(libro);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        document.getElementById("carritoResultado").innerText = `${libro.nombre} agregado al carrito. Precio: $${libro.precio}. Total: $${total}`;
    } else if (seleccion !== "no") {
        document.getElementById("carritoResultado").innerText = "Libro no encontrado.";
    }
}

function agregarAlCarritoPorNombre(nombreLibro) {
    let libro = libros.find(libro => libro.nombre === nombreLibro);

    if (libro) {
        total += libro.precio;
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(libro);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        document.getElementById("carritoResultado").innerText = `${libro.nombre} agregado al carrito. Precio: $${libro.precio}. Total: $${total}`;
    }
}

function mostrarLibrosConImagenes() {
    let librosContainer = document.getElementById("librosContainer");
    librosContainer.innerHTML = '';
    libros.forEach(libro => {
        let libroDiv = document.createElement("div");
        libroDiv.classList.add("libro");
        
        let img = document.createElement("img");
        img.src = libro.imagen;
        img.alt = libro.nombre;
        libroDiv.appendChild(img);
        
        let nombre = document.createElement("p");
        nombre.innerText = libro.nombre;
        libroDiv.appendChild(nombre);
        
        let precio = document.createElement("p");
        precio.innerText = `$${libro.precio}`;
        libroDiv.appendChild(precio);
        
        let boton = document.createElement("button");
        boton.innerText = "Agregar al carrito";
        boton.onclick = () => agregarAlCarritoPorNombre(libro.nombre);
        libroDiv.appendChild(boton);
        
        librosContainer.appendChild(libroDiv);
    });
}

mostrarLibrosConImagenes();

function calcularCuotas() {
    let montoTotal = parseFloat(document.getElementById("montoTotal").value);
    let numeroCuotas = parseInt(document.getElementById("numeroCuotas").value);
    let montoCuota = montoTotal / numeroCuotas;
    document.getElementById("cuotasResultado").innerText = `El monto a pagar por cada cuota es: $${montoCuota.toFixed(2)}`;
}

function calcularValorFinal() {
    let precioProducto = parseFloat(document.getElementById("precioProducto").value);
    let impuesto = parseFloat(document.getElementById("impuesto").value) / 100;
    let descuento = parseFloat(document.getElementById("descuento").value) / 100;

    let valorFinal = precioProducto + (precioProducto * impuesto) - (precioProducto * descuento);
    document.getElementById("valorFinalResultado").innerText = `El valor final del libro es: $${valorFinal.toFixed(2)}`;
}