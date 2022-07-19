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
