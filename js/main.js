// // Constructor
// class Producto {
//     constructor(cuadro, autor, precio, categoria) {
//         this.cuadro = cuadro;
//         this.autor = autor;
//         this.precio = precio;
//         this.categoria = categoria;  
//     }
//     mostrarProducto() {
//         return ("Cuadro N°: " + this.cuadro + ',' + " Precio: " + this.precio + ',' + " Autor: " + this.autor + "\n");
//     }
// }

// // Array de productos 
// let productos = [
//     new Producto(1, 'Charlie Lewis', 149, 'Abstract'),
//     new Producto(2, 'Dorothy Moore', 99, 'Abstract'),
//     new Producto(3, 'Kimberly Young', 139, 'Abstract'),
//     new Producto(4, 'Henry Cook', 199,'Abstract'),

//     new Producto(5, 'Peter Walker', 129, 'Realistic'),
//     new Producto(6, 'Kathleen Clark', 49, 'Realistic'),
//     new Producto(7, 'Larry Davies', 299, 'Realistic'),
//     new Producto(8, 'Jeffrey Morris', 89, 'Realistic'),

//     new Producto(9, 'Brandon Allen', 199, 'Portrait'),
//     new Producto(10, 'Sophia Phillips', 99, 'Portrait'),
//     new Producto(11, 'Debra Jones', 89, 'Portrait'),
//     new Producto(12, 'Emily Clark', 299, 'Portrait'),
// ];

// // Array de categorias 
// let categorias = ["Abstract", "Realistic", "Portrait"];

// // Array de productos en el carro 
// let productosEnCarro = [];

// // Menu 
// let categoria = "";

// while (categoria != "ESC" && categoria != null) {
//     let aux = categorias.join ("\n");
//     categoria = prompt(`Ingrese la categoria del cuadro que quiere comprar o "ESC" para abandonar la compra. \n\n${aux}`);
    
//     if (categoria != "ESC" && categoria != null) {
//         let productosFiltradoPorCategoria = productos.filter((item) => item.categoria == categoria);
        
//         let cartel = "";
//         for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
//             cartel += productosFiltradoPorCategoria[i].mostrarProducto();
//         }
        
//         let idSeleccionado = parseInt(prompt("Seleccione el N° del cuadro que quiere comprar: \n\n" + cartel));
        
//         let productoParaCarro = productosFiltradoPorCategoria.find((item) => item.cuadro == idSeleccionado);
        
//         if (productoParaCarro) {
//             productosEnCarro.push(productoParaCarro);                
//         }            
//     }    
// }

// function comprar(nombre, productosEnCarro) {
//     let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);  
//     alert("Gracias " + nombre + " por tu compra, esperamos que vuelvas! \nTotal: $" + cant);   
// }

// if (productosEnCarro.length > 0) {
//     alert('Ingresa tus datos para seguir con la compra!');
//     let nombre = prompt('Nombre:');
//     let email = prompt('Email:');
//     comprar(nombre, productosEnCarro);
// }


const addToShoppingCart = document.querySelectorAll('.button');

addToShoppingCart.forEach(addButton => {
    addButton.addEventListener('click', addButtonClicked);
});

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addButtonClicked(event) {
    const button = event.target;
    const card = button.closest('.card');

    const itemName = card.querySelector('.name').textContent;
    const itemPrice = card.querySelector('.price').textContent;
    const itemImage = card.querySelector('.image').src;

    addItemToShoppingCart(itemName, itemPrice, itemImage);
}

function addItemToShoppingCart(itemName, itemPrice, itemImage) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <p class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemName}</p>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice"> ${itemPrice} </p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
};
