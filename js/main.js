// Variables
let stock = 8;
let opcion;

// Funciones 
const venta = (cant) => {
    if (stock >= cant) {
        stock = stock - cant;
        alert (`Compra realizada con exito!`);
        alert (`Aprovecha! nos quedan solo ${stock} unidades.`);
    } else{
        alert (`No hay stock suficiente, quedan ${stock} unidades.`);
    }
}

// Menu 
do {
    opcion = Number (prompt('Ingrese una opcion: \n\n 1. Realizar compra.\n 2. Salir.'));
    let cant;

    switch (opcion) {
        case 1:    
            cant = Number(prompt('Ingrese la cantidad de cuadros que quiere.'));
            venta(cant);
            break;

        case 2:    
            alert('Que pena, esperamos que vuelvas.');
            break;
    }
} while (opcion != 2);


