const addToShoppingCart = document.querySelectorAll('.button');

addToShoppingCart.forEach(addButton => {
    addButton.addEventListener('click', addButtonClicked);
});

const buyButton = document.querySelector(".buyButton");
buyButton.addEventListener("click", buyButtonClicked);
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

let aux = localStorage.getItem('productsInCart');
let productsInCart;

if (!aux) {
    productsInCart = [];
}else {
    productsInCart = JSON.parse(aux);
}

let localName = [];
let localImage = [];
let localPrice = [];

function addButtonClicked(event) {
    const button = event.target;
    const card = button.closest('.card');

    const itemName = card.querySelector('.name').textContent;
    const itemPrice = card.querySelector('.price').textContent;
    const itemImage = card.querySelector('.image').src;

    localName.push(itemName);
    localImage.push(itemImage);
    localPrice.push(itemPrice);

    addItemToShoppingCart(itemName, itemPrice, itemImage);

    localStorage.setItem("name", [...localName]);
    localStorage.setItem("image", [...localImage]);
    localStorage.setItem("price", [...localPrice]);
}

// Add to the shopping cart 
function addItemToShoppingCart(itemName, itemPrice, itemImage) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-5 col-md-8">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shoppingCartImage">
                <p class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemName}</p>
            </div>
        </div>
        <div class="col-4 col-md-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice"> ${itemPrice} </p>
            </div>
        </div>
        <div class="col-3 col-md-2">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shoppingCartQuantityInput shoppingCartItemQuantity" type="number" value="1">
                <button class="buttonX buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);
    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityUpdate);
    updateShoppingCartTotal();
};

// Update price 
function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
      const shoppingCartItemPrice = parseFloat(shoppingCartItemPriceElement.textContent.replace('$', ''));
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
      const shoppingCartItemQuantity = parseFloat(shoppingCartItemQuantityElement.value);
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;

}

function removeShoppingCartItem (event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityUpdate(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null; 
    updateShoppingCartTotal();
}
  
function buyButtonClicked() {
    shoppingCartItemsContainer.innerHTML = "";
    updateShoppingCartTotal();
}

// Modal 
const openModal = document.querySelector('.openModal');
const modal = document.querySelector('.shoppingCart');
const closeModal = document.querySelector('.modalClose')

openModal.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.classList.add('modalShow');
})

closeModal.addEventListener('click', (event) => {
    event.preventDefault(); 
    modal.classList.remove('modalShow');
})

