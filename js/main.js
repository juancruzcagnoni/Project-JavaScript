class Cuadros {
    constructor (item, nombre, precio) {
        this.item = item;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let cuadros = [
cuadroAbstract = new Cuadros(1, 'Abstract', 99),
cuadroRealistic = new Cuadros(2, 'Realistic', 199),
cuadroPortrait = new Cuadros(3, 'Portrait', 149),
];

let tiposDeCuadros = ['Abstract', 'Realistic', 'Portrait']

let entrada = '';

while (entrada != 'ESC' && entrada != null) {
    let join = tiposDeCuadros.join('\n');
    entrada = prompt(`Ingrese el cuadro que quiere comprar o ESC para finalizar la compra: ${join}`);

    if (entrada == 'Abstract') {
        let precio = cuadroAbstract.precio;
        alert (`Obtuvo su cuadro "Abstract" que vale ${precio}`)
    } else if (entrada == 'Realistic') {
        let precio = cuadroRealistic.precio;
        alert (`Obtuvo su cuadro "Realistic" que vale ${precio}`)
    } else if (entrada == 'Portrait') {
        let precio = cuadroPortrait.precio;
        alert (`Obtuvo su cuadro "Portrait" que vale ${precio}`)
    }


}

