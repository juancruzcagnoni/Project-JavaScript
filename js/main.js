// Variables
let nombre = prompt('Ingrese su nombre para continuar'); 
let entrada = '';

// Constructor de objectos
class Cuadros {
    constructor (item, nombre, precio) {
        this.item = item;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Arrays
let cuadros = [
cuadroAbstract = new Cuadros(1, 'Abstract', 99),
cuadroRealistic = new Cuadros(2, 'Realistic', 199),
cuadroPortrait = new Cuadros(3, 'Portrait', 149),
];

let tiposDeCuadros = ['Abstract', 'Realistic', 'Portrait']

// Menu 
alert (`Buen dia ${nombre}, vamos a realizar su compra!`)

while (entrada != 'ESC' && entrada != null) {
    let saltoDeLinea = tiposDeCuadros.join('\n');
    entrada = prompt(`Ingrese al carrito el cuadro que quiere comprar o ESC para salir\n\n${saltoDeLinea}`);

    if (entrada == 'Abstract') {
        let precio = cuadroAbstract.precio;
        alert (`Agrego a su carrito el cuadro "Abstract" que vale ${precio}`)
    } else if (entrada == 'Realistic') {
        let precio = cuadroRealistic.precio;
        alert (`Agrego a su carrito el cuadro "Realistic" que vale ${precio}`)
    } else if (entrada == 'Portrait') {
        let precio = cuadroPortrait.precio;
        alert (`Agrego a su carrito el cuadro "Portrait" que vale ${precio}`)
    }
}

